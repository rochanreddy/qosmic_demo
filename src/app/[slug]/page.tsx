import { Suspense } from "react";
import { notFound } from "next/navigation";
import Campaign_Home_wrapper from "./wrapper";

// Disabled Firebase for demo
export const dynamic = 'force-dynamic';

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // For demo: just render the wrapper without Firebase data
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campaign_Home_wrapper
        id={slug}
        form_link={slug}
      />
    </Suspense>
  );
}
