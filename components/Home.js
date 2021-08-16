import React, {useState} from 'react';
import {Text} from 'react-native';
import Header from './Header.js';
import ListItems from './Listitems.js';
import InputModal from './InputModal';

const Home = () => {

    const initialTodos = [{
        title: "study for the exam",
        date: "Fri, 07 Ago 2021",
        key: "1"
    },
    {
        title: "Visit my mom",
        date: "Fri, 07 Ago 2021",
        key: "2"
    },
    {
        title: "Drink water",
        date: "Fri, 07 Ago 2021",
        key: "3"
    }]

    const [todos, setTodos] = useState(initialTodos);


    const handleClearTodos = () => {
        setTodos([]);
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

return (
    <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
        <InputModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
        />
    </>
);

}

export default Home;