import React, { Component } from 'react'
import { Link, Route, getRouteProps } from 'react-static'
import classNames from 'classnames'

import Work from './Work'


class WorkList extends Component {

    constructor(props) {
        super(props)

        console.log('WorkList', props)

        props.data.works.sort((a, b) => b.date.localeCompare(a.date))

    }

    render() {

        const lang = this.props.lang

        let data = this.props.data

        let label = data.labels

        return (
            <div key="works">

                <div className="works-block">
                    <div className="App-right-heading-works">{label.title}</div>
                    <div className="works-menu">
                    {data.works.map((item,i) => {

                        let defaultSlug = this.props.match.params.name ? this.props.match.params.name : i === 0 ? item.slug : ''
                        let itemClasses = classNames('works-menu-item', { worksmenuitemactive: item.slug === defaultSlug })

                        return (
                        <div className={itemClasses} key={item.slug}>
                            <Link to={`/en/works/${item.slug}`}>{item.name}</Link>
                        </div>
                        )
                    })}
                    </div>
                </div>

                <Route path={`/:lang/works/:name`} render={() => <Work lang={lang} />} />

            </div>
        )
    }
}

export default getRouteProps(WorkList)
