import { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from "./FormAction"
import FormExtra from "./FormExtra";
import Input from './Input';
import { login } from '../services/auth';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const Navigate = useNavigate()

    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {

        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginState)
        authenticateUser();
    }

    const authenticateUser = async () => {
        try {

            const email = loginState['endereco-email']
            const password = loginState['senha']

            const response = await api.post("/sessions", { email, password});
            login(response.data.token)
            
            Navigate("/app");

        } catch (error) {
            console.error('Account creation error:', error);
        }
    };

    return (
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-px'>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
            </div>

            <FormExtra />
            <FormAction text="Login" type="Button" />

        </form>
    )
}
