import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import React from "react";
export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      News Page
      <NewsList news={news} />
    </>
  );
}
