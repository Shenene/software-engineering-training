import { createContext, useState } from "react";

export const EmojiContext = createContext(null);
export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState("😺");

  function handleChangeMood() {
    setEmoji((currentEmoji) => {
      return currentEmoji === "😺" ? "😼" : "😺";
    });
  }

  const contextValue = {
    emoji,
    handleChangeMood,
  };

  return <EmojiContext.Provider value={contextValue}>{children}</EmojiContext.Provider>;
}
