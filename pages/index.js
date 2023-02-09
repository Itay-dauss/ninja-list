import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sint
          maiores omnis veniam praesentium, quasi earum error modi, blanditiis
          assumenda esse et vero consectetur optio cum nihil repudiandae?
          Impedit, molestias.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sint
          maiores omnis veniam praesentium, quasi earum error modi, blanditiis
          assumenda esse et vero consectetur optio cum nihil repudiandae?
          Impedit, molestias.
        </p>
        <Link className={styles.btn} href="/ninjas">
          See Ninjas Listing
        </Link>
      </div>
    </>
  );
}
