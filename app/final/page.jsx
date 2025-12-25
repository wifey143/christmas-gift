export default function FinalPage() {
  return (
    <main style={styles.main}>
      <img
        src="/final.png"
        alt="With love"
        style={styles.image}
      />
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "95%",
    borderRadius: 18,
  },
};
