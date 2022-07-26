import Main from '../../pages/main/main';
import { FilmCardInfo, SmallFilm, GenrePropsType } from '../../types/types';

type AppProps = {
  filmData: FilmCardInfo,
  list: SmallFilm[],
  listOfGenres: GenrePropsType[]
}

function App(props: AppProps): JSX.Element {
  return (
    <Main filmData={props.filmData} list={props.list} listOfGenres={props.listOfGenres} />
  );
}

export default App;
