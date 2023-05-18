import React from "react";
import { Article } from "../../components";
import { images } from "../../constants";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-container section__padding" id="Library">
      <div className="blog-header">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog-content-container">
        <div className="blog-content-boxA">
          <Article
            imgUrl={images.blog1}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="blog-content-boxB">
          <Article
            imgUrl={images.blog2}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog3}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog4}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={images.blog5}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
