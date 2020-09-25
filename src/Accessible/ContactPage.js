import React, { Component } from 'react'
import '../App.scss'

class ContactPage extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''

      }
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(e.target.email.value)
    this.setState({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    })
  }


  render() {
    const handleSubmit = this.handleSubmit
    const validateEmail = this.validateEmail;
    return (
      <div className="ContactPage">
      <section>
        <h2 aria-label="Contact Us Page">Contact us</h2>
        <p>How can we help you?</p>

        <div className="section-content">
          <p>Simply fill out the form below to get in touch and one of our team will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} id="contactForm" aria-label="Contact Us Form" autoComplete="off">
            <table>
              <tbody>
                <tr>
                  <td className="label-cell">
                    <label htmlFor="name">Name: (required)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="name" type="text" placeholder="name" aria-describedby="name" aria-required="true" ></input>
                    <div id="name-error" className="screenreaderOnly name-error">Please enter your name</div>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">
                    <label htmlFor="email">Email: (required)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="email" type="text" name="email" placeholder="email" aria-required="true" onChange={validateEmail}></input>
                    <div id="email-error" className="screenreaderOnly email-error">Please enter a valid email address</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="contactReason">Why are you contacting us? (required)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <select id="contactReason" aria-required="true">
                      <option disabled>Please select an option</option>
                      <option title="Just Because" aria-label="Just Because">Just Because</option>
                      <option title="To Say Hi" aria-label="To Say Hi">To Say Hi</option>
                      <option title="To Complain" aria-label="To Complain">To Complain</option>
                      <option title="Other" aria-label="Other">Other</option>
                    </select>
                    <div id="reason-error" className="screenreaderOnly reason-error">Please let us know why you are contacting us</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="permission">Are you happy for us to get in touch? (required)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="permission" type="checkbox" aria-required="true" aria-describedby="permission-error"></input>
                    <div id="permission-error" className="screenreaderOnly permission-error">Please give us permission to get in touch</div>
                  </td>
                </tr>
                <tr>
                  <td className="label-cell">
                    <label htmlFor="message">Message: (required)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea id="message" type="text" rows="5" name="message" placeholder="message" aria-required="true"></textarea>
                    <div id="message-error" className="screenreaderOnly message-error">Please enter your message here</div>
                  </td>
                </tr>
                <tr colSpan="2">
                  <td colSpan="2" className="stretch">
                    <input type="submit" className="submit button" aria-describedby="submit-button"></input>
                    <input type="reset" className="reset button" value="Reset form" aria-describedby="reset-button"/>

                    <div id="submit-button" className="screenreaderOnly">Submit Your Query</div>
                    <div id="reset-button" className="screenreaderOnly">Clear Query Form</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>
    </div>
  )
}

}

export default ContactPage
