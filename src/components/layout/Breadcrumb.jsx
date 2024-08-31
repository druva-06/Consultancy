import { Link } from 'react-router-dom';

import breadcrumbBg from "../../assets/img/bg/breadcrumb_bg.jpg";

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg mt-100" data-background={breadcrumbBg}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h3 className="title">{breadcrumbTitle}</h3>
                                <nav className="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/">Home</Link>
                                    </span>
                                    <span className="breadcrumb-separator"><i className="fas fa-angle-right" /></span>
                                    <span property="itemListElement" typeof="ListItem">{breadcrumbTitle}</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
