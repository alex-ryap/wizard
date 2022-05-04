import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCardNumber, setFourthStep } from '../store/slices/formSlice';
import { images } from '../utils';

export const FourthStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedCardNumber = useAppSelector(selectCardNumber);

  const [isValid, setIsValid] = useState(false);
  const [cardNumber, setCardNumber] = useState(selectedCardNumber);

  const bgStyles = {
    background: `url(${images[2]}) no-repeat center`,
    backgroundSize: 'cover',
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setFourthStep(cardNumber));
    navigate('/step5');
  };

  const normalizeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value =
      value
        .replace(/\D/g, '')
        .match(/.{1,4}/g)
        ?.join(' ')
        .substr(0, 19) || '';

    setCardNumber(value);
    if (value.length === 19) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlerPrev = () => {
    navigate('/step3');
  };

  return (
    <div className="step">
      <div className="step__left" style={bgStyles}></div>
      <div className="step__form">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form__title">Step 4: Card Details</h2>
          <div className="form__content">
            <div className="form__item">
              <label className="form__label" htmlFor="cardNumber">
                Card number
              </label>
              <input
                className="form__input form__input-number"
                id="cardNumber"
                type="tel"
                autoComplete="cc-number"
                maxLength={19}
                placeholder="0000 0000 0000 0000"
                onChange={(e) => normalizeCardNumber(e)}
                value={cardNumber}
              />
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
