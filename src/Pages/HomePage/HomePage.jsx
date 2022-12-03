import posts from 'json/posts.json'
import PostCard from "../../components/PostCard/PostCard";

import styles from './HomePage.module.css'

export default function FrontPage() {
  return (
    <ul className={styles.posts}>
      {posts.map(post => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}