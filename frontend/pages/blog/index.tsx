import BlogPreview from "../../components/blogPreview";

const Blog = () => {
  return (
    <>
      <div>
        <main>
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
              <li className="py-12">
                <BlogPreview />
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
