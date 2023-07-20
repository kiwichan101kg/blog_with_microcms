import { MicroCMSQueries, createClient } from "microcms-js-sdk";

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: "next-blog-101",
  apiKey: process.env.API_KEY,
});

export const getList = async () => {
  const response = await client.get({ endpoint: "blog" });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("取得", response.contents);

  return response.contents;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  console.log(contentId);

  const detailData = await client.getListDetail({
    endpoint: "blog",
    contentId,
    queries,
  });
  console.log("詳細", detailData);

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
