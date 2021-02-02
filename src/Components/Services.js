import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "

            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "

            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle van",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "

            },
            {
                icon: <FaBeer />,
                title: "Go Drunk Bevde ho",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "

            }
        ]
    }

    render () {
        return (
            <div className='services'>
                <Title title='Services' />
                <div className='services-center'>

                    { this.state.services.map((item, index) => {
                        return <article key={ index } className='service'>
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                    }) }
                </div>
            </div>
        )
    }
}
