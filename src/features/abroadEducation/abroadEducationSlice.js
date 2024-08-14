import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: [
    { id: 1, name: "USA", value: "usa", isChecked: false },
    { id: 2, name: "Australia", value: "australia", isChecked: false },
    { id: 3, name: "Canada", value: "canada", isChecked: false },
    { id: 4, name: "UK", value: "uk", isChecked: false },
    { id: 5, name: "Italy", value: "italy", isChecked: false },
    { id: 6, name: "Ireland", value: "ireland", isChecked: false },
    { id: 7, name: "Germany", value: "germany", isChecked: false },
  ],
  course: [
    {
      id: 1,
      name: "Faculty of Business",
      value: "facultyofbusiness",
      isChecked: false,
    },
    {
      id: 2,
      name: "Faculty of Education",
      value: "facultyofeducation",
      isChecked: false,
    },
    {
      id: 3,
      name: "Health and Human Sciences",
      value: "healthandhumansciences",
      isChecked: false,
    },
    {
      id: 4,
      name: "Faculty of Engineering and Science",
      value: "facultyofengineeringandscience",
      isChecked: false,
    },
    {
      id: 5,
      name: "Faculty of Liberal Arts and Sciences",
      value: "facultyofliberalartsandsciences",
      isChecked: false,
    },
  ],
  specializations: [
    {
      id: 1,
      name: "Executive Business Centre",
      value: "executivebusinesscentre",
      isChecked: false,
    },
    { id: 2, name: "Business", value: "business", isChecked: false },
    {
      id: 3,
      name: "Operations and Strategy",
      value: "operationsandstrategy",
      isChecked: false,
    },
    {
      id: 4,
      name: "Management and Marketing",
      value: "managementandmarketing",
      isChecked: false,
    },
    { id: 5, name: "Accounting", value: "accounting", isChecked: false },
    {
      id: 6,
      name: "Finance and Economics",
      value: "financeandeconomics",
      isChecked: false,
    },
    {
      id: 7,
      name: "School of Education",
      value: "schoolofeducation",
      isChecked: false,
    },
    { id: 8, name: "Human Sciences", value: "humansciences", isChecked: false },
    { id: 9, name: "Engineering", value: "engineering", isChecked: false },
    { id: 10, name: "Pharmacy", value: "pharmacy", isChecked: false },
    { id: 11, name: "Science", value: "science", isChecked: false },
    {
      id: 12,
      name: "Natural Resources",
      value: "naturalresources",
      isChecked: false,
    },
    {
      id: 13,
      name: "Computing and Mathematical Sciences",
      value: "computingandmathematicalsciences",
      isChecked: false,
    },
    { id: 14, name: "Design", value: "design", isChecked: false },
    {
      id: 15,
      name: "Humanities and Social Sciences",
      value: "humanitiesandsocialsciences",
      isChecked: false,
    },
    {
      id: 16,
      name: "Law and Criminology",
      value: "lawandcriminology",
      isChecked: false,
    },
    {
      id: 17,
      name: "Stage and Screen.",
      value: "stageandscreen.",
      isChecked: false,
    },
  ],
  intake: [
    { id: 1, name: "January", value: "January", isChecked: false },
    { id: 2, name: "May", value: "May", isChecked: false },
    { id: 3, name: "September", value: "September", isChecked: false },
  ],
};

export const abroadEducationSlice = createSlice({
  name: "abroadEducation",
  initialState,
  reducers: {
    countryCheck: (state, { payload }) => {
      state?.country?.map((item) => {
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
    clearCountryToggle: (state) => {
      state?.country?.map((item) => {
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

    intakeCheck: (state, { payload }) => {
      state?.intake?.map((item) => {
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
    clearIntakeToggle: (state) => {
      state?.intake?.map((item) => {
        item.isChecked = false;
        return {
          ...item,
        };
      });
    },
  },
});

export const {
  countryCheck,
  clearCountryToggle,
  courseCheck,
  clearCourseToggle,
  specializationsCheck,
  clearSpecializationsToggle,
  intakeCheck,
  clearIntakeToggle,
} = abroadEducationSlice.actions;

export default abroadEducationSlice.reducer;
