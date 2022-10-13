import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useRef, useState } from "react";

const tagLinks = [
  "For you",
  "Network",
  "Reverse Engineering",
  "Forensic",
  "Cryptography",
  "Web Technology",
  "Cryptography",
  "Web Technology",
  "Cryptography",
  "Web Technology",
  "Cryptography",
  "Web Technology",
  "Cryptography",
  "Web Technology",
];

const Tag = () => {
  const [count, setCount] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollEnd, setScrollEnd] = useState<boolean>(false);
  const scrollElement = useRef(null);

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
    <div className="flex border-b-[1px] border-b-slate-500">
      {scrollX !== 0 && (
        <button onClick={() => scroll(-80)}>
          <MdOutlineKeyboardArrowLeft className="nav-icon !my-0" />
        </button>
      )}
      <div className="overflow-hidden mx-4 flex" ref={scrollElement}>
        {tagLinks.map((tag, index) => (
          <div
            onClick={() => setCount(index)}
            key={index}
            className={`text-base whitespace-nowrap mx-4 cursor-pointer py-1 inline-block ${
              count === index ? "border-b-2 border-b-black" : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
      {!scrollEnd && (
        <button onClick={() => scroll(80)}>
          <MdOutlineKeyboardArrowRight className="nav-icon !my-0" />
        </button>
      )}
    </div>
  );
};

export default Tag;
