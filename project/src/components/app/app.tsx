import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Page404 from '../../pages/page-is-not-found/page-is-not-found';
import ScrollToTop from '../../components/scroll-to-top';
import PrivateRoute from './private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FilmCardInfo, SmallFilm, GenrePropsType } from '../../types/types';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

type AppProps = {
  filmData: FilmCardInfo,
  list: SmallFilm[],
  listOfGenres: GenrePropsType[]
}

function App(props: AppProps): JSX.Element {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Main filmData={props.filmData} list={props.list} listOfGenres={props.listOfGenres} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.MoviePage} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
