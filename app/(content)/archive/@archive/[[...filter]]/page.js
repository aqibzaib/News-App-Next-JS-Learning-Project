import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";

import Link from "next/link";
import React from "react";

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const newsYear = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  let newsContent = <p>No News Found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // if (
  //   (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
  //   (selectedMonth && getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  // ) {
  //   throw new Error("Invalid filter.");
  // }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
