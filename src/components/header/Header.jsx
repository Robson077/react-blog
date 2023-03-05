import React from 'react'

import "./Header.css"

const Header = ({onClick, onChange}) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <header>
            <div className="title">
                <h1>Robson</h1>
                <h2>blog</h2>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder='Pesquisar no blog' onChange={onChange}/>
                <button onClick={onClick}>Postar</button>
            </form>
        </header>
    )
}

export default Header