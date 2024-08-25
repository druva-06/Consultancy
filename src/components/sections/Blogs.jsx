import { Link } from "react-router-dom";

import blogImage1 from "../../assets/img/blog/blog_thumb04.jpg";
import blogImage2 from "../../assets/img/blog/blog_thumb05.jpg";
import blogImage3 from "../../assets/img/blog/blog_thumb06.jpg";

export default function Blogs() {
  return (
    <>
            <section className="blog-area-two section-pt-120 section-pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="section__title text-center mb-50">
                                <span className="sub-title">Always Smart To Hear News</span>
                                <h2 className="title tg-svg">Latest <span className="position-relative"><span className="svg-icon" id="svg-10" data-svg-icon="assets/img/icons/title_shape.svg" />News</span>
                                    Blog</h2>
                                <p className="desc">Receive huge benefits with our lifetime Plumbing Receive huge benefits with
                                    our lifetime Plumbing email address will be shown</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="blog__post-item-two shine__animate-item">
                                <div className="blog__post-thumb-two">
                                    <Link href="/blog-details" className="shine__animate-link">
                                        <img src={blogImage1} alt="img" />
                                    </Link>
                                </div>
                                <div className="blog__post-content-two">
                                    <Link href="#" className="cat">Education</Link>
                                    <h4 className="title"><Link href="/blog-details">when aeunkno printer took galley of
                                        scrambled</Link></h4>
                                    <ul className="list-wrap blog__post-meta">
                                        <li><i className="flaticon-account" /> by <Link href="#">Admin</Link></li>
                                        <li><i className="flaticon-calendar-date" /> 23 Aug, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog__post-item-three shine__animate-item">
                                <div className="blog__post-thumb-three">
                                    <Link href="/blog-details" className="shine__animate-link">
                                        <img src={blogImage2} alt="img" />
                                    </Link>
                                </div>
                                <div className="blog__post-content-three">
                                    <Link href="#" className="cat">Course</Link>
                                    <h4 className="title"><Link href="/blog-details">When aeunkno printer get galley
                                        crambled</Link></h4>
                                    <ul className="list-wrap blog__post-meta">
                                        <li><i className="flaticon-account" /> by <Link href="#">Admin</Link></li>
                                        <li><i className="flaticon-calendar-date" /> 23 Aug, 2023</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__post-item-three shine__animate-item">
                                <div className="blog__post-thumb-three">
                                    <Link href="/blog-details" className="shine__animate-link">
                                        <img src={blogImage3} alt="img" />
                                    </Link>
                                </div>
                                <div className="blog__post-content-three">
                                    <Link href="#" className="cat">Skill Development</Link>
                                    <h4 className="title"><Link href="/blog-details">Bhen aeunkno printer galley aewcram.</Link>
                                    </h4>
                                    <ul className="list-wrap blog__post-meta">
                                        <li><i className="flaticon-account" /> by <Link href="#">Admin</Link></li>
                                        <li><i className="flaticon-calendar-date" /> 23 Aug, 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
}
