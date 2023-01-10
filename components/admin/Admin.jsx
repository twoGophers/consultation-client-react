import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { showAdmin, showAdminPanel } from '../../store/slice/ModalSlice';

import AdminChange from './AdminChange';

export default function Admin() {
    //Redux
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.admin);
    const modalPanel = useSelector((state) => state.modal.adminPanel);

    //Variables
    const [ name, setName ] = useState(String);
    const [ nameValid, setNameValid ] = useState(false);
    const [ password, setPassword ] = useState(String);
    const [ passwordValid, setPasswordValid ] = useState(false);
    const [ showModalAdmin, setShowModalAdmin ] = useState(modal);
    const [ showModalAdminPanel, setShowModalAdminPanel ] = useState(modalPanel);
    const [ isValid, setIsValid ] = useState(true);

    //Validation form
    const handleAdminModal = (name, password) => {
        if( name === process.env.NEXT_PUBLIC_ADMIN_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ) {
            dispatch(showAdminPanel(true));
            dispatch(showAdmin(false));
            setName('');
            setPassword('');
        }
    };

    const cleanFormAdmin = () => {
        dispatch(showAdmin(false));
        setName('');
        setPassword('');
    }

    //Проверка на валидацию админа
    useEffect(() => {
        if( name === process.env.NEXT_PUBLIC_ADMIN_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ) {
            setIsValid(false);
        } else {
            setIsValid(true);
        };

        if(name === process.env.NEXT_PUBLIC_ADMIN_NAME) {
            setNameValid(true);
        } else if (name.length < 1) {
            setNameValid(false);
        }

        if(password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }

    }, [name, password]);

    useEffect(() => {
        setShowModalAdmin(modal);
        setShowModalAdminPanel(modalPanel);
    }, [modal, modalPanel]);

    return (
        <div className="admin">
            <div className="admin-show" onClick={() => dispatch(showAdmin(true))}></div>
            { showModalAdmin 
                ?  <div className="admin-form">
                        <div className="admin-form__content">
                            <CloseIcon className='admin-form__close' onClick={ cleanFormAdmin } />
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
            { showModalAdminPanel 
                ?   <AdminChange />
                :   true
            }
        </div>
    )
  }