import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostPage from "components/PostPage/PostPage"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import './Post.css'

export default function Post() {

  const parametros = useParams()

  const post = posts.find(post => {
    //o number é pq o id de parametros é uma string e o id de post é um numero
    return post.id === Number(parametros.id)
  })

  if(!post) {
    return <h1>Post não encontrado...</h1>
  }

  return (
    <PostPage
      key={post.id}
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostPage>
  )
}