import Footer from "../components/Footer";

export default function Delete() {
  function handleClick() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <main>
      <p>Bist du sicher, dass du alles löschen möchtest?</p>
      <button onClick={handleClick}>Ja, alles löschen</button>
      <Footer />
    </main>
  );
}
