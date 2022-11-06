import React from 'react'

import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="title">
                <h1>Codelândia</h1>
                <h2>blog</h2>
            </div>

            <div className="form">
                <input type="text" placeholder='Pesquisar no blog' />
            </div>
        </header>
    )
}

export default Header