import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
  return (
    <div className="">
      {tagLinks.map((tag, index) => (
        <p key={index} className="inline">{tag}</p>
      ))}
      <MdOutlineKeyboardArrowRight />
    </div>
  );
};

export default Tag;
