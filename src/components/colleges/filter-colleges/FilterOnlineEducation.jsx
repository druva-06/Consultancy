import CityFilter from "../../filter/onlineFilter/CityFilter";
import CourseFilter from "../../filter/onlineFilter/CourseFilter";
import SpecializationsFilter from "../../filter/onlineFilter/SpecializationsFilter";
import LevelOfEducation from "../../filter/onlineFilter/LevelOfEducationFilter";

const FilterOnlineColleges = () => {
  return (
    <>
      <aside className="courses__sidebar">
        <div className="shop-widget">
          <h4 className="widget-title">Country</h4>
          <div className="shop-cat-list">
            <CityFilter />
          </div>
        </div>
        <div className="shop-widget">
          <h4 className="widget-title">Course</h4>
          <div className="shop-cat-list">
            <CourseFilter />
          </div>
        </div>
        <div className="shop-widget">
          <h4 className="widget-title">Specializations</h4>
          <div className="shop-cat-list">
            <SpecializationsFilter />
          </div>
        </div>
        <div className="shop-widget">
          <h4 className="widget-title">Intake</h4>

          <div className="shop-cat-list">
            <LevelOfEducation />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterOnlineColleges;
