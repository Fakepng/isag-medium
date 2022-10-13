import Giscus from '@giscus/react';

export default function Comment() {
    return (
    <Giscus
      repo="ISAG-Lab/isag-medium"
      repoId="R_kgDOICgBqQ"
      category="Comment"
      categoryId="DIC_kwDOICgBqc4CRkL1"
      mapping="url"
      term="Comment"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
      //crossOrigin="anonymous" 
    />
    )
}