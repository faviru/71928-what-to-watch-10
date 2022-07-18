import { SmallFilm } from '../types/types';

function SmallFilmCard({ filmName, imageUrl, filmPageUrl }: SmallFilm): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imageUrl} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={filmPageUrl}>{filmName}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
