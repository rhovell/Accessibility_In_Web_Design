import React, { Component } from 'react'
import './App.scss'
import InaccessiblePage from './Inaccessible/InaccessiblePage.js'
import AccessiblePage from './Accessible/AccessiblePage.js'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        accessible: false

      }
      this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){
    this.setState(prevState => ({
      accessible: !prevState.accessible
    }))
    // let accessible = this.state.accessible
    // if(!accessible){
    //
    // }

  }

  render() {
    const accessible = this.state.accessible
    const handleClick = this.handleClick
    return (
      <div className="app">
        {accessible ? <AccessiblePage></AccessiblePage>: <InaccessiblePage></InaccessiblePage> }
        {accessible ? <div className="footer accessible">
          <div className="swap-button">
          {accessible ?
            <label htmlFor="inaccessible">Make this website less accessible friendly
             <button id="inaccessible" className="inaccessible" onClick={handleClick}>Make me Inaccessible</button>
             </label>
          :

           <button  onClick={handleClick} className="accessible" >Make me Accessible!</button>
         }
          </div>
        </div>:
          <div className="footer inaccessible">
            <div className="swap-button">
            {accessible ?
               <button className="inaccessible" onClick={handleClick}>Make me Inaccessible</button>
            :
             <button onClick={handleClick} className="accessible">Make me better!</button>}
            </div>
          </div>}

      </div>
  )
}

}

export default App
