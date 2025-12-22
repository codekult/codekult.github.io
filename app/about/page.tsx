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
          <p className="mb-3 text-center">
            I&apos;m a <b>Product-minded Senior Software Engineer</b> focused on
            building systems that <b>ship faster</b> and <b>convert better</b>.
          </p>
          <p className="mb-3 text-center">
            I am a constant student of how things work and how they connect.
            <br />
            From the logic of distributed systems to the structure of an orchard
            or a Neofolk composition,
            <br />I approach every new challenge with curiosity and a commitment
            to craft.
          </p>
          <p className="mb-3 text-center">
            Operating remotely from the Sierras of Córdoba, Argentina.
          </p>
        </article>
      </main>
    </>
  );
}
