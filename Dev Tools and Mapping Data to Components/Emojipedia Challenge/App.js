import Term from "./components/term";
import emojipedia from "./Emojipedia.js";
import "./styles.css";

function createCard(emojis) {
  return (
    <Term
      key={emojis.id}
      id={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>Emojipedia</span>
      </h1>

      {/* dl is a description list. Encloses a list of groups of terms */}
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}
