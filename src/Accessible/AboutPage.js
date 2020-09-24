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
      <section>
        <article className="section-header">
          <h2>About Page</h2>
        </article>
      </section>
      <section>
        <article>
          <div className="article-title">
            <h3>Who We Are</h3>
          </div>
          <div className="article-main">
            <figure>
              <img className="article-hero" src="laptop.jpg" alt="Laptop"></img>
              <figcaption>Laptop</figcaption>
            </figure>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </article>
        <article>
          <div className="article-title">
            <h3>What we do</h3>
          </div>
          <div className="article-main">
            <figure>
              <img className="article-hero" src="laptop.jpg" alt="Laptop"></img>
              <figcaption>Laptop</figcaption>
            </figure>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </article>
        <article>
          <div className="article-title">
            <h3>Why we do it</h3>
          </div>
          <div className="article-main">
            <figure>
              <img className="article-hero" src="laptop.jpg" alt="Laptop"></img>
              <figcaption>Laptop</figcaption>
            </figure>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </article>
      </section>


      </div>
  )
}

}

export default AboutPage
