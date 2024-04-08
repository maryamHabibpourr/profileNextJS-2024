import Section from "@/app/components/design/Section";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="text-center pt-[4.75rem] lg:pt-[7.25rem] overflow-hidden">
        <p className="mt-10">Sorry, the requested post does not exist.</p>
        <Link href="/">Back to Home</Link>
      </div>
    </Section>
  );
}
