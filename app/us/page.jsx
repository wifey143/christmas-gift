"use client";
import { useRouter } from "next/navigation";

export default function UsPage() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <img
        src="/us.png"
        alt="This is us"
        style={styles.image}
      />

      <h1 style={styles.text}>
        This Is Us ✨️<br />
        Isn’t Cute??
      </h1>

      <button
        style={styles.button}
        onClick={() => router.push("/final")}
      >
        Continue →
      </button>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    textAlign: "center",
  },
  image: {
    maxWidth: "85%",
    borderRadius: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  text: {
    fontSize: "2.8rem",
    lineHeight: 1.2,
    color: "#ffd1dc",
  },
  button: {
    marginTop: 10,
    padding: "12px 26px",
    borderRadius: 24,
    border: "none",
    background: "#f472b6",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  },
};
