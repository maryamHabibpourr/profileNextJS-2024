import Section from "./design/Section";
import Image from "next/image";
import github from "../assets/github.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Section
      crosses
      className="!px-10 !py-10 bottom-0"
      id="my-section"
      crossesOffset="my-offset"
      customPaddings="my-paddings"
    >
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <Link href="https://github.com/maryamHabibpourr/" target="_blank">
          <Image src={github} alt="github" width={40} height={40} />
        </Link>
      </div>
    </Section>
  );
};

export default Footer;
