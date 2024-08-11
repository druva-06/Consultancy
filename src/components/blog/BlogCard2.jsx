
export default function BlogCard2({ item }) {
    return (
        <>
            <div className="blog__standard-post">
                <div className="blog__standard-thumb">
                    <a href={`/blog/${item.id}`}>
                        <img src={`/assets/img/blog/${item.img}`} className="w-100" alt="img" />
                    </a>
                </div>
                <div className="blog__standard-content">
                    <a href="/" className="cat">{item.category}</a>
                    <h3 className="title"><a href={`/blog/${item.id}`}>{item.title}</a></h3>
                    <ul className="list-wrap blog__post-meta">
                        <li><i className="flaticon-account" /> by <a href="/">Admin</a></li>
                        <li><i className="flaticon-calendar-date" /> 23 Aug, 2023</li>
                        <li><i className="flaticon-help" /> 22 Comments</li>
                    </ul>
                    <p>Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat.</p>
                    <div className="tg-button-wrap">
                        <a href={`/blog/${item.id}`} className="btn tg-svg"><span className="text">Continue Reading</span> <span className="svg-icon" id="blog-btn01" data-svg-icon="assets/img/icons/btn-arrow.svg" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
