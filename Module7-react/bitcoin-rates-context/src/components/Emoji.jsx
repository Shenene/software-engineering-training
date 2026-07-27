import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";

// ----------------- //

function Emoji() {
  const { emoji, handleChangeMood } = useContext(EmojiContext);

  return (
    <div className="Emoji componentBox">
      <h3>Current Mood</h3>

      <p>{emoji}</p>

      <button type="button" onClick={handleChangeMood}>
        Change Mood
      </button>
    </div>
  );
}

// ----------------- //

export default Emoji;
