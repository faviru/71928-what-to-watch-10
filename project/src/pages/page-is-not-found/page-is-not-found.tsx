import Logo from '../../components/logo';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">

        <div className="sign-in__message">
          <p>Страница не найдена.</p>
          <Link to="/">Вернуться на главную страницу.</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page404;
