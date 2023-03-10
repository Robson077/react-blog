import React from 'react'

import {Link} from "react-router-dom"

import {IoMdAdd} from "react-icons/Io"

import "./NewPost.css"

const NewPost = ({ onClick }) => {
    return (
        <div>
            <header>
                <div className="title">
                    <h1>Robson</h1>
                    <Link to="/">
                        blog
                    </Link>
                </div>
            </header>

            <section>
                <h1 className='titleForm'>Adicione um novo Post.</h1>
                <form>
                    <label>
                        Título: 
                        <input type="text" placeholder='Título do post'/>
                    </label>

                    <label>
                        Conteúdo: 
                        <input type="text" placeholder='Conteúdo do post'/>
                    </label>

                    <button onClick={onClick}>
                        <Link to="/" className="linkButton">
                            Postar <IoMdAdd/>
                        </Link>
                    </button>
                </form>
            </section>
        </div>

    )
}

export default NewPost