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
        <aside>
        <h2 className="aside-header">Article Links</h2>
          <ul className="article-list" aria-label="Article List">
            <li className="article-link" >
              <a href="/#articleOne" title="Article Title">Article Number 1</a>
            </li>
            <li className="article-link">
              <a href="/#articleTwo" title="Article Title">Article Number 2</a>
            </li>
            <li className="article-link">
              <a href="/#articleThree" title="Article Title">Article Number 3</a>
            </li>
            <li className="article-link">
              <a href="/#articleFour" title="Article Title">Article Number 4</a>
            </li>
          </ul>
        </aside>
        <section>
          <article id="articleOne">
            <p className="pub-date">Date Published: 10th September 2020</p>
            <h3>Article Number One Title</h3>
            <img src='./people.jpg' alt='Happy people walking' className="article-hero" ></img>
            <p className="article-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a className="read-more-link" href="/" title="Read More">Read More</a>
          </article>
          <article id="articleTwo">
            <p className="pub-date">Date Published: 10th September 2020</p>
            <h3>Article Number Two Title</h3>
            <img src='./people.jpg' alt='Happy people walking' className="article-hero" ></img>
            <p className="article-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a className="read-more-link" href="/" title="Read More">Read More</a>
          </article>
          <article id="articleThree">
            <p className="pub-date">Date Published: 10th September 2020</p>
            <h3>Article Number Three Title</h3>
            <img src='./people.jpg' alt='Happy people walking' className="article-hero" ></img>
            <p className="article-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a className="read-more-link" href="/" title="Read More">Read More</a>
          </article>
          <article id="articleFour">
            <p className="pub-date">Date Published: 10th September 2020</p>
            <h3>Article Number Four Title</h3>
            <img src='./people.jpg' alt='Happy people walking' className="article-hero" ></img>
            <p className="article-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <a className="read-more-link" href="/" title="Read More">Read More</a>
          </article>


        </section>



      </div>
  )
}

}

export default HomePage
