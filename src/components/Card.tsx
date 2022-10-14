import Link from "next/link";

const Card = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex justify-between bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg p-6 cursor-pointer overflow-hidden">
        <div className="flex flex-col justify-between space-y-2">
          <div className="space-y-1">
            <h2 className="text:md lg:text-xl font-medium leading-8 tracking-tight">{post.frontMatter.title}</h2>
            <p className="font-light text-sm hidden md:block max-w-none lg:block">{post.frontMatter.description}</p>
          </div>
          <div className="flex">
            <p className="bg-neutral-700 mr-2 py-1 text-xs rounded-xl border-0 px-4 text-neutral-100 ">
              {post.frontMatter.tags[0]}
            </p>
            <p className="text-xs py-1 font-lignt">{post.frontMatter.date}</p>
          </div>
        </div>
        {
          post.frontMatter.thumbnailUrl ? (

            <img
              className="max-w-[250px] ml-8 object-cover object-center hidden md:block lg:block"
              src={`${process.env.NODE_ENV === "production" ? process.env.ASSETS : ""}/static/images/posts/${post.slug}${post.frontMatter.thumbnailUrl}`}
              alt=""
            />

          ) : ""
        }
      </div>
    </Link>
  );
};

export default Card;
