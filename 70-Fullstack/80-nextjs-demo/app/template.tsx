import Link from "next/link";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link     
          suppressHydrationWarning
          href={`/`}
        >
          Home
        </Link>
        <Link
          suppressHydrationWarning
          href={`/01-simple`}
        >
          Simple
        </Link>
        <Link href={`/02-backend`}>
          Backend
        </Link>
        <Link href={`/03-streaming`}>
          Streaming
        </Link>
        <Link href={`/04-clock`}>Clock</Link>
      </nav>
      <nav>
        <Link href={`/05-counter`}>
          Counter
        </Link>
        <Link href={`/06-composition`}>
          Composition
        </Link>
        <Link href={`/07-dataflow`}>
          DataFlow
        </Link>
        <Link href={`/08-serveractions`}>
          ServerActions
        </Link>
        <Link href={`/09-form-hooks`}>
          Form Hooks
        </Link>
      </nav>
      <div id="main">{children}</div>
    </div>
  );
}
