import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";
export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  const news = await response.json();

  return (
    <>
      News Page
      <NewsList news={news} />
    </>
  );
}
