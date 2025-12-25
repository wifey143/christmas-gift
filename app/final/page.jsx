"use client";
import { useRouter } from "next/navigation";

export default function FinalPage() {
  const router = useRouter();

  const goBackHome = () => {
    // stop music if playing
    if (window.bgMusic) {
      window.bgMusic.pause();
      window.bgMusic.currentTime = 0;
      window.bgMusic = null;
    }

    router.push("/");
  };

  return (
    <main style={styles.main}>
      <img
        src="/final.png"
        alt="With love"
        style={styles.image}
      />

      <button style={styles.button} onClick={goBackHome}>
        ⟵ Return to Start
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
    maxWidth: "95%",
    borderRadius: 18,
  },
  button: {
    marginTop: 10,
    padding: "12px 24px",
    borderRadius: 25,
    border: "none",
    background: "#ec4899",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  },
};
