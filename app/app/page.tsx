import styles from "./page.module.css";

const highlights = [
  {
    title: "Start the Conversation",
    description:
      "Send a quick hello and let the dialogue unfold with a gentle, friendly tone that feels personal.",
  },
  {
    title: "Share Your Mood",
    description:
      "Pick a vibe to match your day. The page adapts with subtle visuals that mirror the feeling you choose.",
  },
  {
    title: "Keep It Simple",
    description:
      "A minimal layout keeps the focus on what matters most: a warm greeting and room for whatever comes next.",
  },
];

const moods = [
  { label: "Calm", value: "calm" },
  { label: "Bright", value: "bright" },
  { label: "Dreamy", value: "dreamy" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.glow} aria-hidden />
          <p className={styles.tagline}>Hey there, welcome in.</p>
          <h1 className={styles.title}>Hi, glad you&apos;re here.</h1>
          <p className={styles.subtitle}>
            Nothing complicated—just a cozy spot to kick things off with a quick
            hello and a little spark of connection.
          </p>
          <form className={styles.form} aria-label="Share a greeting">
            <label className={styles.label} htmlFor="greeting">
              Your greeting
            </label>
            <div className={styles.inputRow}>
              <input
                id="greeting"
                name="greeting"
                placeholder="Hi there! 👋"
                className={styles.input}
                autoComplete="off"
              />
              <button type="button" className={styles.button}>
                Send
              </button>
            </div>
            <fieldset className={styles.moodPicker}>
              <legend className={styles.legend}>Match the mood</legend>
              <div className={styles.moods}>
                {moods.map((mood) => (
                  <label key={mood.value} className={styles.mood}>
                    <input
                      type="radio"
                      id={mood.value}
                      name="mood"
                      value={mood.value}
                      defaultChecked={mood.value === "calm"}
                    />
                    <span>{mood.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>
        </section>

        <section className={styles.highlights} aria-label="Highlights">
          {highlights.map((highlight) => (
            <article key={highlight.title} className={styles.card}>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
