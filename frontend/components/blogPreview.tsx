const BlogPreview = () => {
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500">
          <time dateTime="2021-02-16T16:05:00.000Z">Febuary 16, 2021</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">
            <a
              className="text-gray-900"
              href="/tailwindcss-from-zero-to-production"
            >
              "Tailwind CSS: From Zero to Production" on YouTube
            </a>
          </h2>
          <div className="prose max-w-none text-gray-500">
            <p>
              Today we're excited to release{" "}
              <a href="https://www.youtube.com/watch?v=elgqxmdVms8&amp;list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&amp;index=1">
                Tailwind CSS: From Zero to Production
              </a>
              , a new screencast series that teaches you everything you need to
              know to get up and running with Tailwind CSS v2.0 from scratch.
            </p>
          </div>
        </div>
        <div className="text-base leading-6 font-medium">
          <a
            className="text-teal-500 hover:text-teal-600"
            aria-label='Read ""Tailwind CSS: From Zero to Production" on YouTube"'
            href="/tailwindcss-from-zero-to-production"
          >
            Read more
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPreview;
