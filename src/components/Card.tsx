import Link from "next/link"

const Card = ({post}) => {
  console.log(post);
  
  return (
    <Link href={`/blog/${post.slug}`}>Card</Link>
  )
}

export default Card