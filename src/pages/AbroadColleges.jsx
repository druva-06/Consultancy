import { useState } from "react";
import FilterAbroadColleges from "../components/colleges/filter-colleges/FilterAbroadColleges";
import AllColleges from "../components/colleges/all-colleges/AllAbroadColleges";
import HeroBannerSearch from "../components/sections/HeroBannerSearch";

export default function AbroadColleges({ collegeType }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section
        className="hero-area hero-bg-1 section-pt-200 pt-230 section-pb-90"
        style={{
          backgroundImage: `url('img/hero_bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container max-width-1000">
          <HeroBannerSearch currentActive={collegeType} />
        </div>
      </section>
      <section className="all-courses-area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
              <FilterAbroadColleges />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className={
                    activeIndex === 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <AllColleges />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
