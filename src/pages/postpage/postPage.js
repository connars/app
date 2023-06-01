import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './postpage.css';
import Posts from '../../components/Posts/Posts';
import postsData from '../../data/postsData';

const PostPage = () => {
  const { postId } = useParams();
  const post = postsData.find((post) => post.id === parseInt(postId));
  const postsRef = useRef(null);

//   const scrollToTop = () => {
//     if (postsRef.current) {
//       postsRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  if (!post) {
    return <p>Пост не найден</p>;
  }

  return (
    <>
      <div ref={postsRef} className="post-page">
        <h2>{post.title}</h2>
        <img src={post.image} alt="" />
        <p>{post.content}</p>
        <p>Автор: {post.author}</p>
        <p>Дата публикации: {post.date}</p>
      </div>
    <Posts />
     
    </>
  );
};

export default PostPage;