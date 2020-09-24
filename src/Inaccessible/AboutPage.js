import React, { Component } from 'react'
import '../App.scss'

class AboutPage extends Component {
  constructor(props){
      super(props);
      this.state = {


      }
  }



  render() {
    return (
      <div className="AboutPage">
        <h3>About Page</h3>
        <p>This is a lengthend piece of information full of academical words that aren't spelt legitimately and is full of convoluted words meant to confound and bamboozle patrons out of their wealth.</p>
        <h1>We're great at befuddling people!</h1>
        We turn this ->
        <img src='old.png' alt=''></img>
        Into this! ->
        <img src='new.jpg' alt=''></img>
        <p>Do you have any idea what we do?</p>
        <h2>Because we're not sure we know either!</h2>


      </div>
  )
}

}

export default AboutPage
