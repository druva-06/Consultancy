import {
  clearCountry,
  clearCourse,
  clearSpecializations,
  clearIntake,
  addSort,
  addPerPage,
} from "../abroadEducation/abroadEducationFilterSlice";
import {
  clearCountryToggle,
  clearCourseToggle,
  clearSpecializationsToggle,
  clearIntakeToggle,
} from "../abroadEducation/abroadEducationSlice";

export const clearAbroadStoreFilters = (dispatch) => {

  dispatch(clearCountry());
  dispatch(clearCourse());
  dispatch(clearSpecializations());
  dispatch(clearIntake());
  dispatch(clearCountryToggle());
  dispatch(clearCourseToggle());
  dispatch(clearSpecializationsToggle());
  dispatch(clearIntakeToggle());
  dispatch(addSort(""));
  dispatch(addPerPage({ start: 0, end: 0 }));
};
