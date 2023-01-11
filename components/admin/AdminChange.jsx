import React, { useEffect, useState } from 'react';
import Margin from '../ui/margin/Margin';
import TitleBlock from '../ui/titleBlock/Titleblock';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useForm } from 'react-hook-form';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
let uniqid = require('uniqid');
import SuccessForm from '../ui/success/SuccessForm';

// socket
// import io from 'socket.io-client';
// const socket = io.connect("http://localhost:5000");


import { useDispatch, useSelector } from 'react-redux';
import { showAdminPanel } from '../../store/slice/ModalSlice';
import { postQuestionsHome } from '../../store/slice/QuestionSlice';

import axios from '../../axios';

export default function AdminChange() {
    const dispatch = useDispatch();
    const [ success, setSuccess ] = useState(false);
    const unickId = uniqid();
    const [ fetchQuest, setFetchQuest ] = useState();
    const [ titleQuestion, setTitleQuestion ] = useState();
    const [ content, setContent ] = useState();

    //Form send question home
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
      } = useForm({
        defaultValues: {
            title: '',
            question: '',
            panel: ''
        },
        mode: 'onChange',
      });
      

    //Send post question home
    const onSubmit = async (values) => {
        values.panel = unickId;
        const data = await dispatch(postQuestionsHome(values));

        if (!data.payload) {
            return alert('Не удалось авторизоваться!');
        }

        //Определение статуса отправки формы
        console.log(data.meta.requestStatus);

        //Reset form
        if(data.meta.requestStatus === "fulfilled") {
            setSuccess(true);
            fetchQuestion();
            reset({
                title: '',
                question: '',
                panel: ''
            });
            setTimeout(() => {
                setSuccess(false);
            }, 1000)
        }
    };

    //Update question
    const updateQuestion = async (item) => {
        const value = {
            title: titleQuestion,
            question: content,
        };
       
        const data = await axios.patch('/questions/home/' + item._id, value);

        if (data.status === 200) {
            fetchQuestion();
        }
    };

    //Delete question
    const deleteQuestion = async (item) => {
        const data = await axios.delete('/questions/home/' + item._id);

        if (data.status === 200) {
            fetchQuestion();
        }
    };

    //Получение вопросов на главной странице

    const fetchQuestion = async () => {
        try {
            const question = await axios.get('/questions/home');
            console.log(question.data);
            if(question.status === 200) {
                setFetchQuest(question.data);
            } 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <div className="admin-panel">
            {
                success 
                ? <SuccessForm />
                : true
            }
            <div className="admin-panel__content">
                <CloseIcon className='admin-form__close' onClick={() => dispatch(showAdminPanel(false))} />
                <Margin />
                <TitleBlock title={'Услуги'} />
                <div className="admin-services">
                    <div className="admin-services__db">
                        {
                            fetchQuest?.map( item => (
                                <div key={item._id} className="admin-services__db-item">
                                    <div className="admin-services__db-icon">
                                        <EditIcon className='admin-icon' color="disabled"  sx={{ fontSize: 30 }} onClick={() => updateQuestion(item)}  />
                                        <DeleteForeverIcon className='admin-icon' color="disabled"  sx={{ fontSize: 30 }} onClick={() => deleteQuestion(item)} />
                                    </div>
                                    <div className='change-form'>
                                        <h2>{ item.title }</h2>
                                        <input onChange={(e) => setTitleQuestion(e.target.value)} type="text" />
                                        <p>{ item.question }</p>
                                        <input onChange={(e) => setContent(e.target.value)} type="text" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <form className="admin-services__form" onSubmit={handleSubmit(onSubmit)}>
                        <h3>Добавить вопрос на главной странице</h3>
                        <TextField
                            error={Boolean(errors.title?.message)}
                            helperText={errors.title?.message}
                            {...register('title', { required: 'Укажите вопрос' })}
                            className="field"
                            label="Вопрос"
                            fullWidth
                            />
                        <TextareaAutosize 
                            placeholder='Укажите ответ на вопрос'
                            {...register('question', { required: 'Укажите ответ на вопрос' })}
                            className="field"
                            />
                        <button 
                            className='btn-admin-change' 
                            type="submit"
                        >Добавить актуальный вопрос на главной странице</button>
                    </form>
                    <img src={`http://localhost:5000/images/error.png`} alt="" srcset="" />
                    <img src={`https://consultation-server-react.vercel.app/images/success.png`} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}