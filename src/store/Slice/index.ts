import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
interface LanguageState {
  language: string;
}

// Define the initial state using that type
const initialState: LanguageState = {
  language: "en-emodeng",
};

export const languageSlice = createSlice({
  name: "preference",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAng: (state) => {
      state.language = "en-emodeng";
    },
    setSpanich: (state) => {
      state.language = "es-GT";
    },
  },
});

export const { setAng, setSpanich } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.preference.language;

export default languageSlice.reducer;
