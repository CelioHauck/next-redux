import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function Character({ data }) {
  const { name, image, gender, location, origin, species, status } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.profile}>
          <div className={styles["profile-image"]}>
            <img src={image} alt={name} />
          </div>
          <div className={styles["profile-details"]}>
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> {name}
              </li>
              <li>
                <strong>Status:</strong> {status}
              </li>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Species:</strong> {species}
              </li>
              <li>
                <strong>Location:</strong> {location?.name}
              </li>
              <li>
                <strong>Originally From:</strong> {origin?.name}
              </li>
            </ul>
          </div>
        </div>
      </main>

      <p className={styles.back}>
        <Link href="/">
          <a>Back to All Characters</a>
        </Link>
      </p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
