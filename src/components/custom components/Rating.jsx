import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function rating() {
  return (
    <div className="review-wrapper">
      <div className="stars">
        <FontAwesomeIcon className="star" icon="fa-solid fa-star" size="lg" />
        <FontAwesomeIcon className="star" icon="fa-solid fa-star" size="lg" />
        <FontAwesomeIcon className="star" icon="fa-solid fa-star" size="lg" />
        <FontAwesomeIcon className="star" icon="fa-solid fa-star" size="lg" />
        <FontAwesomeIcon className="star" icon="fa-solid fa-star" size="lg" />
      </div>
      <div className="review-text">
        “In amet turpis eget donec bibendum sit congue cras. Fusce parturient
        pulvinar non a nulla dictum sit facilisi aliquet. Posuere tortor egestas
        orci vel. Ut nulla amet eget habitasse donec urna est iaculis tellus.
        Vitae morbi lorem suscipit fermentum et.”
      </div>
      <div className="review-giver">
        <div className="name">
          <div className="credits">Craig Craigford, Store Owner</div>
        </div>
        <div className="date">
          <div className="credits">June 2023</div>
        </div>
      </div>
    </div>
  );
}
