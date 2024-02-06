export const CharacterDetailsEpisode = ({ episode }) => {
  return (
    <section className="details-episode">
      <div>
        <h3>Fecha primera aparición:</h3>
        <p>{episode?.air_date}</p>
      </div>
      <div>
        <h3>En el capítulo:</h3>
        <p>{episode?.name}</p>
      </div>
      <a href="#">Ver capítulo</a>
    </section>
  );
};
