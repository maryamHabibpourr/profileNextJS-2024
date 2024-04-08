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
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
