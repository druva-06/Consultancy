import CountryFilter from "../filter/abroadFilter/CountryFilter";
import CourseFilter from "../filter/abroadFilter/CourseFilter";
import SpecializationsFilter from "../filter/abroadFilter/SpecializationsFilter";
import IntakeFilter from "../filter/abroadFilter/IntakeFilter";
import CityFilter from "../filter/onlineFilter/CityFilter";
import LevelOfEducationFilter from "../filter/onlineFilter/LevelOfEducationFilter";

const FilterColleges = ({ collegeType }) => {
  return (
    <>
      <aside className="courses__sidebar">
        <div className="shop-widget">
          {
            collegeType === "abroad" ? (
              <h4 className="widget-title">Country</h4>
            ) : (
              <h4 className="widget-title">City</h4>
            )
          }
          <div className="shop-cat-list">
            {collegeType === "abroad" ? <CountryFilter /> : <CityFilter />}
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
          {
            collegeType === "abroad" ? (
              <h4 className="widget-title">Intake</h4>
            ) : (
              <h4 className="widget-title">Level of Education</h4>
            )
          }
          <div className="shop-cat-list">
            {collegeType === "abroad" ? (
              <IntakeFilter />
            ) : (
              <LevelOfEducationFilter />
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterColleges;