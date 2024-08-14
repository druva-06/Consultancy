import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: [
    {
      id: 1,
      name: "Mumbai",
      isChecked: false,
    },
    {
      id: 2,
      name: "Delhi",
      isChecked: false,
    },
    {
      id: 3,
      name: "Bangalore",
      isChecked: false,
    },
    {
      id: 4,
      name: "Chennai",
      isChecked: false,
    },
    {
      id: 5,
      name: "Kolkata",
      isChecked: false,
    },
  ],
  course: [
    {
      id: 1,
      name: "Engineering",
      isChecked: false,
    },
    {
      id: 2,
      name: "Medical",
      isChecked: false,
    },
    {
      id: 3,
      name: "Management",
      isChecked: false,
    },
    {
      id: 4,
      name: "Science",
      isChecked: false,
    },
    {
      id: 5,
      name: "Commerce",
      isChecked: false,
    },
  ],
  specializations: [
    {
      id: 1,
      name: "Computer Science",
      isChecked: false,
    },
    {
      id: 2,
      name: "Mechanical",
      isChecked: false,
    },
    {
      id: 3,
      name: "Civil",
      isChecked: false,
    },
    {
      id: 4,
      name: "Electrical",
      isChecked: false,
    },
    {
      id: 5,
      name: "Electronics",
      isChecked: false,
    },
  ],
  levelOfEducation: [
    {
      id: 1,
      name: "Diploma",
      isChecked: false,
    },
    {
      id: 2,
      name: "Bachelor's",
      isChecked: false,
    },
    {
      id: 3,
      name: "Master's",
      isChecked: false,
    },
    {
      id: 4,
      name: "PhD",
      isChecked: false,
    },
  ],
};

const indiaEducationSlice = createSlice({
  name: "indiaEducation",
  initialState,
  reducers: {
    cityCheck: (state, { payload }) => {
      state?.city?.map((item) => {
        if (item.id === payload) {
          if (item.isChecked) {
            item.isChecked = false;
          } else {
            item.isChecked = true;
          }
        }
        return {
          ...item,
        };
      });
    },
    clearCityToggle: (state) => {
      state?.city?.map((item) => {
        item.isChecked = false;
        return {
          ...item,
        };
      });
    },

    courseCheck: (state, { payload }) => {
      state?.course?.map((item) => {
        if (item.id === payload) {
          if (item.isChecked) {
            item.isChecked = false;
          } else {
            item.isChecked = true;
          }
        }
        return {
          ...item,
        };
      });
    },
    clearCourseToggle: (state) => {
      state?.course?.map((item) => {
        item.isChecked = false;
        return {
          ...item,
        };
      });
    },

    specializationsCheck: (state, { payload }) => {
      state?.specializations?.map((item) => {
        if (item.id === payload) {
          if (item.isChecked) {
            item.isChecked = false;
          } else {
            item.isChecked = true;
          }
        }
        return {
          ...item,
        };
      });
    },
    clearSpecializationsToggle: (state) => {
      state?.specializations?.map((item) => {
        item.isChecked = false;
        return {
          ...item,
        };
      });
    },

    levelOfEducationCheck: (state, { payload }) => {
      state?.levelOfEducation?.map((item) => {
        if (item.id === payload) {
          if (item.isChecked) {
            item.isChecked = false;
          } else {
            item.isChecked = true;
          }
        }
        return {
          ...item,
        };
      });
    },
    clearLevelOfEducationToggle: (state) => {
      state?.levelOfEducation?.map((item) => {
        item.isChecked = false;
        return {
          ...item,
        };
      });
    },
  },
});

export default indiaEducationSlice.reducer;
export const {
  cityCheck,
  clearCityToggle,
  courseCheck,
  clearCourseToggle,
  specializationsCheck,
  clearSpecializationsToggle,
  levelOfEducationCheck,
  clearLevelOfEducationToggle,
} = indiaEducationSlice.actions;
