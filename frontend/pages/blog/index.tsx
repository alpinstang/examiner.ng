import React from "react";
import BlogPreview from "../../components/blogPreview";
import { db, firebase } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Blog = () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("exams"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const posts = [{ title: "test 1" }];
  return (
    <>
      <div>
        <main>
          <div>
            <p>
              {error && <strong>Error: {JSON.stringify(error)}</strong>}
              {loading && <span>Collection: Loading...</span>}
              {value && (
                <span>
                  Collection:{" "}
                  {value.docs.map((doc: any) => (
                    <React.Fragment key={doc.id}>
                      {JSON.stringify(doc.data())},{" "}
                    </React.Fragment>
                  ))}
                </span>
              )}
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Latest
              </h1>
              <p className="text-lg leading-7 text-gray-500">
                All the latest Tailwind CSS news, straight from the team.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map((post: any) => (
                <li>
                  {post.title}
                  <BlogPreview />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
