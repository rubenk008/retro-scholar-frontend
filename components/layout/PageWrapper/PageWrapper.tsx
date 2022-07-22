import React, { useState } from "react";

import Link from "next/link";
import Navbar from "../Navbar";

const PageWrapper = ({ children }) => {
  const [drawerState, setDrawerState] = useState("open");

  const links = [
    { name: "topics", href: "https://www.google.com" },
    { name: "quizes", href: "https://www.google.com" },
  ];

  const onButtonClick = () => {
    if (drawerState === "closed") {
      setDrawerState("open");
    }
  };

  return (
    <div>
      <Navbar links={links} />

      <main>{children}</main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 18px;
          background: var(--bay-of-many);
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: #1565c0;
        }
        main {
          padding: 0.5rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          padding: 0;
          margin: 0;
        }
        .huge {
          padding: 3rem;
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
};

export default PageWrapper;
