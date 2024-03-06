import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Publish = () => {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');

  const handlePublish = async () => {
       try {   
      const response = await axios.post('/api/articles', {
        title: articleTitle,
        content: articleContent 
      });
      if (!response.ok) {
        throw new Error('Failed to publish article'); 
      }
      console.log('Article published successfully');
    
      setArticleTitle('');
      setArticleContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h2 className="publish-heading">Publish Article</h2>
      <div className="publish-form">
      <form onSubmit={handlePublish}>
        <label htmlFor="article-title">Article Title:</label>
        <input
          type="text"
          id="article-title"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          className="custom-input-style"
        />

        <label htmlFor="article-content">Article Content:</label>
        <textarea
          id="article-content"
          value={articleContent}
          onChange={(e) => setArticleContent(e.target.value)}
        />

        {/* <button onClick={handlePublish}>Publish</button> 123*/}
        <button type="submit" style={{ backgroundColor: 'rgb(234, 116, 73)',  marginTop: '10px' }}>Publish</button>
        </form>
      </div>

      {/* Example NavLink to navigate to another page (replace '/other-page' with your actual path) */}
      <NavLink to="/other-page">Go to Other Page</NavLink>
    </div>
  );
};

export default Publish;
