import React from 'react'
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero';
import RoomContainer from '../Components/RoomContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='Our Rooms' subTitle="">
                    <Link to='/' className='btn-primary'>
                        Return Home
                </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}


export default Rooms;