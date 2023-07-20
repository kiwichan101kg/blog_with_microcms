import Link from "next/link";
import { client, getList } from "../../../libs/client";

export default async function Home() {
  const contents = await getList();
  console.log("contents", contents);

  return (
    <div className="p-2 text-lg">
      {contents &&
        contents.map((blog: any) => (
          <li
            key={blog.id}
            className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 hover:text-sky-700 hover:cursor-pointer"
          >
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
    </div>
  );
}
