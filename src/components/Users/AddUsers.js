import { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = props => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }
    
    const ageeChangeHandler = event => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                    id='username' 
                    type='text' 
                    value={enteredUserName} 
                    onChange={usernameChangeHandler} 
                />
                <label htmlFor='age'>Age (Years)</label>
                
                <input 
                    id='age' 
                    type='number' 
                    value={enteredAge} 
                    onChange={ageeChangeHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;