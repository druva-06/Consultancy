import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collegeList: {
    city: [],
    citySelect: "",
    course: [],
    courseSelect: "",
    specializations: [],
    specializationsSelect: "",
    levelOfEducation: [],
    levelOfEducationSelect: "",
  },
  collegeSort: {
    sort: "",
    perPage: {
      start: 0,
      end: 0,
    },
  },
};

export const onlineEducationFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCity: (state, { payload }) => {
      const isExist = state.collegeList.city.includes(payload);
      if (!isExist) {
        state.collegeList.city.push(payload);
      } else {
        state.collegeList.city = state.collegeList.city.filter(
          (item) => item !== payload
        );
      }
    },
    addCitySelect: (state, { payload }) => {
      state.collegeList.citySelect = payload;
    },
    clearCity: (state) => {
      state.collegeList.city = [];
    },

    addCourse: (state, { payload }) => {
      const isExist = state.collegeList.course.includes(payload);
      if (!isExist) {
        state.collegeList.course.push(payload);
      } else {
        state.collegeList.course = state.collegeList.course.filter(
          (item) => item !== payload
        );
      }
    },
    addCourseSelect: (state, { payload }) => {
      state.collegeList.courseSelect = payload;
    },
    clearCourse: (state) => {
      state.collegeList.course = [];
    },

    addSpecializations: (state, { payload }) => {
      const isExist = state.collegeList.specializations.includes(payload);
      if (!isExist) {
        state.collegeList.specializations.push(payload);
      } else {
        state.collegeList.specializations =
          state.collegeList.specializations.filter((item) => item !== payload);
      }
    },
    addSpecializationsSelect: (state, { payload }) => {
      state.collegeList.specializationsSelect = payload;
    },
    clearSpecializations: (state) => {
      state.collegeList.specializations = [];
    },

    addLevelOfEducation: (state, { payload }) => {
      const isExist = state.collegeList.levelOfEducation.includes(payload);
      if (!isExist) {
        state.collegeList.levelOfEducation.push(payload);
      } else {
        state.collegeList.levelOfEducation = state.collegeList.levelOfEducation.filter(
          (item) => item !== payload
        );
      }
    },
    addLevelOfEducationSelect: (state, { payload }) => {
      state.collegeList.levelOfEducationSelect = payload;
    },
    clearLevelOfEducation: (state) => {
      state.collegeList.levelOfEducation = [];
    },

    addSort: (state, { payload }) => {
      state.collegeSort.sort = payload;
    },
    addPerPage: (state, { payload }) => {
      state.collegeSort.perPage.start = payload.start;
      state.collegeSort.perPage.end = payload.end;
    },
  },
});

export const {
  addCity,
  addCitySelect,
  clearCity,
  addCourse,
  addCourseSelect,
  clearCourse,
  addSpecializations,
  addSpecializationsSelect,
  clearSpecializations,
  addLevelOfEducation,
  addLevelOfEducationSelect,
  clearLevelOfEducation,
  addSort,
  addPerPage,
} = onlineEducationFilterSlice.actions;

export default onlineEducationFilterSlice.reducer;
