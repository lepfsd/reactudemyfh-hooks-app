import React, {useEffect} from 'react';
import { useForm } from '../../hooks/useForm';
import './efects.css';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect( () => {
        console.log('email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>  
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="mail@mail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*********"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">guardar</button>
        </form>
    );
}