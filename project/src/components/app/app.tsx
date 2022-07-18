import Main from '../../pages/main/main';
import { FilmCardInfo, SmallFilm } from '../../types/types';

type AppProps = {
  filmData: FilmCardInfo,
  list: SmallFilm[]
}

function App(props: AppProps): JSX.Element {
  return (
    <Main filmData={props.filmData} list={props.list} />
  );
}

export default App;
