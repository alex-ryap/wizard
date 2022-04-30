import { createSlice } from '@reduxjs/toolkit';
import { Gender, Subscriptions } from '../../enums';
import { RootState } from '../store';

export interface FormState {
  login: string;
  password: string;
  confirmPassword: string;
  subscription: Subscriptions;
  name: string;
  surname: string;
  midName: string;
  birthday: string;
  email: string;
  gender: Gender;
  adult: boolean;
  cardNumber: string;
  confirmPersonData: boolean;
  confirmCookie: boolean;
}

const initialState: FormState = {
  login: '',
  password: '',
  confirmPassword: '',
  subscription: Subscriptions.Free,
  name: '',
  surname: '',
  midName: '',
  birthday: '',
  email: '',
  gender: Gender.Male,
  adult: false,
  cardNumber: '',
  confirmPersonData: false,
  confirmCookie: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstStep: (state, action) => {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
    setSecondStep: (state, action) => {
      state.subscription = action.payload;
    },
    setThirdStep: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.midName = action.payload.midName;
      state.email = action.payload.email;
      state.birthday = action.payload.birthday;
      state.gender = action.payload.gender;
      state.adult = action.payload.adult;
    },
    setFourthStep: (state, action) => {
      state.cardNumber = action.payload;
    },
    setFifthStep: (state, action) => {
      state.confirmPersonData = action.payload.confirmPersonData;
      state.confirmCookie = action.payload.confirmCookie;
    },
  },
});

export const selectLogin = (state: RootState) => state.login;
export const selectPassword = (state: RootState) => state.password;
export const selectConfirmPassword = (state: RootState) =>
  state.confirmPassword;
export const selectSubscription = (state: RootState) => state.subscription;
export const selectName = (state: RootState) => state.name;
export const selectSurname = (state: RootState) => state.surname;
export const selectMidName = (state: RootState) => state.midName;
export const selectBirthday = (state: RootState) => state.birthday;
export const selectEmail = (state: RootState) => state.email;
export const selectGender = (state: RootState) => state.gender;
export const selectAdult = (state: RootState) => state.adult;
export const selectCardNumber = (state: RootState) => state.cardNumber;
export const selectConfirmPersonalData = (state: RootState) =>
  state.confirmPersonData;
export const selectConfirmCookie = (state: RootState) => state.confirmCookie;

export const {
  setFirstStep,
  setSecondStep,
  setThirdStep,
  setFourthStep,
  setFifthStep,
} = formSlice.actions;

export default formSlice.reducer;
