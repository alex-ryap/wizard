import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  selectAdult,
  selectBirthday,
  selectEmail,
  selectGender,
  selectMidName,
  selectName,
  selectSurname,
  setThirdStep,
} from '../store/slices/formSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Gender } from '../enums';

interface IStep {
  name: string;
  surname: string;
  midName?: string;
  email: string;
  birthday?: string;
  gender: Gender;
  adult: boolean;
}

export const ThirdStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const name = useAppSelector(selectName);
  const surname = useAppSelector(selectSurname);
  const midName = useAppSelector(selectMidName);
  const email = useAppSelector(selectEmail);
  const birthday = useAppSelector(selectBirthday);
  const gender = useAppSelector(selectGender);
  const adult = useAppSelector(selectAdult);

  const validationScheme = yup.object().shape({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    midName: yup.string(),
    email: yup.string().required('Email is required').email('Invalid email'),
    gender: yup.string().required(),
    adult: yup.boolean().oneOf([true], 'You must confirms that you are adult'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationScheme),
    defaultValues: {
      name,
      surname,
      midName,
      birthday,
      email,
      gender,
      adult,
    },
  });

  const onSubmit = (data: IStep) => {
    dispatch(setThirdStep(data));
    navigate('/step4');
  };

  const handlerPrev = () => {
    navigate('/step2');
  };

  return (
    <div className="step step-full">
      <div className="step__form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form__title">Step 3: Personal data</h2>
          <div className="form__content form__content-full">
            <div className="form__item">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__input"
                id="name"
                placeholder="Name"
                {...register('name')}
              />
              <span className="form__error">{errors.name?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="surname">
                Surname
              </label>
              <input
                className="form__input"
                id="surname"
                placeholder="Surname"
                {...register('surname')}
              />
              <span className="form__error">{errors.surname?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="midName">
                Middle name
              </label>
              <input
                className="form__input"
                id="midName"
                placeholder="Middle name"
                {...register('midName')}
              />
              <span className="form__error">{errors.midName?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="birthday">
                Birthday
              </label>
              <input
                type="date"
                className="form__input"
                id="birthday"
                {...register('birthday')}
              />
              <span className="form__error">{errors.birthday?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__input"
                id="email"
                placeholder="Email"
                {...register('email')}
              />
              <span className="form__error">{errors.email?.message}</span>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="male">
                Gender
              </label>
              <select
                className="form__input form__select"
                {...register('gender')}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              <span className="form__error">{errors.gender?.message}</span>
            </div>
            <div className="form__item">
              <label htmlFor="adult" className="form__label checkbox">
                <input id="adult" {...register('adult')} type={'checkbox'} />
                <span className="checkbox__title">I am adult (18+)</span>
              </label>
              <span className="form__error">{errors.adult?.message}</span>
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
