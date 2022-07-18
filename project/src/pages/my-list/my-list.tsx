import Footer from '../../components/footer';
import Logo from '../../components/logo';
import SmallFilmCard from '../../components/small-film-card';
import UserBlock from '../../components/user-block';

const ListOfFilms = [
  { filmName: 'Fantastic Beasts: The Crimes of Grindelwald', imageUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Bohemian Rhapsody', imageUrl: 'img/bohemian-rhapsody.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Macbeth', imageUrl: 'img/macbeth.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Aviator', imageUrl: 'img/aviator.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'We need to talk about Kevin', imageUrl: 'img/we-need-to-talk-about-kevin.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'What We Do in the Shadows', imageUrl: 'img/what-we-do-in-the-shadows.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Revenant', imageUrl: 'img/revenant.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Johnny English', imageUrl: 'img/johnny-english.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Shutter Island', imageUrl: 'img/shutter-island.jpg', filmPageUrl: 'film-page.html' }
];

const listItems =
  ListOfFilms.map((item) =>
    <SmallFilmCard filmName={item.filmName} imageUrl={item.imageUrl} filmPageUrl={item.filmPageUrl} key={item.filmName} />
  );

function MyList(): JSX.Element {


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {listItems}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
