import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collegeList: {
    country: [],
    countrySelect: "",
    course: [],
    courseSelect: "",
    specializations: [],
    specializationsSelect: "",
    intake: [],
    intakeSelect: "",
  },
  collegeSort: {
    sort: "",
    perPage: {
      start: 0,
      end: 0,
    },
  },
};

export const abroadEducationFilterSlice = createSlice({
  name: "abroadEducationFilter",
  initialState,
  reducers: {
    addCountry: (state, { payload }) => {
      const isExist = state.collegeList.country.includes(payload);
      if (!isExist) {
        state.collegeList.country.push(payload);
      } else {
        state.collegeList.country = state.collegeList.country.filter(
          (item) => item !== payload
        );
      }
    },
    addCountrySelect: (state, { payload }) => {
      state.collegeList.countrySelect = payload;
    },
    clearCountry: (state) => {
      state.collegeList.country = [];
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

    addIntake: (state, { payload }) => {
      const isExist = state.collegeList.intake.includes(payload);
      if (!isExist) {
        state.collegeList.intake.push(payload);
      } else {
        state.collegeList.intake = state.collegeList.intake.filter(
          (item) => item !== payload
        );
      }
    },
    addIntakeSelect: (state, { payload }) => {
      state.collegeList.intakeSelect = payload;
    },
    clearIntake: (state) => {
      state.collegeList.intake = [];
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
  addCountry,
  addCountrySelect,
  clearCountry,
  addCourse,
  addCourseSelect,
  clearCourse,
  addSpecializations,
  addSpecializationsSelect,
  clearSpecializations,
  addIntake,
  addIntakeSelect,
  clearIntake,
  addSort,
  addPerPage,
} = abroadEducationFilterSlice.actions;

export default abroadEducationFilterSlice.reducer;
