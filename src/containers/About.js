import React, { Component } from 'react'

import { getRouteProps, Link, Head } from 'react-static'


class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleKeyboard.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.handleKeyboard.bind(this))
  }

  openLightbox (index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  handleKeyboard (event) {
    if (event.keyCode === 37) { // esc
      this.gotoPrevious()
    }

    if (event.keyCode === 39) { // enter
      this.gotoNext()
    }
  }

  render () {

      console.log('About', this.props)

    const lang = this.props.lang

      let data = this.props.data

    return (
      <div key="about">

        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:url" content={`http://www.theatreofsenses.com${this.props.match.path}`} />
          <meta property="og:title" content="Theatre of senses" />
          <meta property="og:description" content="Theatre of senses creates participatory performances" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/logo.png" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/bendra.jpg" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/bendra1.jpg" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/works/beforethelight/12967441_1195397820500203_7812589370848680694_o.jpg" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/works/picturesofsenses/DSC_2878.JPG" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/works/primordial/15400421_1356627651014436_8408958191387817476_n.jpg" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/works/stonewatersting/vyt_3199.jpg" />
          <meta property="og:image" content="http://www.theatreofsenses.com/images/works/tenseinsense/DSC_0151.JPG" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>


        <div className="works-block">
          <div className="App-right-heading-works">{data.labels.title}</div>
        </div>

        <div className="image-gallery-about">
          {data.images.map((img, index) => index < 2 && <div key={index} className="image-about"><img
            src={`/images/${img.src}`}
            alt=""
            onClick={event => this.openLightbox(index, event)}
            key={index}
          /></div>)}
        </div>

        <div className="App-right-text" style={{ fontSize: '14px' }}>
          <ul className="aboutList">{data.text.split('\n').map((item, key) => <li key={key}>{item}</li>)}</ul>
        </div>

        <div className="aboutBlock">
          <div className="aboutSubheading">
            <b>{data.labels.team}</b>
            <br /><br />
            <div className="App-right-text">
              <div className="title">{data.labels.director}</div>
              <div className="person">{data.director}</div>
              <br />
              <div className="title">{data.labels.scenographer}</div>
              <div className="person">{data.scenographer}</div>
              <br />
              <div className="title">{data.labels.team}</div>
              <div className="person">{data.team.split('\n').map((item, key) => <span key={key}>{item}<br /></span>)}</div>
              <br />
              <div className="title">{data.labels.management}</div>
              <div className="person">{data.management}</div>
            </div>
          </div>
          <div className="aboutSubheading">
            <b>{data.labels.writeUs}</b>
            <br /><br />
            <div className="App-right-text" style={{ fontSize: '17px' }}>
              <a href="http://www.facebook.com/pojuciuteatras" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square" aria-hidden="true" />acebook
              </a>
              <br />
              <a href="mailto:hi@theatreofsenses.com">hi@theatreofsenses.com</a>
            </div>
          </div>
        </div>

        {/*
                <br/><br/>
                <div className="image-gallery-about">
                    {data.images.map((img, index) =>
                        index > 1 && <div key={index} className="image-about"><img src={`/images/${img.src}`} alt="" onClick={(event) => this.openLightbox(index, event)} key={index}/></div>
                    )}
                </div>
                 */}

        <div className="App-right-subheading"><b>{data.labels.press}</b></div>
        <div className="App-right-text">
          {data.press.map((el, i) =>
            (<div key={i} style={{ paddingBottom: '5px' }}>
              <a href={el.href} target="_blank" rel="noopener noreferrer">{el.text}</a>
            </div>),
          )}
        </div>


        {this.state.lightboxIsOpen && data.images[this.state.currentImage] &&
        <div className="lightbox">
          <div className="arrow close" onClick={this.closeLightbox}>✕</div>
          <div className="arrow arrowRight" onClick={this.gotoPrevious}>➔</div>
          <div className="lightboxImage">
            <img className="image" src={`/images/${data.images[this.state.currentImage].src}`} alt="" />
          </div>
          <div className="arrow arrowLeft" onClick={this.gotoNext}>➔</div>
          <div className="shade" onClick={this.closeLightbox} />
        </div>
        }

      </div>
    )
  }
}
export default getRouteProps(About)
