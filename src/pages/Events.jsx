import Breadcrumb from "../components/layout/Breadcrumb";
import { Link } from "react-router-dom";

import eventThumb01 from "../assets/img/events/event_thumb01.jpg";
import eventThumb02 from "../assets/img/events/event_thumb02.jpg";
import eventThumb03 from "../assets/img/events/event_thumb03.jpg";
import eventThumb04 from "../assets/img/events/event_thumb04.jpg";
import eventThumb05 from "../assets/img/events/event_thumb05.jpg";
import eventThumb06 from "../assets/img/events/event_thumb06.jpg";
import eventThumb07 from "../assets/img/events/event_thumb07.jpg";
import eventThumb08 from "../assets/img/events/event_thumb08.jpg";
import eventThumb09 from "../assets/img/events/event_thumb09.jpg";

export default function Events({ breadcrumbTitle }) {
  return (
    <>
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
      <section className="events-area section-pt-120 section-pb-90">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row events__wrapper">
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb01} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> United Kingdom
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb02} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Exactly How Technology Can Make Reading
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Tokyo Japan
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb03} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb04} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Learning JavaScript With Imagination
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Walsenburg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb05} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Make Your Magnificent May 2023 Edition
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb06} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Accessible Target Sizes Cheatsheet
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Estes Park
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb07} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Color mechanics that he came up with during
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Colorado
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb08} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          How To Design Effective User Onboarding
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Alaska
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img src={eventThumb09} alt="img" />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 22 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Swing Into April (2023 Wallpapers Edition)
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Alexander City
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
