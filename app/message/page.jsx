"use client";
import { useRouter } from "next/navigation";

export default function Page3() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <h1 style={styles.name}>Miss Harshita ✨️</h1>

      <div style={styles.card}>
        <p>
          This little message is just to remind you
          how special you are.
        </p>
        <p style={{ marginTop: 12 }}>
          Keep smiling, okay? 🌸
        </p>

        <button
          style={styles.button}
          onClick={() => router.push("/card")}
        >
          Continue →
        </button>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  name: {
    fontSize: "2.8rem",
    marginBottom: 20,
    color: "#ffd1dc",
  },
  card: {
    background: "rgba(0,0,0,0.4)",
    padding: 30,
    borderRadius: 16,
    maxWidth: 340,
  },
  button: {
    marginTop: 25,
    padding: "12px 22px",
    borderRadius: 22,
    border: "none",
    background: "#22c55e",
    color: "#000",
    fontSize: 16,
    cursor: "pointer",
  },
};
