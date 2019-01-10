import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url, urlName } from './url';

import DropDown from './dropDown.js';

export class Navigation extends Component {
  state = {
    width: window.outerWidth,
    open: false,
  }
  componentDidMount() {
    this.size();
    window.addEventListener("resize", this.size);
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  size = () => {
    var w = window.innerWidth;
    setTimeout(() => {
      this.setState({
        width: w,
      })
    },500);
  }

  render() {
    return(
      <div className="nav">
        {this.renderHelper()}
      </div>
    )
  }

  renderHelper = () => {
    if(this.state.width < 1024) {
      return(
        <>
        <div className="mobile row">
          <div className="column col-s-10"><h2>FF-Kappel</h2></div>
          <div
            className="column col-s-2 flex-algin-center justify-center nop"
            onClick={this.handleClick}
          >
            <div className="nav-icon"></div>
          </div>
        </div>
        <div className={"nav-menü " + this.state.open}>
          <div className="nav-item">
            <NavLink exact to='/' onClick={this.handleClick} activeClassName="activeLink">
              <p>Home</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <DropDown
              data={["Mannschaft", "Fahrzeuge"]}
              goTo={["/mannschaft", "/fahrzeuge"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <DropDown
              data={["Einsätze", "Statistik", "Einsatzgebiet"]}
              goTo={["/einsätze", "/statistic", "/einsatzgebiet"]}
              function={this.handleClick}
            />
          </div>
          <div className="nav-item">
            <NavLink exact to='/termine' onClick={this.handleClick} activeClassName="activeLink">
              <p>Termine</p>
            </NavLink>
          </div>
          <div className="nav-item">
            <DropDown
              data={["Kontakt", "Notruf"]}
              goTo={["/kontakt", "/notruf"]}
              function={this.handleClick}
            />
          </div>
        </div>
        </>

      )
    } else {
      return(
        <>
        <div className="desktop shadow row">
          <div className="column col-md-2"><h4 className="nb">FF-Kappel</h4></div>
          <div className="column col-md-10 justify-center">
            <div className="row justify-end">
              <div className="column test">
                <NavLink exact to='/' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Home</p>
                </NavLink>
              </div>
              <div className="column test">
                <NavLink exact to='/neuigkeiten' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Neuigkeiten</p>
                </NavLink>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/mannschaft' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Mannschaft</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/fahrzeuge' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Fahrzeuge</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/einsätze' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Einsätze</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/statistic' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Statistik</p>
                    </NavLink>
                    <NavLink exact to='/einsatzgebiet' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Einsatzgebiet</p>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column test">
                <NavLink exact to='/termine' onClick={this.handleClick} activeClassName="activeLink">
                  <p>Termine</p>
                </NavLink>
              </div>
              <div className="column test">
                <div className="desktopDown">
                  <NavLink exact to='/kontakt' onClick={this.handleClick} activeClassName="activeLink">
                    <p>Kontakt</p>
                  </NavLink>
                  <div className="d-hidden shadow-big">
                    <NavLink exact to='/notruf' onClick={this.handleClick} activeClassName="activeLink">
                      <p>Notruf</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
}
