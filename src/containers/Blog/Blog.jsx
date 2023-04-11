import React from 'react'

import { images, data } from '../../constants'
import  { Button } from '../../components'
import { BsArrowRight } from 'react-icons/bs';
import './Blog.css'

const PostCard = ( { post: { postImg, postTitle, postText } } ) => (
  <div className="app__post-card">
      <img src={postImg} alt="post" />
      <div className="app__post-card_info">
        <h3>{postTitle}</h3>
        <p>{postText}</p>
        <button type="button">Read More <BsArrowRight /></button>
      </div>
      
</div>
)

const Blog = () => (
  <div className="app__posts section__padding" id="awards">
  <div className="app__posts_bg-1">
      <img src={images.blob__service} alt="blob" />
  </div>
  <div className="app__posts_bg-2">
      <img src={images.element__full} alt="element" />
  </div>
<div className="app__posts_info">
  <h2 className="text__center">Check out our latest article</h2>
</div>
  <div className="app__post_container">
      <div className="app__posts_cards">
      {data.posts.map((post) => <PostCard post={post} key={post.postTitle} />)}
      </div>
      <div>
        <Button  className="app_posts-btn" title="View All" />
      </div>
  </div>
  
</div>
);


export default Blog