import {
  clearCity,
  clearCourse,
  clearSpecializations,
  clearLevelOfEducation,
  addSort,
  addPerPage,
} from "../onlineEducation/onlineEducationFilterSlice";
import {
  clearCityToggle,
  clearCourseToggle,
  clearSpecializationsToggle,
  clearLevelOfEducationToggle,
} from "../onlineEducation/onlineEducationSlice";

import { useDispatch } from "react-redux";

export const clearOnlineStoreFilters = () => {
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
