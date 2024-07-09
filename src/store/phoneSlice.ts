import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PhoneState {
  phoneNumber: string;
  isModalVisible: boolean;
  errorMessage: string;
}

const initialState: PhoneState = {
  phoneNumber: '',
  isModalVisible: false,
  errorMessage: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setModalVisible(state, action: PayloadAction<boolean>) {
      state.isModalVisible = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    validatePhoneNumber(state) {
      const phoneRegex = /^\d{10}$/;
      if (phoneRegex.test(state.phoneNumber)) {
        state.errorMessage = '';
        state.isModalVisible = true;
      } else {
        state.errorMessage = 'Please enter a valid 10-digit phone number.';
      }
    },
  },
});

export const {
  setPhoneNumber,
  setModalVisible,
  setErrorMessage,
  validatePhoneNumber,
} = phoneSlice.actions;
export default phoneSlice.reducer;
