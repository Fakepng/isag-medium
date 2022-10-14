import Link from "next/link";
const isProd = process.env.NODE_ENV === "production";

const Card = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex dark:bg-slate-400 shadow-md bg-red-100  mb-10 rounded-lg p-6 justify-between cursor-pointer">
        <div className="flex flex-col justify-between pr-8">
          <div>
            <h1 className="text-xl font-semibold">{post.frontMatter.title}</h1>
            <p className="font-medium py-2">{post.frontMatter.description}</p>
          </div>
          <div className="flex">
            <p className="bg-black mr-2 py-1 text-xs rounded-xl border-0 px-4 text-white">
              {post.frontMatter.tags[0]}
            </p>
            <p className="text-xs py-1">{post.frontMatter.date}</p>
          </div>
        </div>
        <div className="max-w-[250px]">
          <img
            className="w-full"
            src={`${isProd ? process.env.BASE_PATH : ""}/static/images/posts/${post.slug}${post.frontMatter.thumbnailUrl}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
