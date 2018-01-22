import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import { getRouteProps } from 'react-static';


class Events extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data.years.filter(year => moment(year.name, 'YYYY').isSameOrAfter(moment(), 'year')).sort((a,b) => a.name > b.name),
            activeSlug: 'upcoming'
        }
    }

    changePeriod(slug) {

        const data = this.props.data

        if (slug === 'upcoming')
            this.setState({
                data: data.years.filter(year => moment(year.name, 'YYYY').isSameOrAfter(moment(), 'year')).sort((a,b) => a.name > b.name),
                activeSlug: 'upcoming'
            })
        else
            this.setState({
                data: data.years.filter(year => moment(year.name, 'YYYY').isBefore(moment(), 'year')).sort((a,b) => a.name > b.name),
                activeSlug: 'past'
            })
    }

    render() {
        console.log('Events', this.props);

        let data = this.props.data

        const lang = this.props.lang

        return (
            <div key="events">

                <div className="works-block">
                    <div className="App-right-heading-works">{data.labels.title}</div>
                </div>

                <div className="events-menu">
                    {data.menuItems.map((item, index) => {
                        let eventMenuClasses = classNames('events-menu-item', { eventsmenuitemactive: item.slug === this.state.activeSlug })
                        return <div className={eventMenuClasses} onClick={()=>this.changePeriod(item.slug)} key={index}>
                            {item.name}
                        </div>
                    })}
                </div>

                {this.state.data.map((year, i)=>{

                    return (
                        <div key={i}>

                            <div className="events-year">{year.name}</div>

                            {year.months.map((month,j)=>{

                                return (
                                    <div className="events-month-block" key={j}>
                                        <div className="events-month">{month.name}</div>

                                        {month.events.map((event,k)=>{

                                            return (
                                                <div key={k} className="event-in-month">
                                                    <div>
                                                        <span className="event-date">{event.date}</span>
                                                        <span className="event-name">{event.name}</span>
                                                        {event.link && <a className="event-link" target="_blank" rel="noopener noreferrer" href={event.link}>{data.labels.link}</a>}
                                                    </div>
                                                </div>
                                            )

                                        })}

                                    </div>
                                )

                            })}

                        </div>
                    )

                })}

            </div>

    )
  }
}

export default getRouteProps(Events)
