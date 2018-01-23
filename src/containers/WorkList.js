import React, { Component } from 'react'
import { Link, Route, getRouteProps } from 'react-static'
import classNames from 'classnames'

import Work from './Work'


class WorkList extends Component {

    constructor(props) {
        super(props)

        props.works.works.sort((a, b) => b.date.localeCompare(a.date))
    }

    render() {

        const lang = this.props.lang

        let works = this.props.works.works

        let label = this.props.works.labels

        return (
            <div key="works">

                <div className="works-block">
                    <div className="App-right-heading-works">{label.title}</div>
                    <div className="works-menu">
                    {works.map((item,i) => {

                        // this.props.work comes from react-static children route
                        let defaultSlug = this.props.work ? this.props.work.slug : ''
                        let itemClasses = classNames('works-menu-item', { worksmenuitemactive: item.slug === defaultSlug })

                        return (
                        <div className={itemClasses} key={item.slug}>
                            <Link to={`/${lang}/works/${item.slug}`}>{item.name}</Link>
                        </div>
                        )
                    })}
                    </div>
                </div>

                <Route path={`/:lang/works/:name`} component={Work} />

            </div>
        )
    }
}

export default getRouteProps(WorkList)
