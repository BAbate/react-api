import React from 'react'; 
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
export const Search: React.FC = () => {
    const [count, setCount] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const onInputChange = (event: any) => {
        setInputValue(event.target.value);
    };
    const setValue = () => {
        setCount(inputValue);
    };
    return (
        <div>
        <p>You searched for: {count}</p>
        <Form.Control placeholder="Enter Search Term" onChange={onInputChange} value={inputValue} />
        <Button onClick={setValue}>Set Value</Button>
        </div>
    );
    //string.concat(recipebuddyurl + count);
}