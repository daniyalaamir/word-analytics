import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "./constants";

export default function Container() {
  const [text, setText] = useState('')

  const stats = {
    numberOfWords: text.split(/\s/).filter(word => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length
  }

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  )
}
