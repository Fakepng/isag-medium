import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const tagLinks = [
  "For you",
  "Network",
  "Reverse Engineering",
  "Forensic",
  "Cryptography",
  "Web Technology",
  "Cryptography1",
  "Web Technology1",
  "Cryptography2",
  "Web Technology2",
  "Cryptography3",
  "Web Technology3",
  "Cryptography4",
  "Web Technology4",
];

const Tag = ({ tagChange }) => {
  const [currTag, setTag] = useState<string>("For you");
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollEnd, setScrollEnd] = useState<boolean>(false);
  const scrollElement = useRef(null);

  useEffect(() => {
    tagChange(currTag);
  }, [currTag]);

  const scroll = (size: number) => {
    scrollElement.current.scrollLeft += size;
    setScrollX(scrollX + size);
    console.log(scrollElement.current.scrollWidth);
    if (
      Math.floor(
        scrollElement.current.scrollWidth -
          scrollElement.current.scrollLeft -
          100
      ) <= scrollElement.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className="flex border-b-[1px] border-b-neutral-200 dark:border-b-neutral-600">
      {scrollX !== 0 && (
        <button onClick={() => scroll(-80)}>
          <MdOutlineKeyboardArrowLeft className="nav-icon !my-0 dark:text-neutral-200" />
        </button>
      )}
      <div className="overflow-hidden mx-4 flex" ref={scrollElement}>
        {tagLinks.map((tag) => (
          <div
            onClick={() => setTag(tag)}
            key={tag}
            className={`text-base whitespace-nowrap mx-4 cursor-pointer py-1 inline-block text-neutral-400 ${
              currTag === tag
                ? "border-b-[1px] border-b-neutral-600 text-neutral-800 dark:border-b-neutral-400 dark:text-neutral-200"
                : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
      {!scrollEnd && (
        <button onClick={() => scroll(80)}>
          <MdOutlineKeyboardArrowRight className="nav-icon !my-0 text-neutral-200" />
        </button>
      )}
    </div>
  );
};

export default Tag;
