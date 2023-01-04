import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { showAdmin, showAdminPanel } from '../../store/slice/ModalSlice';

import AdminChange from './AdminChange';

export default function Admin() {
    //Redux
    const dispatch = useAppDispatch();
    const modal = useAppSelector((state) => state.modal.admin);
    const modalPanel = useAppSelector((state) => state.modal.adminPanel);

    //Variables
    const [ name, setName ] = useState<string>(String);
    const [ nameValid, setNameValid ] = useState<boolean>(false);
    const [ password, setPassword ] = useState<string>(String);
    const [ passwordValid, setPasswordValid ] = useState<boolean>(false);
    const [ showModalAdmin, setShowModalAdmin ] = useState<boolean>(modal);
    const [ showModalAdminPanel, setShowModalAdminPanel ] = useState<boolean>(modalPanel);
    const [ isValid, setIsValid ] = useState<boolean>(true);

    //Validation form
    const handleAdminModal = (name: any, password: any) => {
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