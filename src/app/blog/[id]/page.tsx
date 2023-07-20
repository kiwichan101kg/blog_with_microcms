import { client, getDetail } from "../../../../libs/client";

// urlのidはpropsのparamsに含まれる
type Props = { params: { id: string } };

export default async function Detail({ params: { id } }: Props) {
  const blog = await getDetail(id);
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    </main>
  );
}

// SSG
export async function generateStaticParams() {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => ({ id: `${content.id}` }));
  console.log("パス", paths);

  return paths;
}
