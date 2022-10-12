import Link from "next/link";

const Card = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="flex bg-slate-400 max-w-[640px] mb-4 rounded-lg p-6">
        <div>
          <h1>{post.frontMatter.title}</h1>
          <p>{post.frontMatter.description}</p>
          <div>
            <div>
              {post.frontMatter.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <p>{post.frontMatter.date}</p>
          </div>
        </div>
        <div className="max-w-[128px]">
          <img
            className="w-full"
            src={`/static/images/posts/${post.slug}${post.frontMatter.thumbnailUrl}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
