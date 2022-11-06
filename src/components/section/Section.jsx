import React from 'react'
import './Section.css'

const Section = ({ date, title, coment }) => {
    return (
        <section>
            <div className='blog'>
                <p className='date-blog'>{date}</p>

                <h2 className='title-blog'>{title}</h2>

                <p className='content-blog'>{coment}</p>
            </div>
        </section>
    )
}

export default Section