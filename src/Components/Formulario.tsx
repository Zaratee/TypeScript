import React from 'react'
import { useState } from 'react';

export const Formulario = () => {

    const [form, setForm] = useState({
        mail: 'example@gmail.com',
        password: 'example123'
    })

    const onChange = (campo: string, valor: string) => {
        setForm({
            ...form,
            [campo]: valor
        });
    }

    return (
        <>
            <h2>Formulario</h2>
            <input
                type="text"
                className='form-control'
                placeholder='email'
                value={form.mail}
                onChange={({ target }) => onChange("mail", target.value)}
            />
            <input
                type="text"
                className='form-control'
                placeholder='password'
                value={form.password}
                onChange={({ target }) => onChange("password", target.value)}
            />

            <code>
                <pre>{JSON.stringify(form, null, 2)}</pre>
            </code>
        </>
    )
}
