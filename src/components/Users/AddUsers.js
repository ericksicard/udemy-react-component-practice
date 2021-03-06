import { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
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

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
        </Wrapper>
    );
};

export default AddUser;