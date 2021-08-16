import React from 'react';
import {Modal} from 'react-native';
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors
} from './../styles/appStyles';
import {AntDesign} from '@expo/vector-icons';

const InputModal = ({modalVisible, setModalvisible, todoInputValue, setTodoInputValue}) => {
   
  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleSubmit = () => {

  }

  return (
      <>
        <ModalButton onPress={() => {setModalVisible(true)}}>
            <AntDesign name='plus' size={30} color={colors.secondary}/>
        </ModalButton>

        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
        >
            <ModalContainer>
             <ModalIcon>
                <AntDesign name= 'edit' size={30} color={colors.tertiary}/>
             </ModalIcon>

             <StyledInput
                placeholder='Add a task'
                placeholderTextColor={colors.alternative}
                selectionColor={colors.secondary}
                autoFocus={true}
                onChangeText={(text) => setTodoInputValue(text)}
                value={todoInputValue}
                onSubmitEditing={handleSubmit}
             />
            </ModalContainer>
        </Modal>
     </>
    );
}

export default InputModal;