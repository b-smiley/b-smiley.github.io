import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/posts">
            Blog Posts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A blog about software, mechanical engineering, and other topics."
    >
      <HomepageHeader />
      <main>
        <div
          className="welcome"
          style={{ textAlign: "center", padding: "50px" }}
        >
          <h1>Welcome to Smiley's Blog!</h1>
          <p>
            This blog is a place for me to share my thoughts on software,
            mechanical engineering, and other topics. I hope you find it
            interesting and informative!
          </p>
        </div>
      </main>
    </Layout>
  );
}
