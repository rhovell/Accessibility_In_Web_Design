import React, { Component } from 'react'
import '../App.scss'

class ContactPage extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        email: ''

      }
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(e.target.email.value)
    this.setState({
      name: e.target.name.value,
      email: e.target.email.value
    })
  }


  render() {
    const handleSubmit = this.handleSubmit
    return (
      <div className="ContactPage">
      <p>Contact us</p>
      <form onSubmit={handleSubmit}>
      Name:
      <input type="text" name="name"></input>
      Email:
      <input type="text" name="email"></input>
      Why are you contacting us?
      <select>
        <option disabled>Please select an option</option>
        <option title="first-option" aria-label="option 1">Just Because</option>
        <option title="second-option" aria-label="option 2">To Say Hi</option>
        <option title="third-option" aria-label="option 3">To Complain</option>
        <option title="fourth-option" aria-label="other 4">Other</option>
      </select>
      Checkbox:
      <input type="checkbox"></input>
      <input type="submit" className="submit" ></input>
      </form>

      </div>
  )
}

}

export default ContactPage
