// @ts-nocheck
import React, {Component} from 'react'
import defaultImg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import Banner from '../Components/Banner'
import StyledHero from '../Components/StyledHero'



export default class SingleRoom extends Component {
    constructor (props) {
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg: defaultImg
        }
    }

    static contextType = RoomContext

    render () {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        console.log(room);
        if (!room)
        {
            return (
                <div className='error'>
                    <h3>No such room could be found</h3>
                    <div></div>
                    <Link to='/rooms' className='btn-primary'>
                        Back to Rooms
                    </Link>
                </div>)
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room

        const [mainImg, ...defaultImg] = images

        return (
            <>
                <StyledHero image={mainImg}>
                    <Banner title={`${name} Room`} subTitle=''>
                        <Link to='/rooms' className='btn-primary' > Back to Rooms</Link>
                    </Banner>
                </StyledHero>


                {/* TODO: images grid. Change it to scroller */}

                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => <img key={index} src={item} alt={name} />)}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : {size}SQFT</h6>
                            <h6>Max Capacity: {" "} {capacity > 1 ? `${capacity} People  ` : `${capacity} Person`}</h6>
                            <h6>{pets ? 'Pets Allowed' : 'Pets Not Allowed'}</h6>
                            <h6>{breakfast && "Free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => <li key={index}>- {item}</li>)}
                    </ul>
                </section>

            </>
        )
    }
}
