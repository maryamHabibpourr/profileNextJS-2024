import { getPostsMeta } from "@/lib/posts";
import Section from "../components/design/Section";
import Heading from "../components/design/Heading";
import ListItem from "../components/ListItem";
import { Gradient } from "../components/design/Roadmap";


export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="container relative z-2">
      <Gradient />
        <Heading
          className="md:max-w-md lg:max-w-2xl mt-10"
          title="Cutting-Edge Tips."
        />
        <div className="pt-[1.75rem] lg:pt-[1.25rem] px-4 md:px-6 prose prose-xl prose-slate mx-auto text-white/90">
          <ul className="w-full list-none p-0">
            {posts.map((post) => (
              <ListItem key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
