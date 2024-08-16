import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: [
    {
      id: 1,
      name: "Delhi",
      isChecked: false,
      value: "delhi",
    },
    {
      id: 2,
      name: "Mumbai",
      isChecked: false,
      value: "mumbai",
    },
    {
      id: 3,
      name: "Bangalore",
      isChecked: false,
      value: "bangalore",
    },
    {
      id: 4,
      name: "Hyderabad",
      isChecked: false,
      value: "hyderabad",
    },
    {
      id: 5,
      name: "Pune",
      isChecked: false,
      value: "pune",
    },
    {
      id: 6,
      name: "Himaclal Pradesh",
      isChecked: false,
      value: "himachal-pradesh",
    },
    {
      id: 7,
      name: "Dehradun",
      isChecked: false,
      value: "dehradun",
    },
    {
      id: 8,
      name: "Andhra Pradesh",
      isChecked: false,
      value: "andhra-pradesh",
    },
  ],
  course: [
    {
      id: 1,
      name: "MBA",
      isChecked: false,
      value: "mba",
    },
    {
      id: 2,
      name: "PGDM",
      isChecked: false,
      value: "pgdm",
    },
    {
      id: 3,
      name: "MCA",
      isChecked: false,
      value: "mca",
    },
  ],
  specializations: [
    {
      id: 1,
      name: "Marketing management",
      isChecked: false,
      value: "marketing-management",
    },
    {
      id: 2,
      name: "Finance management",
      isChecked: false,
      value: "finance-management",
    },
    {
      id: 3,
      name: "Human Resource",
      isChecked: false,
      value: "human-resource",
    },
    {
      id: 4,
      name: "Business Analytics",
      isChecked: false,
      value: "business-analytics",
    },
    {
      id: 5,
      name: "Production & Operations ",
      isChecked: false,
      value: "production-operations",
    },
  ],
  levelOfEducation: [
    {
      id: 1,
      name: "Undergraduate",
      isChecked: false,
      value: "undergraduate",
    },
    {
      id: 2,
      name: "Postgraduate",
      isChecked: false,
      value: "postgraduate",
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
