import * as types from "./types";

export const requestNewsData = () => {
  return {
    type: types.REQUEST_NEWS_DATA
};
};

export const successNewsData = (details) => {
  return {
    type: types.SUCCESS_NEWS_DATA,
    details
  };
};

export const failureNewsData = (error) => {
  return {
    type: types.FAILURE_NEWS_DATA,
    error
  };
};



export const saveNews = (news) => {
  return {
    type: types.SAVE_NEWS_DATA,
    news,
  };
};

export const saveNewsList = (newslist) => {
  return {
    type: types.SAVE_NEWS_LIST,
    newslist,
  };
};

export const clearNewsList = () => {
  return {
    type: types.CLEAR_NEWS_LIST,
  };
};

export const saveIndex = (newsIndex) => {
  return {
    type: types.SAVE_NEWS_INDEX,
    newsIndex
  };
};




