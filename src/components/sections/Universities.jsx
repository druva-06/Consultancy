import EventsFilter from "../elements/EventsFilter";

import shape01 from "../../assets/img/courses/course_shape01.png";
import shape02 from "../../assets/img/courses/course_shape02.png";

export default function Universities() {
  return (
    <>
      <section className="courses-area section-pt-120 section-pb-90">
        <div className="container">
          <EventsFilter />
        </div>
        <div className="courses__shapes">
          <div className="courses__shapes-item alltuchtopdown">
            <img src={shape01} alt="shape" />
          </div>
          <div className="courses__shapes-item alltuchtopdown">
            <img src={shape02} alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
}
