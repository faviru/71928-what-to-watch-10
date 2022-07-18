import Footer from '../../components/footer';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';
import SmallFilmCard from '../../components/small-film-card';
import { FilmCardInfo, SmallFilm } from '../../types/types';

const ListOfFilms: SmallFilm[] = [
  { filmName: 'Fantastic Beasts: The Crimes of Grindelwald', imageUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Bohemian Rhapsody', imageUrl: 'img/bohemian-rhapsody.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Macbeth', imageUrl: 'img/macbeth.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Aviator', imageUrl: 'img/aviator.jpg', filmPageUrl: 'film-page.html' }
];

const СFilmData: FilmCardInfo = {
  filmName: 'The Grand Budapest Hotel',
  bgImageUrl: 'img/bg-the-grand-budapest-hotel.jpg',
  posterUrl: 'img/the-grand-budapest-hotel-poster.jpg',
  filmGenre: 'Drama',
  release: 2014,
  myFilmCardCount: 9
};

const MovieDetails = {
  director: 'Wes Anderson',
  starring: ['Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
    'Tony Revoloru',
    'Tilda Swinton',
    'Tom Wilkinson',
    'Owen Wilkinson',
    'Adrien Brody',
    'Ralph Fiennes',
    'Jeff Goldblum'],
  runTime: '1h 39m',
  genre: 'Drama',
  release: 2014
};

const listItems =
  ListOfFilms.map((item) =>
    <SmallFilmCard filmName={item.filmName} imageUrl={item.imageUrl} filmPageUrl={item.filmPageUrl} key={item.filmName} />
  );

function MyList(): JSX.Element {

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={СFilmData.bgImageUrl} alt={СFilmData.filmName} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{СFilmData.filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{СFilmData.filmGenre}</span>
                <span className="film-card__year">{СFilmData.release}</span>
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
                  <span className="film-card__count">{СFilmData.myFilmCardCount}</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={СFilmData.filmName} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{MovieDetails.director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {MovieDetails.starring.map((item) =>
                        item + <br />
                      )}
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">{MovieDetails.runTime}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{MovieDetails.genre}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{MovieDetails.release}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {listItems}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
