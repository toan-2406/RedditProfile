import React from "react";
import { useSelector } from "react-redux";
import "./makepost.css";

const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  console.log(posts.slice(1));
  return (
    <>
      <section className="post-container">
        {posts.slice(1).map((post, idx) => (
          <div className="post-content" key={idx}>
            <div className="post-content-title">
              <span>Title: </span>
              <span>{post.title}</span>
            </div>
            <div className="post-content-tags">
              <span className="post-content-tags__title"> Tags:</span>
              <div className="post-content-tags__tag">
                {post.tagsSelected.map((tag, idx) => (
                  <span key={idx} className={`btn-tag btn-tag__${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="post-content-desc">
              <span>Description: </span>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Post;
