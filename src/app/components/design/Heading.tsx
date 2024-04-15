import { Interface } from "readline";
import TagLine from "./Tagline";

type HeadingProps ={
  className?: string;
  title?: string;
  text?: string;
  tag?:string;
}


const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 justify-center">{tag}</TagLine>}
      {title && <h2 className="h1">{title}</h2>}
      {text && <p className="body-1 mt-2 text-white text-justify">{text}</p>}
    </div>
  );
};

export default Heading;
