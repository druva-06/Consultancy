import CityFilter from "../../filter/indiaFilter/CityFilter";
import CourseFilter from "../../filter/indiaFilter/CourseFilter";
import SpecializationsFilter from "../../filter/indiaFilter/SpecializationsFilter";
import LevelOfEducation from "../../filter/indiaFilter/LevelOfEducationFilter";

const FilterIndiaColleges = () => {
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

export default FilterIndiaColleges;
