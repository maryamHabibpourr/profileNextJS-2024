import curve1 from "../../assets/collaboration/curve-1.svg";
import curve2 from "../../assets/collaboration/curve-2.svg";
import Image from "next/image";


const RightCurve: React.FC = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <Image src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

const LeftCurve: React.FC = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Image src={curve1} width={522} height={182} alt="Curve 1"/>
    </div>
  );
};

export { RightCurve, LeftCurve };
