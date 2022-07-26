import { GenrePropsType } from '../types/types';

function GenreListItem({ ...props }: GenrePropsType): JSX.Element {
  const ElementClassName = `catalog__genres-item " ${props.active ? 'catalog__genres-item--active' : ''}`;
  return (
    <li className={ElementClassName}>
      <a href={props.link} className="catalog__genres-link">{props.name}</a>
    </li>
  );
}

export default GenreListItem;
