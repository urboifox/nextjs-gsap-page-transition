import TransitionLink from "@/components/common/TransitionLink";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <TransitionLink href="/about">Go to about page</TransitionLink>
    </div>
  );
}
