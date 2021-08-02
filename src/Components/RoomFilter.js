import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'


// get all unique Values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}



export default function RoomFilter ({rooms}) {
    // console.log(rooms);

    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price, minPrice, maxPrize, minSize, maxSize, breakfast, pets} = context
    // get unique Types
    let types = getUnique(rooms, 'type')
    // add All
    types = ['all', ...types]
    //map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index} >{item}</option>
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => <option key={index} value={item} > {item}</option >)

    return (
        <section className='filter-container'>
            <Title title="Search Rooms" />
            <form action="" className='filter-form'>
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {types}

                    </select>
                </div>
                {/* Endo of Select Type */}
                {/* Guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* Endo of Guest */}

                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name='price' min={minPrice} max={maxPrize} id='price' value={price} onChange={handleChange} className='form-control' />

                </div>
                {/* End of Room Price */}

                {/* Room Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                    </div>
                </div>
                {/* End of Room Size */}
                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* End of extras */}

            </form>
        </section>
    )
}
