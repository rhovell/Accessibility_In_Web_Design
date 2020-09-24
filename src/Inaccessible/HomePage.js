import React, { Component } from 'react'
import '../App.scss'

class HomePage extends Component {
  constructor(props){
      super(props);
      this.state = {


      }
  }



  render() {
    return (
      <div className="HomePage">
        <p>Home Page</p>
        <h3>Welcome to our homepage</h3>
        <p>We have lots of things to write about...</p>
        <h2>Section Headers!</h2>
        <p>Content full to bursting...</p>
        <a href="/">Random Link to nowhere....</a>
        <h1>How about this section?!</h1>
        <p>Full of interesting things to say and do...</p>
        <img src='./meme.jpg' alt=''></img>
        <h6>This is a header too!</h6>
        <br/>
        <br/>
        <button>Click here!</button><br/><br/><br/><br/>
        <input type="checkbox"></input><br/>
        <br/>
        <button className="accessibleBtn">Submit</button><br/><br/><br/><br/>


          <span className="accessibleInput"></span>

      </div>
  )
}

}

export default HomePage
