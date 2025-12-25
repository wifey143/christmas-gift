"use client";
import { useRouter } from "next/navigation";

export default function Page2() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>You’ve got mail 💌</h1>

      <div
        style={styles.envelope}
        onClick={() => router.push("/message")}
      >
        ✉️
      </div>

      <p style={styles.text}>Tap the envelope</p>
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
  },
  title: {
    marginBottom: 30,
    fontSize: "2.2rem",
  },
 envelope: {
  fontSize: "10rem",   // 👈 bigger size
  cursor: "pointer",
  transition: "transform 0.3s ease",
  animation: "bounce 1.5s infinite",
},
  envelopeHover: {
  transform: "scale(1.1)",
},
  text: {
    marginTop: 20,
    opacity: 0.8,
  },
};
