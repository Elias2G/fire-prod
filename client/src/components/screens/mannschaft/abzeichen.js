import React, { Component } from "react";

class Abzeichen extends Component{
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <div className="align-center">
          <p className="abzeichenP">
            <span onClick={this.toggleHidden} className="abzeichen light">Abzeichen</span>
          </p>
        </div>
        {!this.state.isHidden && <Child />}
      </div>
    )
  }
}

const Child = () => (
<center>
  <div>
      <img src="http://www.feuerwehr-kappel.at/mannschaft/ranks/obi.jpg" className="abzeichenBilder"/>
      <img src="http://www.feuerwehr-kappel.at/mannschaft/functions/gkom.gif" className="abzeichenBilder"/>
      <img src="http://www.feuerwehr-kappel.at/mannschaft/functions/bezirksausbildner.gif" className="abzeichenBilder"/>
      <img src="http://www.feuerwehr-kappel.at/mannschaft/functions/na.gif" className="abzeichenBilder"/>
      <img src="http://www.feuerwehr-kappel.at/mannschaft/functions/maschkr.gif" className="abzeichenBilder"/>
  </div>
</center>
)

export default Abzeichen;
