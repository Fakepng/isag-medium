import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div >
      {posts.map((post, index) => (
        <div style={{ width: "50%", margin: "20px auto" }} key={index}>
          <Link href={'/blog/' + post.slug} >
            <div key={index} style={{ border: "solid 2px black", padding: "30px" }}>
              <h5>{post.frontMatter.title}</h5>
              <p>{post.frontMatter.description}</p>
              <p>
                <small>{post.frontMatter.date}</small>
              </p>

              <div >
                {/* <Image
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                /> */}
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>

  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}