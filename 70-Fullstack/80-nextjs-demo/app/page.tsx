import Image from "next/image";
import { Home } from "@/app/Home";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return <Home />;
}
