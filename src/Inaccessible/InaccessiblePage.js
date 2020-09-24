  import React, { Component } from 'react'
import '../App.scss'
import ContactPage from './ContactPage.js'
import HomePage from './HomePage.js'
import AboutPage from './AboutPage.js'
import ColoursPage from './ColoursPage.js'

class InaccessiblePage extends Component {
  constructor(props){
      super(props);
      this.state = {
        openPage: 'Home'

      }
      this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){
    e.preventDefault()
    console.log(e.target.innerText)
    this.setState({
      openPage: e.target.innerText
    })
  }

  render() {
    const handleClick = this.handleClick
    const openPage = this.state.openPage
    return (
      <div className="InaccessiblePage">
        <div className="head">
          <p>Change this to logo</p>
          <div className="menu-bar">
            <div className="menu-button-holder">
              <div className="menu-button" onClick={handleClick}>Home</div>
            </div>
            <div className="menu-button-holder">
              <div className="menu-button" onClick={handleClick}>About</div>
            </div>
            <div className="menu-button-holder">
              <div className="menu-button" onClick={handleClick}>Contact</div>
            </div>
            <div className="menu-button-holder">
              <div className="menu-button" onClick={handleClick}>Colours</div>
            </div>
          </div>
        </div>
        <div className="pages">
          {openPage === 'Home' ? <div className="page"><HomePage></HomePage></div>: <></>}
          {openPage === 'About' ? <div className="page"><AboutPage></AboutPage></div>: <></>}
          {openPage === 'Contact' ? <div className="page"><ContactPage></ContactPage></div>: <></>}
          {openPage === 'Colours' ? <div className="page"><ColoursPage></ColoursPage></div>: <></>}

        </div>
      </div>
  )
}

}

export default InaccessiblePage
