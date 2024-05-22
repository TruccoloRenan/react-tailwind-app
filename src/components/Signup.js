import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from "./FormAction";
import Input from "./Input";
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const Navigate = useNavigate();

    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount();
    }

    const createAccount = async () => {
        try {

            const username = signupState['usuario'];
            const email = signupState['endereco-email'];
            const password = signupState['confirme-senha'];

            await api.post("/users", { username, email, password }).then(
                (data) => {
                    if (data.status === 200) {
                        alert("conta criada com sucesso!")
                        Navigate("/")
                    } else {
                        console.log(data)
                        alert("erro ao criar a conta!")
                    }
                }
            );

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className=''>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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

                <FormAction text="Signup" type="Button" />
            </div>
        </form>
    )
}
