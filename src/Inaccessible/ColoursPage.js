import React, { Component } from 'react'
import '../App.scss'

class ColoursPage extends Component {
  constructor(props){
      super(props);
      this.state = {


      }
  }



  render() {
    return (
      <div className="ColoursPage">
      <section>
        <div className="text">
          <div className="colours">
          <h2>Colours</h2>
            <p>Here is an example of how people with different types of colour blindness may percieve information that is presented by colour alone:</p>
            <h3>"Normal" colour vision</h3>
            <p>Here is some information about something very interesting. <span className="red">But I want you to pay attention to this section more. </span><a href="#" className="normal">Here's a link too</a></p>
            <h3>Blue Blindness</h3>
            <p>Here is some information about something very interesting. <span className="red">But I want you to pay attention to this section more. </span><a href="#" className="turq">Here's a link too</a></p>
            <h3>Green Blindness</h3>
            <p>Here is some information about something very interesting. <span className="brown">But I want you to pay attention to this section more. </span><a href="#" className="blue">Here's a link too</a></p>
            <h3>Red Blindness</h3>
            <p>Here is some information about something very interesting. <span className="black">But I want you to pay attention to this section more. </span><a href="#" className="lightblue">Here's a link too</a></p>
          </div>
          <div className="fonts">
          <h2>Fonts</h2>
          <p style={{fontFamily:'cursive'}}>Cursive</p>
          <p style={{fontFamily:'fantasy'}}>Fantasy</p>
          <p style={{fontFamily:'monospace'}}>Monospace</p>
          <p style={{fontFamily:'sans-serif'}}>Sans-Serif</p>
          <p style={{fontFamily:'serif'}}>Serif</p>
          </div>

        </div>
      </section>


      </div>
  )
}

}

export default ColoursPage
