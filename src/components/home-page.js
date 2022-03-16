/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Loading from './loader'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { saveNews, saveNewsList, clearNewsList , saveIndex} from './../actions/list-details/news'
import Header from "./header";
import { fetchListDetails } from '../actions/list-details/index'

export default function HomePage() {
  const scrollRef = useRef([])

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const newsList  = useSelector((state) => state?.news?.newsList);
  const newsIndex  = useSelector((state) => state?.news?.newsIndex);
  const responseData = useSelector((state) => state.news?.details)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!newsList){
        dispatch(fetchListDetails(''));
        setLoading(true)
    } else {
      setData(newsList);
      dispatch(clearNewsList())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsList]);

  useEffect(() => {
    if(responseData) {
     setData(responseData?.response?.docs)
     setLoading(false)
    }
  }, [responseData]);

  const goToDetail = async (nData,nIndex) =>{
      await dispatch(saveNews(nData))
      await dispatch(saveNewsList(data))
      await dispatch(saveIndex(window.pageYOffset));
      router.push('./details')
  }
  

  return (
    <div className={styles.container}>
      <Loading isLoading={isLoading} />
      <main className={styles.main}>
        <>
          <Header />
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">News Articles</h2>
          <div className="my-20">
            {data &&
              data?.map((value, key) => (
                <div
                  key={key}
                  className="max-w-sm max-w-md max-w-lg max-w-2xl rounded overflow-hidden shadow-lg my-2 mb-5"
                  onClick={() => goToDetail(value,key)}
                  ref={(el) => scrollRef.current[key]=el}
                >
                  <img
                    className="w-full p-5"
                    src={
                      value.multimedia
                        ? value.multimedia.length > 0
                          ? `https://static01.nyt.com/${value.multimedia[0].url}`
                          : "/noImage.png"
                        : "/noImage.png"
                    }
                    alt="Sunset in the mountains"
                    onLoad={()=> {
                      if(newsIndex){
                        window.scrollTo(0,newsIndex)
                    }
                    }}
                    width='100px'
                    height='100px'
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {value?.headline?.main}
                    </div>
                    <p className="text-gray-700 text-base">
                      {value.lead_paragraph
                        ? value.abstract.substr(0, 150)
                        : ""}
                    </p>
                    <a
                      className="underline ..."
                      href={value?.web_url}
                      target="_blank" rel="noreferrer"
                    >
                      News Link
                    </a>
                  </div>

                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value.section_name}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value?.news_desk}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{value?.type_of_material}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {data.length == 0 && !isLoading && (
            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
              <div>
                <p className="font-bold">Sorry, No Data Found</p>
                <p className="text-sm">Make sure you typed correct keyword.</p>
              </div>
            </div>
          </div>
          )}
        </>
      </main>
    </div>
  );
}
