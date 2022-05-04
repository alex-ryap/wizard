import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  selectConfirmPassword,
  selectLogin,
  selectPassword,
  setFirstStep,
} from '../store/slices/formSlice';
import { images } from '../utils';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const FirstStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);
  const confirmPassword = useAppSelector(selectConfirmPassword);

  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .required('Login is required')
      .matches(/^[a-z]+$/, 'Login must be in lowercase'),
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'Less than 5 characters')
      .matches(/[0-9]+/, 'Password must be contains minimum 1 number')
      .matches(/[A-Za-z]+/, 'Password must be contains minimum 1 character'),
    confirmPassword: yup
      .string()
      .required('This field is requered')
      .min(5, 'Less than 5 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      login,
      password,
      confirmPassword,
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setFirstStep(data));
    navigate('/step2');
  });

  const bgStyles = {
    background: `url(${images[0]}) no-repeat center`,
    backgroundSize: 'cover',
  };

  return (
    <div className="step">
      <div className="step__left" style={bgStyles}></div>
      <div className="step__form">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form__title">Step 1: Login / Password</h2>
          <div className="form__content">
            <div className="form__item">
              <label className="form__label" htmlFor="login">
                Login
              </label>
              <input
                className="form__input"
                id="login"
                placeholder="Login"
                {...register('login')}
              />
              <span className="form__error">{errors.login?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
                {...register('password')}
              />
              <span className="form__error">{errors.password?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="confirmPassword">
                Repeat password
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Password"
                {...register('confirmPassword')}
              />
              <span className="form__error">
                {errors.confirmPassword?.message}
              </span>
            </div>
          </div>
          <div className="form__action">
            <button disabled={!isValid} className="form__btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
