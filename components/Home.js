import React, {useState} from 'react';
import {Text} from 'react-native';
import Header from './Header.js';
import ListItems from './Listitems.js';

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

return (
    <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems 
            todos={todos}
            setTodos={setTodos}
        />
    </>
);

}

export default Home;