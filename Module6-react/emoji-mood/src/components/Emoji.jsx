import { useState } from "react";

// ----------------- //

function Emoji() {
  const [emoji, setEmoji] = useState("😺");

  function handleChangeMood() {
    setEmoji(emoji === "😺" ? "😼" : "😺");
  }

  return (
    <section className="emoji">
      <h1>Current Mood</h1>
      <p className="emoji-symbol">{emoji}</p>
      <button type="button" onClick={handleChangeMood}>
        Change Mood
      </button>
    </section>
  );
}

// ----------------- //

export default Emoji;
