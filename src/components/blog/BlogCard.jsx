import React from "react";

export default function BlogCard({ item }) {
  const imageUrl = new URL(`../../assets/img/blog/${item.img}`, import.meta.url).href;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-9">
        <div className="blog__post-item shine__animate-item">
          <div className="blog__post-thumb">
            <a href="/" className="shine__animate-link">
              <img src={imageUrl} alt="img" />
            </a>
          </div>
          <div className="blog__post-content">
            <a href="/" className="cat">
              {item.category}
            </a>
            <h4 className="title">
              <a href="/">{item.title}</a>
            </h4>
            <ul className="list-wrap blog__post-meta">
              <li>
                <i className="flaticon-account" /> by{" "}
                <a href="/">{item.author}</a>
              </li>
              <li>
                <i className="flaticon-calendar-date" /> 23 Aug, 2023
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
