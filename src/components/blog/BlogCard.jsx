import React from "react";
import onlineImage from "../../assets/img/others/online_img.jpg";

export default function BlogCard({ item }) {
  const imageUrl = new URL(`../../assets/img/blog/${item.img}`, import.meta.url)
    .href;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-9 d-flex flex-column gap-4">
        <div className="row">
          <img src={onlineImage} alt="img" />
        </div>
        <div className="row">
          <div className="">
            <div className="section__title">
              <h2 className="title">Blog Title </h2>
              <span className="sub-title">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <div className="section__btn">Read More</div>
          </div>
        </div>
      </div>
    </>
  );
}
