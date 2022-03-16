import news from '../../reducers/news_store'
import * as types from '../../actions/list-details/types'

describe("testing default reducer", () => {
  it("should return the initial state", () => {
    expect(news(undefined, {})).toEqual({
      response: null,
      newsList: null,
      isLoading: false,
      error: "",
      details: null
    });
  });

  it("should handle SAVE_NEWS_DATA", () => {
    let action = {
      type: types.SAVE_NEWS_DATA,
      news : {}
    };
    const expected = {
      response : action.news
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle SAVE_NEWS_LIST", () => {
    let action = {
      type: types.SAVE_NEWS_LIST,
      newslist: [],
    };
    const expected = {
      newsList: action.newslist
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle CLEAR_NEWS_LIST", () => {
    let action = {
      type: types.CLEAR_NEWS_LIST,
    };
    const expected = {
      newsList: null
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle SAVE_NEWS_INDEX", () => {
    let action = {
      type: types.SAVE_NEWS_INDEX,
      newsIndex:234
    };
    const expected = {
      newsIndex: action.newsIndex
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle REQUEST_NEWS_DATA", () => {
    let action = {
      type: types.REQUEST_NEWS_DATA
    };
    const expected = {
      response : action.news
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle SUCCESS_NEWS_DATA", () => {
    let action = {
      type: types.SUCCESS_NEWS_DATA,
      details: undefined,
    };
    const expected = {
      details: action.newslist
    };
    expect(news({}, action)).toEqual(expected);
  });

  it("should handle FAILURE_NEWS_DATA", () => {
    let action = {
      type: types.FAILURE_NEWS_DATA,
    };
    const expected = {
        error: undefined
    };
    expect(news({}, action)).toEqual(expected);
  });
 });
