import CountryFilter from "../../filter/abroadFilter/CountryFilter";
import CourseFilter from "../../filter/abroadFilter/CourseFilter";
import SpecializationsFilter from "../../filter/abroadFilter/SpecializationsFilter";
import IntakeFilter from "../../filter/abroadFilter/IntakeFilter";

const FilterAbroadColleges = () => {
  return (
    <>
      <aside className="courses__sidebar">
        <div className="shop-widget">
          <h4 className="widget-title">Country</h4>
          <div className="shop-cat-list">
            <CountryFilter />
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
            <IntakeFilter />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterAbroadColleges;
