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
  const scrollElement = useRef(null);

  const scrollRight = () => (scrollElement.current.scrollLeft += 50);

  const scrollLeft = () => (scrollElement.current.scrollLeft -= 50);

  return (
    <div className="flex border-b-[1px] border-b-slate-500">
      <button onClick={scrollLeft}>
        <MdOutlineKeyboardArrowLeft className="nav-icon !my-0" />
      </button>
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
      <button onClick={scrollRight}>
        <MdOutlineKeyboardArrowRight className="nav-icon !my-0" />
      </button>
    </div>
  );
};

export default Tag;
