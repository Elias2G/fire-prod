var express = require('express');
const path = require('path');
var mysql = require('mysql');

var app = express();

var pool = mysql.createPool({
  connectionLimit: 100,
  host: '157.230.106.121', //localhost
  user: 'remote',
  password: 'Richtig_Sicher2019',
  database: 'ff-kappel',
  debug: false
});



app.use(express.static(path.join(__dirname, 'client/build')));

const get = "/api/get/";

var termine = "SELECT * from Termine_Online ORDER BY Datum";
var news = "SELECT * from News_Online";

var einsätze = "SELECT anwesenheit.Bilderverzeichnis, anwesenheit.Datum, anwesenheit.Brandeinsatz, anwesenheit.Techn_Einsatz, anwesenheit.Techn_Hilfeleistung, anwesenheit.Beginn, anwesenheit.Dauer, anwesenheit.Ausrueckungsgrund, anwesenheit.Einsatzort, anwesenheit.`TLFA2000`, anwesenheit.`SLF`, anwesenheit.`MTF`, Sum(`Status_Anw`)*(1) AS Anzahl FROM anwesenheit INNER JOIN `name für anwesenheit` ON anwesenheit.`Lfd_Nr` = `name für anwesenheit`.`Einsatz-Nr` GROUP BY anwesenheit.Datum, anwesenheit.Brandeinsatz, anwesenheit.Techn_Einsatz, anwesenheit.Techn_Hilfeleistung, anwesenheit.Beginn, anwesenheit.Dauer, anwesenheit.Ausrueckungsgrund, anwesenheit.Einsatzort, anwesenheit.TLFA2000, anwesenheit.SLF, anwesenheit.MTF, anwesenheit.Lfd_Nr HAVING (anwesenheit.Brandeinsatz = true) OR ( anwesenheit.Techn_Einsatz = True) OR (anwesenheit.Techn_Hilfeleistung = True)";

var akt_funktionen = "SELECT concat(Vorname, ' ', Zuname) AS Name, Funktion.Kürzel, Funktion.`Paß-Nr` AS id, mannschaft.Status, Funktionskürzel.Bezeichnung, Funktion.Datum_anfang, Funktion.Datum_ende, Funktionskürzel.Rangordnung FROM Funktionskürzel INNER JOIN (mannschaft INNER JOIN Funktion ON mannschaft.`Paß-Nr`= Funktion.`Paß-Nr`) ON Funktionskürzel.Kürzel = Funktion.Kürzel GROUP BY Zuname,' ',Vorname , Funktion.Kürzel, mannschaft.Status, Funktionskürzel.Bezeichnung, Funktion.Datum_anfang, Funktion.Datum_ende, id, Funktionskürzel.Rangordnung HAVING (((Count(Funktion.Datum_ende))=0)) ORDER BY Name";

var aktueller_Dienstgrad = "SELECT mannschaft.`Paß-Nr` AS id, concat(Vorname, ' ', Zuname) AS Name, dienstkürzel.Kürzel, mannschaft.Bilderverzeichnis, dienstkürzel.Dienstgradbez, mannschaft.Status, dienstkürzel.Reihung, dienstgrad.Datum FROM (mannschaft INNER JOIN (dienstkürzel INNER JOIN dienstgrad ON (dienstkürzel.Kürzel = dienstgrad.Kürzel) AND (dienstkürzel.Kürzel = dienstgrad.Kürzel)) ON mannschaft.`Paß-Nr` = dienstgrad.`Paß-Nr`) INNER JOIN (SELECT dienstgrad.`Paß-Nr`, Max(dienstgrad.Datum) AS `Max von Datum` FROM mannschaft LEFT JOIN dienstgrad ON mannschaft.`Paß-Nr` = dienstgrad.`Paß-Nr` GROUP BY dienstgrad.`Paß-Nr`) akt_dienstgrad_ermitteln ON mannschaft.`Paß-Nr` = `akt_dienstgrad_ermitteln`.`Paß-Nr` GROUP BY mannschaft.`Paß-Nr`, Name, dienstkürzel.Kürzel, mannschaft.Bilderverzeichnis, dienstkürzel.Dienstgradbez, dienstgrad.Datum, mannschaft.Status, `akt_dienstgrad_ermitteln`.`Max von Datum` HAVING (((dienstgrad.Datum) = `Max von Datum`)) ORDER BY Name";

const handle_database =  query => (req, res) => {
  pool.getConnection(function(err, connection) {
    if(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }
    console.log("connected as id " + connection.threadId, query);

    connection.query(query, function(err, rows) {
      connection.release();
      if(!err) {
        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });
}

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const getApiCall = (api, query) => {
  app.get(api, handle_database(query));
}

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

getApiCall(get + "einsaetze", einsätze);
getApiCall(get + "termine", termine);
getApiCall(get + "news", news);

getApiCall(get + "dienstgrad", aktueller_Dienstgrad);
getApiCall(get + "funktionen", akt_funktionen);

const port = process.env.PORT || 8080;
app.listen(port);
