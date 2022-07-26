import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const ListOfFilmsPreview = [
  { filmName: 'Fantastic Beasts: The Crimes of Grindelwald', imageUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Bohemian Rhapsody', imageUrl: 'img/bohemian-rhapsody.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Macbeth', imageUrl: 'img/macbeth.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Aviator', imageUrl: 'img/aviator.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'We need to talk about Kevin', imageUrl: 'img/we-need-to-talk-about-kevin.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'What We Do in the Shadows', imageUrl: 'img/what-we-do-in-the-shadows.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Revenant', imageUrl: 'img/revenant.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Johnny English', imageUrl: 'img/johnny-english.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Shutter Island', imageUrl: 'img/shutter-island.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Pulp Fiction', imageUrl: 'img/pulp-fiction.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'No Country for Old Men', imageUrl: 'img/no-country-for-old-men.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Snatch', imageUrl: 'img/snatch.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Moonrise Kingdom', imageUrl: 'img/moonrise-kingdom.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Seven Years in Tibet', imageUrl: 'img/seven-years-in-tibet.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Midnight Special', imageUrl: 'img/midnight-special.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'War of the Worlds', imageUrl: 'img/war-of-the-worlds.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Dardjeeling Limited', imageUrl: 'img/dardjeeling-limited.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Orlando', imageUrl: 'img/orlando.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Mindhunter', imageUrl: 'img/mindhunter.jpg', filmPageUrl: 'film-page.html' },
  { filmName: 'Midnight Special', imageUrl: 'img/midnight-special.jpg', filmPageUrl: 'film-page.html' },
];
const ListOfGenres = [
  { link: '#', name: 'All genres', active: true },
  { link: '#', name: 'Comedies', active: false },
  { link: '#', name: 'Crime', active: false },
  { link: '#', name: 'Documentary', active: false },
  { link: '#', name: 'Dramas', active: false },
  { link: '#', name: 'Horror', active: false },
  { link: '#', name: 'Kids & Family', active: false },
  { link: '#', name: 'Romance', active: false },
  { link: '#', name: 'Sci-Fi', active: false },
  { link: '#', name: 'Thrillers', active: false }
];

const СFilmData = {
  filmName: 'The Grand Budapest Hotel',
  bgImageUrl: 'img/bg-the-grand-budapest-hotel.jpg',
  posterUrl: 'img/the-grand-budapest-hotel-poster.jpg',
  filmGenre: 'Drama',
  release: 2014,
  myFilmCardCount: 9
};

root.render(
  <React.StrictMode>
    <App filmData={СFilmData} list={ListOfFilmsPreview} listOfGenres={ListOfGenres} />
  </React.StrictMode>,
);
