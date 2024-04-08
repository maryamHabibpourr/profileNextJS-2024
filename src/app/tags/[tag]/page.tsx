import Section from "@/app/components/design/Section";
import ListItem from "@/app/components/ListItem";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
      <Section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className="container relative z-2">
        <h2 className="text-3xl text-color-3 text-center mt-4 mb-0">Results for: #{tag}</h2>
          <div className="pt-[1.75rem] lg:pt-[1.25rem] px-4 md:px-6 prose prose-xl prose-slate mx-auto text-white/90">
            <ul className="w-full list-none p-0">
            {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
            </ul>
          </div>
        </div>
      </Section>
    
  );
}
