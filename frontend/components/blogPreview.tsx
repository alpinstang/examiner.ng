import Link from "next/link";
import React, { useEffect, useState } from "react";
import { truncateString } from "../lib/truncateString";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

interface BlogProps {
  name: string;
  gold_text: string;
  description: string;
  tags: string;
  images: Array<any>;
  publish_date: string;
  short_description: string;
  id: string;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BlogPreview = ({
  name,
  gold_text,
  short_description,
  publish_date,
  images,
}: BlogProps) => {
  const getDate = (timestamp: any) => {
    let date = new Date(timestamp);

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    return day + " " + monthNames[month] + " " + year;
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    const getUrl = async () => {
      let storage = firebase.storage();
      var pathReference = storage.ref(images[0]);
      await pathReference.getDownloadURL().then((url) => {
        setUrl(url);
      });
    };

    getUrl();
  }, []);

  return (
    <div className="w-full lg:max-w-full lg:flex bg-gray-100 shadow-lg">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${url ? url : "/static/loading.gif"})` }}
        title={name}
      ></div>
      <div className="border-r border-b border-l border-green-400 lg:border-l-0 lg:border-t lg:border-green-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center pb-2">
            <span className="w-6 h-6 mr-2 -mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <time dateTime={publish_date}>{getDate(publish_date)}</time>
          </p>
          <div className="text-gray-900 font-bold text-2xl mb-2">{name}</div>
          <p className="text-green-600 text-base">
            {truncateString(gold_text, 140)}
          </p>
          <p className="text-gray-700 text-base">
            {truncateString(short_description, 160)}
          </p>
        </div>
        <div className="flex items-center">
          <Link
            href={{
              pathname: `/blog/${encodeURI(name)}`,
              query: {
                name,
              },
            }}
          >
            <a
              className="blog-link text-xl underline text-green-600 font-bold"
              aria-label="Read More"
            >
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
