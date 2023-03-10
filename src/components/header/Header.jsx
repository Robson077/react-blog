import React from 'react'

import { Link } from "react-router-dom"

import {IoMdAdd} from "react-icons/Io"

import "./Header.css"

const Header = ({onClick, onChange}) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <header>
            <div className="title">
                <h1>Robson</h1>
                <Link to="/" className='linkTitle'>
                    blog
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="text" 
                    placeholder='Procurar post...' 
                    onChange={onChange}
                />

                    
                
                <button onClick={onClick}>
                    <Link to="/post" className="linkButton">
                        <IoMdAdd/>
                    </Link>
                </button>
            </form>
        </header>
    )
}

export default Header