import React from "react";

export default function NewsDetailsLayout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
