import {useAppDispatch} from '../hook/useAppDispatch.ts';
import {setCity} from '../../store/action.ts';
import {Cities} from '../../const.ts';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

type CitiesListProps = {
  currentCity: string;
}

export default function CitiesList({currentCity}: CitiesListProps) {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(setCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <li
          key={city}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <Link
            className={classNames('locations__item-link', 'tabs__item', {
              'tabs__item--active': currentCity === city,
            })}
            to="#"
          >
            <span>{city}</span>
          </Link>

        </li>
      ))}

    </ul>
  );
}
