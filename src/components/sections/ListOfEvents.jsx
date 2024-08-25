import { Link } from "react-router-dom";

import EventCard from "../event/EventCard";

export default function ListOfEvents() {
  return (
    <>
      <section className="event-area tg-motion-effects">
        <div className="container d-flex flex-column gap-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section__title text-center mb-50">
                <span className="sub-title">Always Smart To Hear News</span>
                <h2 className="title tg-svg">
                  Latest{" "}
                  <span className="position-relative">
                    <span
                      className="svg-icon"
                      id="svg-10"
                      data-svg-icon="assets/img/icons/title_shape.svg"
                    />
                    News
                  </span>
                  Blog
                </h2>
                <p className="desc">
                  Receive huge benefits with our lifetime Plumbing Receive huge
                  benefits with our lifetime Plumbing email address will be
                  shown
                </p>
              </div>
            </div>
          </div>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </>
  );
}
