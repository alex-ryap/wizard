import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { images } from '../utils';
import { FormEvent, useState } from 'react';
import { selectSubscription, setSecondStep } from '../store/slices/formSlice';
import { Subscriptions } from '../enums';
import { Subscription } from './Subscription';

export const SecondStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedSubscription = useAppSelector(selectSubscription);

  const [subscription, setSubscription] = useState(selectedSubscription);
  const [error, setError] = useState('');

  const bgStyles = {
    background: `url(${images[2]}) no-repeat center`,
    backgroundSize: 'cover',
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (subscription) {
      dispatch(setSecondStep(subscription));
      navigate('/step3');
    } else {
      setError('Please select any subscription');
    }
  };

  const handlerPrev = () => {
    navigate('/');
  };

  return (
    <div className="step">
      <div className="step__left" style={bgStyles}></div>
      <div className="step__form">
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form__title">Step 2: Select subscription</h2>
          <div className="form__content">
            <Subscription
              title="Free"
              isActive={subscription === Subscriptions.Free}
              onClick={() => setSubscription(Subscriptions.Free)}
            />
            <Subscription
              title="Every month"
              isActive={subscription === Subscriptions.everyMonths}
              onClick={() => setSubscription(Subscriptions.everyMonths)}
            />
            <Subscription
              title="Every year"
              isActive={subscription === Subscriptions.everyYears}
              onClick={() => setSubscription(Subscriptions.everyYears)}
            />
            <span className="form__error">{error}</span>
          </div>
          <div className="form__action">
            <button className="form__btn" onClick={handlerPrev}>
              Prev
            </button>
            <button className="form__btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
