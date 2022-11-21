import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

// warum wird hier destructured? Weil  was sind die page props??
function MyApp({ Component, pageProps }) {
  // [morningAnswers = React-"Variable", setMorningAnswers ist die Funktion, die diese Variable updatet.
  // Diese setFunktion rufe ich unten auf: setMorningAnswers((previousMorningAnswers) =>

  const [morningAnswers, setMorningAnswers] = useLocalStorage(
    // "morningAnswer" = mein Key im Lokal Storage Browser. Key ist gleich wie der Name von einem Array
    "morningAnswers",
    // initial State ist ein leeres Array, in das die
    // morningAnswers nach Eingabe im Formular gespeichert werden.
    []
  );

  // Funktion mit Parameter answer => form.elements.answer.value = Variable aus QuestionForm ?!
  function addMorningAnswer(answer) {
    // setMorningAnswers ist meine Funktion aus Zeile 8.
    // hier rufe ich die setFunktion auf. Hier kommt der neue state
    // mit den hinzugefügten Antworten rein => das Ergebnis dieser Funktion ist mein neuer Eingabetext
    // previous... = macht, dass die setFunktion immer auf dem aktuellsten Stand ist
    // previousMorningAnswers ist anonyme Funktion?
    // previousMorningAnswer ist das Argument beim Aufrufen der setFunktion
    // und steht als Variable für alle bisherigen Einträge
    setMorningAnswers((previousMorningAnswers) => [
      // hier spreade (...previousMorningAnswers) ich das bisherige Array,
      // sprich alle bisherigen Antworten (= array items) bleiben angezeigt und gespeichert
      ...previousMorningAnswers,
      // und ergänze es um ein neues array item/object, das eine browser-generierte id bekommt
      {
        id: crypto.randomUUID(),
        // und text ist meine const answer aus OuestionForm.js Zeile 10 ?!
        text: answer,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      {/* Component ist meine Home-Komponente = function Home aus index.js alle Komp. sind Funktionen */}
      <Component
        {...pageProps}
        // Props morningAnswers={...} + onAddMorningAnswer={...}, die ich von hier in die index.js Zeile 6 weitergebe
        morningAnswers={morningAnswers}
        // {addMorningAnswer} ist die Funktion Zeile 17
        onAddMorningAnswer={addMorningAnswer}
      />
    </>
  );
}

export default MyApp;
