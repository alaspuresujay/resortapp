import React from 'react'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import FeaturedRoom from '../Components/FeaturedRoom'
import Hero from '../Components/Hero'
import Services from '../Components/Services'


export default function Home () {
    return (
        <>
            <Hero>
                <Banner title='Luxurious Rooms' subTitle="rooms starting at $299">
                    <Link to='/rooms' className='btn-primary'>
                        Our Rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />

        </>
    )
}
