import {useAppSelector} from '../hook/useAppSelector.ts';
import {useAppDispatch} from '../hook/useAppDispatch.ts';
import {setCity} from '../../store/action.ts';
import {AppRoute, Cities} from '../../const.ts';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


export default function CitiesList() {
  const currentCity = useAppSelector((state) => state.city);
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
            to={AppRoute.Root}
          >
            <span>{city}</span>
          </Link>

        </li>
      ))}

    </ul>
  );
}
