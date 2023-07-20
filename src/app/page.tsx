import Link from "next/link";
import { client, getList } from "../../libs/client";

export default async function Home() {
  return (
    <div className="p-2 text-lg">
      <Link href={"/blog"}>blog</Link>
    </div>
  );
}
