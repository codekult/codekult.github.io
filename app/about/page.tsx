import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8 w-full">
        <header>
          <Link href="/">
            <h1 className="mb-3 text-3xl font-mono">codekult.dev</h1>
          </Link>
        </header>
        <Nav />
      </div>
      <main>
        <article className="flex flex-col justify-center items-center mt-5">
          <p className="mb-3">
            <b>Senior Full-Stack Engineer</b> with <b>+10 years</b> of
            experience delivering complex user-centric web systems at scale.
            Expert in bridging the gap between <b>Product</b> and{" "}
            <b>Platform</b> engineering to build resilient, high- availability
            solutions for global industry leaders and ambitious startups
          </p>
          <p className="mb-3">
            <b>Currently exploring</b> how to leverage my extensive expertise in
            distributed systems and performance optimization to build
            production-grade <b>Applied AI</b> solutions, specializing in{" "}
            <b>MCP Servers</b>, <b>Agentic Workflows</b>, and{" "}
            <b>LLM Integration</b>.
          </p>
          <p className="mb-3">
            Operating remotely from the Sierras of Córdoba, Argentina.{" "}
            <b>High-Availability</b> & <b>Deep Focus</b> shape my work. When
            AFK, I embrace a low-tech, digital minimalist, outdoor enthusiast
            lifestyle.
          </p>
          <p>
            <b>Dark Mode</b> always <b>On</b>.
          </p>
        </article>
      </main>
    </>
  );
}
