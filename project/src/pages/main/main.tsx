import SmallFilmCard from '../../components/small-film-card';
import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';
import GenreListItem from '../../components/genres-list-item';
import { FilmCardInfo, SmallFilm, GenrePropsType } from '../../types/types';

type MainProps = {
  filmData: FilmCardInfo,
  listOfGenres: GenrePropsType[],
  list: SmallFilm[]
}

function MainPage(props: MainProps): JSX.Element {

  const listItems =
    props.list.map((item) =>
      <SmallFilmCard filmName={item.filmName} imageUrl={item.imageUrl} filmPageUrl={item.filmPageUrl} key={item.filmName} />
    );
  const GenresList =
    props.listOfGenres.map((item) =>
      <GenreListItem name={item.name} link={item.link} active={item.active} key={item.name} />
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
            {GenresList}
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
