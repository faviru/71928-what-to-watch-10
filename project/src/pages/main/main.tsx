import SmallFilmCard from '../../components/small-film-card';
import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';
import { FilmCardInfo, SmallFilm } from '../../types/types';

type MainProps = {
  filmData: FilmCardInfo,
  list: SmallFilm[]
}

function MainPage(props: MainProps): JSX.Element {

  const listItems =
    props.list.map((item) =>
      <SmallFilmCard filmName={item.filmName} imageUrl={item.imageUrl} filmPageUrl={item.filmPageUrl} key={item.filmName} />
    );

  return (
    <>
      <FilmCard
        filmName={props.filmData.filmName}
        bgImageUrl={props.filmData.bgImageUrl}
        posterUrl={props.filmData.posterUrl}
        filmGenre={props.filmData.filmGenre}
        release={props.filmData.release}
        myFilmCardCount={props.filmData.myFilmCardCount}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            {/* <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li> */}
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {listItems}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
