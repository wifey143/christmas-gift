"use client";
import { useRouter } from "next/navigation";

export default function Page4() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <img
        src="/card.png"
        alt="Christmas Card"
        style={styles.image}
      />

      <button
        style={styles.button}
        onClick={() => router.push("/final")}
      >
        Next →
      </button>
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
    gap: 20,
  },
  image: {
    maxWidth: "90%",
    borderRadius: 16,
  },
  button: {
    padding: "12px 22px",
    borderRadius: 20,
    border: "none",
    background: "#facc15",
    fontSize: 16,
    cursor: "pointer",
  },
};
