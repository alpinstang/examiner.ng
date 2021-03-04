import Link from "next/link";
import React from "react";
import { truncateString } from "../lib/truncateString";

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
}: BlogProps) => {
  const getDate = (timestamp: any) => {
    let date = new Date(timestamp);

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    return day + " " + monthNames[month] + " " + year;
  };

  return (
    <article className="prose dark:prose-light space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500">
          <time dateTime={publish_date}>{getDate(publish_date)}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">
            <a
              className="text-gray-900"
              href="/tailwindcss-from-zero-to-production"
            >
              {name}
            </a>
          </h2>
          <div className="prose max-w-none text-gray-500">
            <b>{truncateString(gold_text, 140)}</b>
            <p>{truncateString(short_description, 160)}</p>
          </div>
        </div>
        <div className="text-base leading-6 font-medium">
          <Link
            href={{
              pathname: `/blog/${encodeURI(name.replace(" ", "-"))}`,
              query: {
                name,
              },
            }}
            as={"/blog/" + encodeURI(name.toLowerCase().replace(" ", "-"))}
          >
            <a className="blog-link" aria-label="Read More">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPreview;
