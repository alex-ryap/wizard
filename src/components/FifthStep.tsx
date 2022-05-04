import { useForm } from 'react-hook-form';
import { images } from '../utils';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import {
  selectConfirmCookie,
  selectConfirmPersonalData,
  selectLogin,
  selectName,
  setFifthStep,
} from '../store/slices/formSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const FifthStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const name = useAppSelector(selectName);
  const login = useAppSelector(selectLogin);
  const confirmPersonData = useAppSelector(selectConfirmPersonalData);
  const confirmCookie = useAppSelector(selectConfirmCookie);

  const validationSchema = yup.object().shape({
    confirmPersonData: yup
      .boolean()
      .oneOf([true], 'You must confirms to personal data'),
    confirmCookie: yup.boolean().oneOf([true], 'You must confirms use cookies'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      confirmPersonData,
      confirmCookie,
    },
  });

  const bgStyles = {
    background: `url(${images[3]}) no-repeat center`,
    backgroundSize: 'cover',
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(setFifthStep(data));
    navigate('/result');
  });

  const handlerPrev = () => {
    navigate('/step4');
  };

  return (
    <div className="step">
      <div className="step__left" style={bgStyles}></div>
      <div className="step__form">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form__title">
            Step 5: Confirming personal data processing
          </h2>
          <div className="form__content">
            <div className="form__item">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input className="form__input" id="name" value={name} disabled />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="login">
                Login
              </label>
              <input
                className="form__input"
                id="login"
                value={login}
                disabled
              />
            </div>
            <div className="form__item">
              <label
                htmlFor="confirmPersonData"
                className="form__label checkbox"
              >
                <input
                  id="confirmPersonData"
                  {...register('confirmPersonData')}
                  type={'checkbox'}
                />
                <span className="checkbox__title">
                  Consent to personal data processing
                </span>
              </label>
              <span className="form__error">
                {errors.confirmPersonData?.message}
              </span>
            </div>
            <div className="form__item">
              <label htmlFor="confirmCookie" className="form__label checkbox">
                <input
                  id="confirmCookie"
                  {...register('confirmCookie')}
                  type={'checkbox'}
                />
                <span className="checkbox__title">Consent to cookies</span>
              </label>
              <span className="form__error">
                {errors.confirmCookie?.message}
              </span>
            </div>
          </div>
          <div className="form__action">
            <button className="form__btn" onClick={handlerPrev}>
              Prev
            </button>
            <button disabled={!isValid} className="form__btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
