import { useDispatch, useSelector } from "react-redux";
import colleges from "../../data/colleges";
import {
  addPerPage,
  addSort,
  clearCity,
  clearCourse,
  clearSpecializations,
  clearLevelOfEducation,
} from "../../features/indiaEducation/indiaEducationFilterSlice";
import {
  clearCityToggle,
  clearCourseToggle,
  clearSpecializationsToggle,
  clearLevelOfEducationToggle,
} from "../../features/indiaEducation/indiaEducationSlice";
import CollegeCard from "./CollegeCard";

const AllColleges = () => {
  const { collegeList, collegeSort } = useSelector(
    (state) => state.indiaEducationFilter
  );
  const { city, course, specializations, levelOfEducation } = collegeList || {};

  const { sort, perPage } = collegeSort;
  const dispatch = useDispatch();

  // city filter
  const cityFilter = (item) =>
    city?.length !== 0
      ? city?.includes(
          item?.city?.split(" ").join("").toLocaleLowerCase()
        )
      : item;

  // course filter
  const courseFilter = (item) =>
    course?.length !== 0
      ? course?.includes(item?.course?.split(" ").join("").toLocaleLowerCase())
      : item;

  // specializations filter
  const specializationsFilter = (item) =>
    specializations?.length !== 0
      ? specializations?.includes(
          item?.specializations?.split(" ").join("").toLocaleLowerCase()
        )
      : item;

  // levelOfEducation filter
  const levelOfEducationFilter = (item) =>
    levelOfEducation?.length !== 0
      ? levelOfEducation?.includes(item?.levelOfEducation?.split(" ").join("").toLocaleLowerCase())
      : item;

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = colleges
    ?.filter(cityFilter)
    ?.filter(courseFilter)
    ?.filter(specializationsFilter)
    ?.filter(levelOfEducationFilter)
    ?.sort(sortFilter)
    .slice(perPage.start, perPage.end !== 0 ? perPage.end : 12)
    ?.map((item) => (
      <div className="col" key={item.id}>
        <CollegeCard item={item} />
      </div>

      // End all colleges
    ));

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // clear all filters
  const clearAll = () => {
    dispatch(clearCity());
    dispatch(clearCourse());
    dispatch(clearSpecializations());
    dispatch(clearLevelOfEducation());
    dispatch(clearCityToggle());
    dispatch(clearCourseToggle());
    dispatch(clearSpecializationsToggle());
    dispatch(clearLevelOfEducationToggle());
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="shop-top-wrap courses-top-wrap">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="shop-top-left">
              <p>We found {content?.length} courses for you</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <div>
                {city?.length !== 0 ||
                course?.length !== 0 ||
                specializations?.length !== 0 ||
                levelOfEducation?.length !== 0 ||
                sort !== "" ||
                perPage.start !== 0 ||
                perPage.end !== 0 ? (
                  <button
                    onClick={clearAll}
                    className="btn btn-reset text-nowrap me-2"
                  >
                    Reset
                  </button>
                ) : undefined}
              </div>
              <div className="shop-top-right m-0 ms-md-auto">
                <select
                  value={sort}
                  name="orderby"
                  className="orderby"
                  onChange={sortHandler}
                >
                  <option value="">Sort by (default)</option>
                  <option value="asc">Newest</option>
                  <option value="des">Oldest</option>
                </select>
              </div>
              <div>
                <select
                  onChange={perPageHandler}
                  className="chosen-single form-select ms-3 "
                  value={JSON.stringify(perPage)}
                >
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 0,
                    })}
                  >
                    All
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 10,
                    })}
                  >
                    10 per page
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 20,
                    })}
                  >
                    20 per page
                  </option>
                  <option
                    value={JSON.stringify({
                      start: 0,
                      end: 30,
                    })}
                  >
                    30 per page
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
        {content}
      </div>
    </>
  );
};

export default AllColleges;
