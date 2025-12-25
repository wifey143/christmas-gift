"use client";
import { useRouter } from "next/navigation";

export default function Page1() {
  const router = useRouter();

  const startMusic = () => {
    const audio = new Audio("/bg.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play();

    // store music so it continues
    window.bgMusic = audio;

    router.push("/note");
  };

  return (
    <main style={styles.main}>
      <h3 style={styles.small}>A Little Christmas Thought… 🎄</h3>
      <h1 style={styles.title}>Heyy Youu 🫵🏻</h1>

      <div style={styles.card}>
        <p>
          I wanted to do something this Christmass..
          because you mean a lot to me !!
        </p>

        <button style={styles.button} onClick={startMusic}>
          Open Your Gift →
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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  small: { color: "#ff9fb5" },
  title: { fontSize: "3rem", marginBottom: 20 },
  card: {
    background: "rgba(0,0,0,0.4)",
    padding: 30,
    borderRadius: 16,
    maxWidth: 320,
  },
  button: {
    marginTop: 20,
    padding: "12px 20px",
    background: "#e11d48",
    border: "none",
    borderRadius: 20,
    color: "white",
    cursor: "pointer",
    fontSize: 16,
  },
};
