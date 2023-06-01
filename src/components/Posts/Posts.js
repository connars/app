import React from 'react';
import { useState } from 'react';
import './posts.css';
import { useNavigate, Link } from 'react-router-dom';
import postsData from '../../data/postsData';

const Posts = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [visiblePosts, setVisiblePosts] = useState(4);
    const categories = Array.from(new Set(postsData.map((post) => post.category)));
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      setVisiblePosts(4); // Сбрасываем видимое количество постов при смене категории
    };
  
    const handleShowMore = () => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4); // Увеличиваем видимое количество постов на 4
    };
  
    const filteredPosts = selectedCategory
      ? postsData.filter((post) => post.category === selectedCategory)
      : postsData;
  
    const postsToShow = filteredPosts.slice(0, visiblePosts);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  
    return (
        <>
          <div className="blog">
            <div className="post-nav">
              <h1>Список постов</h1>
              <ul className="category-list">
                <li
                  className={selectedCategory === null ? 'active' : ''}
                  onClick={() => handleCategorySelect(null)}
                >
                  Все
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="post-grid">
              {postsToShow.map((post) => (
                <div className="post" key={post.id} onClick={() => handlePostClick(post.id)}>
                  <h2>{post.title}</h2>
                  <img src={post.image} alt="Изображение поста" />
                  <p>{post.content.length > 70 ? `${post.content.substring(0, 70)}...` : post.content}</p>
                  <p>Автор: {post.author}</p>
                  <p>Дата публикации: {post.date}</p>
                  <Link to={`/post/${post.id}`}>Перейти к посту</Link>
                </div>
              ))}
            </div>
          </div>
          {visiblePosts < filteredPosts.length && (
            <div className="button">
              <button onClick={handleShowMore}>Показать еще</button>
            </div>
          )}
        </>
      );
    };
    
    export default Posts;
    