import cliffImage from "../assets/images/cliff.png";
import HousingCard from "../components/HousingCard";
import useHousings from "../hooks/useHousings";
import "../style/home.scss";

/**
 * Home page view
 */
function HomePage() {
  const { housings, loading, error } = useHousings();
  return (
    <main>
      <div className="page-topper">
        <img src={cliffImage} alt="Falaises en arrière plan" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      {error && <h3>Une erreur est survenue...</h3>}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {housings.length ? (
            <section className="cards-container">
              {housings.map((housing) => (
                <HousingCard housing={housing} />
              ))}
            </section>
          ) : (
            <p>Aucun résultat.</p>
          )}
        </>
      )}
    </main>
  );
}

export default HomePage;
