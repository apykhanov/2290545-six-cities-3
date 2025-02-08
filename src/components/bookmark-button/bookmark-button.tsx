import { MouseEvent } from 'react';
import { OfferPreview } from '../../types/offer.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hook/use-app-selector.tsx';
import { getIsAuth } from '../../store/user-process/selector.ts';
import { AppRoute } from '../../const.ts';
import { addFavorite, deleteFavorite } from '../../store/api-actions.ts';
import classNames from 'classnames';

type BookmarkButtonImageSize = 'small' | 'large';

type BookmarkButtonProps = {
  id: OfferPreview['id'];
  isActive: boolean;
  block: string;
  size?: BookmarkButtonImageSize;
};

const sizeMap: Record<BookmarkButtonImageSize, { width: string; height: string }> = {
  small: { width: '18', height: '19' },
  large: { width: '31', height: '33' },
};

export function BookmarkButton({ id, isActive, block, size = 'small' }: BookmarkButtonProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useAppSelector(getIsAuth);

  const handleButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }

    if (isActive) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button
      className={classNames(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isActive && isAuth,
      })}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} {...sizeMap[size]} />
      <use xlinkHref="#icon-bookmark"></use>
      <span className="visually-hidden">
        {isActive && isAuth ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
