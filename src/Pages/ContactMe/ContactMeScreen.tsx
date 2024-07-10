import React from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store';
import {
  setPhoneNumber,
  setModalVisible,
  validatePhoneNumber,
} from '../../store/phoneSlice';

const ContactMeScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const phoneNumber = useSelector(
    (state: RootState) => state.phone.phoneNumber,
  );

  const isModalVisible = useSelector(
    (state: RootState) => state.phone.isModalVisible,
  );

  const errorMessage = useSelector(
    (state: RootState) => state.phone.errorMessage,
  );

  const handleSubmit = () => {
    dispatch(validatePhoneNumber());
  };

  const closeModal = () => {
    dispatch(setModalVisible(false));
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-5 bg-slate-950`}>
      <Text style={tw`text-xl text-white font-bold mb-5`}>
        Enter your phone number
      </Text>
      <TextInput
        style={tw`border border-gray-400 rounded p-2 w-full mb-2`}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={text => dispatch(setPhoneNumber(text))}
      />
      {errorMessage ? (
        <Text style={tw`text-red-500 mb-5`}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={tw`bg-blue-500 p-4 rounded-lg`}
        onPress={handleSubmit}>
        <Text style={tw`text-white text-center`}>Submit</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}>
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-10 rounded-lg shadow`}>
            <Text style={tw`text-lg mb-5`}>Thanks for contacting me!</Text>
            <Text style={tw`text-base mb-5`}>Will ping you soon!</Text>
            <TouchableOpacity
              style={tw`bg-blue-500 p-4 rounded-lg`}
              onPress={closeModal}>
              <Text style={tw`text-white text-center`}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactMeScreen;
