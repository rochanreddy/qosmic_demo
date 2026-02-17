import { Suspense } from "react";
import Campaign_Home_wrapper from "./wrapper";

// Disabled Firebase for demo
export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campaign_Home_wrapper id="webdesign" form_link="webdesign" />
    </Suspense>
  );
}
