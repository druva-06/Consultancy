import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><a href="#">Home</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className="active"><a href="/">Home One</a></li>
                        <li><a href="/index-2">Home Two</a></li>
                        <li><a href="/index-3">Home Three</a></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><a href="#">Courses</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}>
                        <li><a href="/courses">All Courses</a></li>
                        <li><a href="/course-details">Course Details</a></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="plus-line" /></div></li>
                <li className="menu-item-has-children"><a href="#">Pages</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/instructors">Our Instructors</a></li>
                        <li><a href="/instructor-details">Instructor Details</a></li>
                        <li><a href="/mentors">Our Mentors</a></li>
                        <li><a href="/events">Our Events</a></li>
                        <li><a href="/events-details">Event Details</a></li>
                        <li><a href="/faq">Asked Question</a></li>
                        <li><a href="/404">404 Page</a></li>
                        <li><a href="/contact">contact</a></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="plus-line" /></div></li>
                <li className="menu-item-has-children"><a href="#">Shop</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key === 4 ? "block" : "none"}` }}>
                        <li><a href="/shop">Shop Page</a></li>
                        <li><a href="/shop-details">Shop Details</a></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div></li>
                <li className="menu-item-has-children"><a href="#">Blog</a>
                    <ul className="sub-menu" style={{ display: `${isActive.key === 5 ? "block" : "none"}` }}>
                        <li><a href="/blog-grid">Blog Grid</a></li>
                        <li><a href="/blog">Blog Standard</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li>
            </ul>
        </>
    )
}
