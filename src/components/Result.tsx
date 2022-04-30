import { useAppSelector } from '../store/hooks';
import {
  selectAdult,
  selectBirthday,
  selectCardNumber,
  selectConfirmCookie,
  selectConfirmPassword,
  selectConfirmPersonalData,
  selectEmail,
  selectGender,
  selectMidName,
  selectName,
  selectPassword,
  selectSubscription,
  selectSurname,
} from '../store/slices/formSlice';

export const Result = () => {
  const login = useAppSelector(selectName);
  const password = useAppSelector(selectPassword);
  const confirmPassword = useAppSelector(selectConfirmPassword);
  const subscription = useAppSelector(selectSubscription);
  const name = useAppSelector(selectName);
  const surname = useAppSelector(selectSurname);
  const midName = useAppSelector(selectMidName);
  const birthday = useAppSelector(selectBirthday);
  const email = useAppSelector(selectEmail);
  const adult = useAppSelector(selectAdult);
  const gender = useAppSelector(selectGender);
  const cardNumber = useAppSelector(selectCardNumber);
  const confirmPersonData = useAppSelector(selectConfirmPersonalData);
  const confirmCookie = useAppSelector(selectConfirmCookie);

  return (
    <div className="step step-full">
      <div className="step__form">
        <form className="form">
          <h2 className="form__title">Results</h2>
          <div className="form__content form__content-full">
            <div className="form__item">
              <label className="form__label" htmlFor="login">
                Login
              </label>
              <input
                className="form__input"
                id="login"
                value={login}
                disabled
                placeholder="Login"
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                disabled
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="confirmPassword">
                Repeat password
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                disabled
                value={confirmPassword}
                placeholder="Password"
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="subscription">
                Subscrtiption
              </label>
              <input
                className="form__input"
                id="subscription"
                disabled
                value={subscription}
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__input"
                id="name"
                placeholder="Name"
                disabled
                value={name}
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="surname">
                Surname
              </label>
              <input
                className="form__input"
                id="surname"
                placeholder="Surname"
                disabled
                value={surname}
              />
            </div>
            {midName && (
              <div className="form__item">
                <label className="form__label" htmlFor="midName">
                  Middle name
                </label>
                <input
                  className="form__input"
                  id="midName"
                  placeholder="Middle name"
                  disabled
                  value={midName}
                />
              </div>
            )}
            {birthday && (
              <div className="form__item">
                <label className="form__label" htmlFor="birthday">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form__input"
                  id="birthday"
                  disabled
                  value={birthday}
                />
              </div>
            )}
            <div className="form__item">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__input"
                id="email"
                placeholder="Email"
                disabled
                value={email}
              />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="gender">
                Gender
              </label>
              <input
                className="form__input"
                id="gender"
                placeholder="Gender"
                disabled
                value={gender}
              />
            </div>
            <div className="form__item">
              <label htmlFor="adult" className="form__label checkbox">
                <input id="adult" type="checkbox" checked={adult} readOnly />
                <span className="checkbox__title">I am adult (18+)</span>
              </label>
            </div>
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="cardNumber">
              Card number
            </label>
            <input
              className="form__input"
              id="cardNumber"
              disabled
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
            />
          </div>
          <div className="form__item">
            <label htmlFor="confirmPersonData" className="form__label checkbox">
              <input
                id="confirmPersonData"
                type="checkbox"
                checked={confirmPersonData}
                readOnly
              />
              <span className="checkbox__title">
                Consent to personal data processing
              </span>
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="confirmCookie" className="form__label checkbox">
              <input
                id="confirmCookie"
                type="checkbox"
                checked={confirmCookie}
                readOnly
              />
              <span className="checkbox__title">Consent to cookies</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
