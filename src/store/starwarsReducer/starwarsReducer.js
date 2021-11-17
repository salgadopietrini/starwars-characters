import apiCall from "../../apiCall/apiCall";
import { NEXT_PAGE, PREVIOUS_PAGE, FILL_LIST } from "./actionsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  page: 1,
  list: [],
};

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});

export const fillList = createAsyncThunk("FILL_LIST", async (page) => {
  const fetchData = await apiCall(page);
  return fetchData;
});

export function starwarsReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case PREVIOUS_PAGE:
      return { ...state, page: state.page - 1 };
    case FILL_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
