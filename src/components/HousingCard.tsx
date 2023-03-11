import { Housing } from "../types/housing";
import "../style/housingCard.scss";
import { Link } from "react-router-dom";

interface IHousingCard {
  housing: Housing;
}

function HousingCard(props: IHousingCard) {
  const { housing } = props;
  return (
    <Link className="housing-card" to="">
      <article>
        <img src={housing.cover} alt={housing.title} />
        <h2>{housing.title}</h2>
      </article>
    </Link>
  );
}

export default HousingCard;
