import { Link } from 'react-router-dom';

import student1 from '../../assets/img/others/student01.png';
import student2 from '../../assets/img/others/student02.png';
import student3 from '../../assets/img/others/student03.png';

import onlineImg from '../../assets/img/others/online_img.jpg';
// import online01 from '../../assets/img/objects/online_01.png';
// import online02 from '../../assets/img/objects/online_02.png';
// import online03 from '../../assets/img/objects/online_03.svg';
// import online04 from '../../assets/img/objects/online_04.png';

import onlineIcons from '../../assets/img/icons/online_icons.png';

import shape2 from '../../assets/img/objects/categories_shape02.png';

export default function EventCard() {
  return (
    <div className="row align-items-center">
      <div className="col-xl-7 col-lg-7">
        <div className="online__image-wrap">
          <div className="main-img">
            <img src={onlineImg} alt="img" />
          </div>
          <div className="enrolled__students position-absolute">
            <p>
              <span>36K+</span> Enrolled Students
            </p>
            <ul className="list-wrap">
              <li>
                <img src={student1} alt="img" />
              </li>
              <li>
                <img src={student2} alt="img" />
              </li>
              <li>
                <img src={student3} alt="img" />
              </li>
              <li>
                <img src={student1} alt="img" />
              </li>
              <li>
                <img src={student2} alt="img" />
              </li>
              <li>
                <img src={student3} alt="img" />
              </li>
            </ul>
          </div>
          <img
            src={onlineIcons}
            alt="img"
            className="icons position-absolute"
          />
          {/* <img
            src={online01}
            alt="shape"
            className="left-shape position-absolute tg-motion-effects3"
          />
          <img
            src={online02}
            alt="shape"
            className="top-shape position-absolute tg-motion-effects4"
          />
          <img
            src={online03}
            alt="shape"
            className="svg-shape position-absolute tg-motion-effects6"
          /> */}
          <img
            src={shape2}
            alt="shape"
            className="bottom-shape position-absolute tg-motion-effects3"
          />
        </div>
      </div>
      <div className="col-xl-5 col-lg-5">
        <div className="online__content">
          <div className="section__title">
            <span className="sub-title">Unique online courses</span>
            <h2 className="title">
              Online Learning <br /> Courses Designed <br /> For Real Life
            </h2>
          </div>
          <p>
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit
            ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse
            awctetur.
          </p>
          <div className="tg-button-wrap">
            <Link href="/courses" className="btn tg-svg">
              <span className="text">See All Categories</span>
              <span
                className="svg-icon"
                id="online-btn"
                data-svg-icon="assets/img/icons/btn-arrow.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
