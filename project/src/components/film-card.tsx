import Logo from '../components/logo';
import { FilmCardInfo } from '../types/types';
import UserBlock from '../components/user-block';


function FilmCard({ ...props }: FilmCardInfo): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.bgImageUrl} alt={props.filmName} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={props.posterUrl} alt={props.filmName} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{props.filmName}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{props.filmGenre}</span>
              <span className="film-card__year">{props.release}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">{props.myFilmCardCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
