import { notFound } from "next/navigation";
import GoggleHomeHero from "./GoggleHomeWrapper";

// Disabled Firebase for demo
export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: { slug: string } }) {
  // For demo: just render with slug as id
  return (
    <>
      <GoggleHomeHero id={params.slug} form_link={params.slug} />
    </>
  );
}
