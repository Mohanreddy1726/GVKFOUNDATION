import { PROGRAMS } from "../../lib/programs";
import ProgramDetailPage from "./ProgramDetailPage";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProgramDetailPage slug={slug} />;
}