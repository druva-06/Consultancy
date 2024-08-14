import { Link } from "react-router-dom";
export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <nav className="pagination__wrap mt-40">
                <ul className="list-wrap">
                    {getPaginationGroup.length <= 0 ? null : (
                        <li onClick={prev} className="next_link page-item">
                            {currentPage === 1 ? null : (
                                <Link>
                                    <i className="fa fa-arrow-left" />
                                </Link>
                            )}
                        </li>
                    )}
                    {getPaginationGroup.map((item, index) => {
                    return (
                        <li
                            onClick={() => handleActive(item)}
                            key={index}
                            className={
                                currentPage === item
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <Link to="/" className="page-link">{item}</Link>
                        </li>
                    )
                })}
                      {getPaginationGroup.length <= 0 ? null : (
                    <li onClick={next} className="next_link page-item">
                        {currentPage >= pages ? null : (
                            <Link to="/">
                                <i className="fa fa-arrow-right" />
                            </Link>
                        )}
                    </li>
                )}
                </ul>
            </nav>
        </>
    )
}