import {
  clearCity,
  clearCourse,
  clearSpecializations,
  clearLevelOfEducation,
  addSort,
  addPerPage,
} from "../indiaEducation/indiaEducationFilterSlice";
import {
  clearCityToggle,
  clearCourseToggle,
  clearSpecializationsToggle,
  clearLevelOfEducationToggle,
} from "../indiaEducation/indiaEducationSlice";

export const clearIndiaStoreFilters = (dispatch) => {
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
