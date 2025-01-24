import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch} from '../../hook/use-app-dispatch.tsx';
import {useNavigate} from 'react-router-dom';
import {loginAction} from '../../store/api-actions.ts';
import {AppRoute} from '../../const.ts';
import {toast} from 'react-toastify';
import {getLoginRequestLoading} from '../../store/user-process/selector.ts';
import {useAppSelector} from '../../hook/use-app-selector.tsx';


export default function Login() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isLoading = useAppSelector(getLoginRequestLoading);
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  function validatePassword() {
    const re = /^(?=.*[a-zA-Z])(?=.*\d).{2,}$/;
    return re.test(password);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!validatePassword) {
      toast.warn('Пароль должен содержать хотя бы одну букву и одну цифру.');
      return;
    }

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value.trim()
      }));
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            onSubmit={handleSubmit}
            className="login__form form"
            action="#"
            method="post"
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
              disabled={isLoading}
              onClick={() => navigate(AppRoute.Root)}
            >
              {isLoading ? 'Loading...' : 'Sign in'}
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

