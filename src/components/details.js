/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Header from "./header";
import { useRouter } from 'next/router'

function Detail() {
  const [newsData, setNewsData] = useState(null);
  const router = useRouter()
  const news = useSelector((state) => state?.news?.response);
  console.log('newsData', news)

  useEffect(() => {
    if(typeof news !== 'undefined') setNewsData(news)
  }, [news]);

  const forMatDate = (date) => {
      if(date){
        let d = new Date(date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${da}-${mo}-${ye}`
    }
    return ''
  }
  

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className="max-w-sm rounded overflow-hidden  pt-20">
          <img
            className="w-full"
            src={
              newsData?.multimedia
                ? newsData.multimedia.length > 0
                  ? `https://static01.nyt.com/${newsData.multimedia[0].url}`
                  : "/noImage.png"
                : "/noImage.png"
            }
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{newsData?.headline?.main}</div>
            <p className="text-gray-700 text-base">{newsData?.abstract}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.section_name}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.news_desk}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{newsData?.type_of_material}
                    </span>
                  </div>
        

        </div>
      </main>
      <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              Publish Date
              </div>
              <div className={styles.right}>
              {forMatDate(newsData?.pub_date)}
              </div>
          </div>
        </div>
        <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              News desk
              </div>
              <div className={styles.right}>
              {newsData?.news_desk}
              </div>
          </div>
        </div>
        <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              Document type
              </div>
              <div className={styles.right}>
              {newsData?.document_type || 'N/A'}
              </div>
          </div>
        </div>
        <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              Subsection name
              </div>
              <div className={styles.right}>
              {newsData?.subsection_name || 'N/A'}
              </div>
          </div>
        </div>
        <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              Lead paragraph
              </div>
              <div className={styles.right}>
              {newsData?.lead_paragraph || 'N/A'}
              </div>
          </div>
        </div>
        <div className="flex flex-col font-sans border-b-stone-300 border-2">
          <div className="flex flex-row justify-between min-h-5 px-6 pt-4 pb-4 ">
              <div className={styles.left}>
              Type Of material
              </div>
              <div className={styles.right}>
              {newsData?.type_of_material || 'N/A'}
              </div>
          </div>
        </div>
    </div>
  );
}

export default Detail;
