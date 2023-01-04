import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Admin() {

    const [ name, setName ] = useState<string>(String);
    const [ nameValid, setNameValid ] = useState<boolean>(false);
    const [ password, setPassword ] = useState<string>(String);
    const [ passwordValid, setPasswordValid ] = useState<boolean>(false);
    const [ showModalAdmin, setShowModalAdmin ] = useState<boolean>(false);
    const [ showModalAdminPanel, setShowModalAdminPanel ] = useState<boolean>(false);
    const [ isValid, setIsValid ] = useState<boolean>(true);

    const handleAdminModal = (name: any, password: any) => {
        if( name === process.env.NEXT_PUBLIC_ADMIN_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ) {
            setShowModalAdminPanel(true);
            setShowModalAdmin(false);
            setName('');
            setPassword('');
        }
    };

    useEffect(() => {
        if( name === process.env.NEXT_PUBLIC_ADMIN_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ) {
            setIsValid(false);
        } else {
            setIsValid(true);
        };

        if(name === process.env.NEXT_PUBLIC_ADMIN_NAME) {
            setNameValid(true);
        } else {
            setNameValid(false);
        }

        if(password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }

    }, [name, password]);

    return (
        <div className="admin">
            <div className="admin-show" onClick={ () => setShowModalAdmin(true)}></div>
            { showModalAdmin 
                ?  <div className="admin-form">
                        <div className="admin-form__content">
                            <CloseIcon className='admin-form__close' onClick={ () => setShowModalAdmin(false)} />
                            <h3>Вход в админку</h3>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Имя' name="" id="" />
                            {nameValid ? <p>Имя верное</p>: false } 
                            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Пароль' name="" id="" />
                            {passwordValid ? <p>Пароль верный</p>: false } 
                            <button className={isValid ? "btn-disabled" : "btn-active" } disabled={isValid} onClick={() => handleAdminModal(name, password)}>Войти</button>
                        </div>
                    </div>
                : true
            }
            {
                showModalAdminPanel 
                ?   <div className="admin-panel">
                        <div className="admin-panel__content">
                            <CloseIcon className='admin-form__close' onClick={ () => setShowModalAdminPanel(false)} />
                        </div>
                    </div>
                : true
            }
        </div>
    )
  }