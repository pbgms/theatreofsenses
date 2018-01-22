import React, { Component } from 'react'
import { Link, getRouteProps } from 'react-static';



class Work extends Component {

    constructor(props) {
        super(props)

        console.log('Work')

        // sort by date
        props.data.works.sort((a, b) => b.date.localeCompare(a.date))

        let defaultSlug = this.props.match.params.name ? this.props.match.params.name : props.data.works[0].slug

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            work: props.data.works.find(work => work.slug === defaultSlug),
            readMore: false,
        }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            lightboxIsOpen: false,
            currentImage: 0,
        })
    }

    componentDidMount() {
        window.addEventListener("keyup", this.handleKeyboard.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener("keyup", this.handleKeyboard.bind(this));
    }

    openLightbox (index, event) {
        event.preventDefault()
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        })
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        })
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1
        })
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }

    handleKeyboard(event){
        if( event.keyCode === 37 ) { //esc
            this.gotoPrevious()
        }

        if( event.keyCode === 39 ) { //enter
            this.gotoNext()
        }
    }


    render() {

        const lang = this.props.lang

        let data = this.props.data

        let work = this.state.work
        let label = data.labels

        return (
            <div>

                <div className="App-right-heading">
                    {work.name}
                    <div className="text-inline">{work.date}</div>
                </div>
                <div className="App-right-text">{work.description}</div>
                {work.readMore &&
                <div className="App-right-text">
                    {!this.state.readMore && <div className="readMorelink" onClick={()=>{this.setState({readMore: true})}}>Read more</div>}
                    {this.state.readMore && <div className="readMorelink" onClick={()=>{this.setState({readMore: false})}}>Read less</div>}
                    {this.state.readMore && <div>{work.readMore}</div>}
                </div>}

                <div className="image-gallery">
                    {work.images.map((img, index) =>
                        <img src={`/images/works/${img.src}`} alt="" onClick={(event) => this.openLightbox(index, event)} key={index}/>
                    )}
                </div>

                {work.imagesAuthor && <div className="photosBy">{label.imagesAuthor} {work.imagesAuthor}</div>}

                <div className="App-right-subheading"><b>{data.labels.performers}</b></div>
                <div className="App-right-text performers">
                    {work.performers.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
                </div>

                <div className="App-right-subheading"><b>{label.rider}</b></div>
                <div className="App-right-text">
                    {work.rider.duration !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Duration:</div><div className="rider-item-text">{work.rider.duration}</div>
                    </div>}
                    {work.rider.language !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Language:</div><div className="rider-item-text">{work.rider.language}</div>
                    </div>}
                    {work.rider.stage !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Stage:</div><div className="rider-item-text">{work.rider.stage}</div>
                    </div>}
                    {work.rider.light !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Light:</div><div className="rider-item-text">{work.rider.light}</div>
                    </div>}
                    {work.rider.sound !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Sound:</div><div className="rider-item-text">{work.rider.sound}</div>
                    </div>}
                    {work.rider.schedule !== '' &&
                    <div className="rider-item">
                        <div className="rider-item-label">Schedule:</div><div className="rider-item-text">{work.rider.schedule}</div>
                    </div>}
                </div>

                {this.state.lightboxIsOpen && work.images[this.state.currentImage] &&
                <div className="lightbox">
                    <div className="arrow close" onClick={this.closeLightbox}>✕</div>
                    <div className="arrow arrowRight" onClick={this.gotoPrevious}>➔</div>
                    <div className="lightboxImage">
                        <img className="image" src={`/images/works/${work.images[this.state.currentImage].src}`} alt=""/>
                    </div>
                    <div className="arrow arrowLeft" onClick={this.gotoNext}>➔</div>
                    <div className="shade" onClick={this.closeLightbox}></div>
                </div>
                }

            </div>
        )
    }
}

export default getRouteProps(Work)
