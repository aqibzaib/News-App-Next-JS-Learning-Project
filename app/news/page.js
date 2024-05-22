import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";
export default function Page() {
  return (
    <>
      News Page
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
