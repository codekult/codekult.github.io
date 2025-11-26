import Link from "next/link";

function NavListItem({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <li className="[&:not(:first-child)]:before:content-['·'] before:px-2">
      {children}
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <ul className="flex">
        <NavListItem>
          <Link href="/about">About</Link>
        </NavListItem>
        <NavListItem>
          <a href="https://www.linkedin.com/in/codekult/" target="_blank">
            LinkedIn
          </a>
        </NavListItem>
        <NavListItem>
          <a href="https://github.com/codekult" target="_blank">
            Github
          </a>
        </NavListItem>
        <NavListItem>
          <a href="mailto:codekult@gmail.com">Contact</a>
        </NavListItem>
        <NavListItem>
          <a href="/public/Diego_Calderon_Resume.pdf" download>
            Resume
          </a>
        </NavListItem>
      </ul>
    </nav>
  );
}
