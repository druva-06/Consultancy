import Breadcrumb from "../components/layout/Breadcrumb";
import BlogPost from "../components/blog/BlogPost";

export default function Shortlisted({ breadcrumbTitle }) {
  return (
    <>
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
      <section className="blog-grid-area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <BlogPost showItem={6} style={1} showPagination />
          </div>
        </div>
      </section>
    </>
  );
}
