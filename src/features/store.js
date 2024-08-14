import { configureStore } from "@reduxjs/toolkit";
import abroadEducationFilterSlice from "./abroadEducation/abroadEducationFilterSlice";
import abroadEducationSlice from "./abroadEducation/abroadEducationSlice";
import indiaEducationSlice from "./indiaEducation/indiaEducationSlice";
import indiaEducationFilterSlice from "./indiaEducation/indiaEducationFilterSlice";
import onlineEducationSlice from "./onlineEducation/onlineEducationSlice";
import onlineEducationFilterSlice from "./onlineEducation/onlineEducationFilterSlice";

export const store = configureStore({
  reducer: {
    abroadEducation: abroadEducationSlice,
    abroadEducationFilter: abroadEducationFilterSlice,
    indiaEducation: indiaEducationSlice,
    indiaEducationFilter: indiaEducationFilterSlice,
    onlineEducation: onlineEducationSlice,
    onlineEducationFilter: onlineEducationFilterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
