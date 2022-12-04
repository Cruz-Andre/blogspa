import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostPage from "components/PostPage/PostPage"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import './Post.css'
import NotFound from "Pages/NofFound/NotFound"
import StandardPage from "components/StandardPage/StandardPage"
import PostCard from "components/PostCard/PostCard"

export default function Post() {

  const parametros = useParams()

  const post = posts.find(post => {
    //o number é pq o id de parametros é uma string e o id de post é um numero
    return post.id === Number(parametros.id)
  })
  
  
  if (!post) {
    return <NotFound />
  }

  const recommendedPosts = posts
    .filter(post => post.id !== Number(parametros.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return (
    <StandardPage>
      <PostPage
        key={post.id}
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
          <h2 className="tituloOutrosPosts">Outros posts que você pode gostar:</h2>
          <ul className="postsRecomendados">
           {recommendedPosts.map(post => (
            <li key={post.id}>
              <PostCard post={post}/>
            </li>
            ))}
          </ul>
        </div>
      </PostPage>
    </StandardPage>
  )
}

/* solução de navegação usando routes e route descendente
return (
  <Routes>
    <Route path="*" element={<StandardPage />}>
      <Route index element={
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
      } />
    </Route>
  </Routes>
)
*/