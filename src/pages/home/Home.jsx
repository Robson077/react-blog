
// api: https://jsonplaceholder.typicode.com/posts
// http://localhost:3000/posts

import './Home.css'

import Header from '../../components/header/Header'
import Section from '../../components/Section/Section'
import NewPost from '../newPost/NewPost'

import axios from "axios"

import {useState, useEffect} from "react"


function Home() {

    const [posts, setPosts] = useState([])

    const handleOnClick = () => {
        console.log("clicou")
    }

    const handleOnChange = (e) => {
        console.log(e.target.value)
    }


    
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((response) => {
            setPosts(response.data)
            console.log(response.data)
        }).catch(() => {
            console.log("deu errado")
        })

    }, [])

    return (
        <div className="Home">
            <Header />

            
            {
                posts.map((post) => (
                    <Section
                        date={post.date}
                        title={post.title}
                        coment={post.coment}
                    />
                ))
            }
        </div>
    )
}


export default Home
