import { Interface } from "readline";

type HeadingProps ={
  className: string;
  title?: string;
  text?: string;
}


const Heading: React.FC<HeadingProps> = ({ className, title, text }: HeadingProps) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {title && <h2 className="h1 text-left">{title}</h2>}
      {text && <p className="body-1 mt-2 text-n-2 text-justify">{text}</p>}
    </div>
  );
};

export default Heading;
