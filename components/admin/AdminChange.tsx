import React, { useEffect, useState } from 'react';
import Margin from '../ui/margin/Margin';
import TitleBlock from '../ui/titleBlock/Titleblock';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useAppDispatch } from '../../store/hooks';
import { showAdminPanel } from '../../store/slice/ModalSlice';
import { postQuestionsHome } from '../../store/slice/QuestionSlice';

import { question_block } from '../../api/question-block/question_block.json';

export default function AdminChange() {
    const dispatch = useAppDispatch();
    const [ questionTitleH, setQuestionTitleH ] = useState<any>();
    const [ questionContentH, setQuestioncontentH ] = useState<any>();

    const sendQuestionHome = async (e: any) => {
        e.preventDefault();

        const value = {
            title: questionTitleH,
            question: questionContentH
        };

        try {
            await dispatch(postQuestionsHome(value));
        } catch (error) {
            console.log("Не оправился вопрос в базу, file AdminChange");
        }
        
    };

    return (
        <div className="admin-panel">
            <div className="admin-panel__content">
                <CloseIcon className='admin-form__close' onClick={() => dispatch(showAdminPanel(false))} />
                <Margin />
                <TitleBlock title={'Услуги'} />
                <div className="admin-services">
                    <div className="admin-services__db">
                        {
                            question_block.map( item => (
                                <div key={item.id} className="admin-services__db-item">
                                    <div className="admin-services__db-icon">
                                        <EditIcon className='admin-icon' color="disabled"  sx={{ fontSize: 30 }}  />
                                        <DeleteForeverIcon className='admin-icon' color="disabled"  sx={{ fontSize: 30 }}  />
                                    </div>
                                    <h2>{ item.title }</h2>
                                    <p>{ item.question }</p>
                                </div>
                            ))
                        }
                    </div>
                    <form className="admin-services__form" >
                        <h3>Добавить вопрос на главной странице</h3>
                        <input 
                            onChange={(e) => setQuestionTitleH(e.target.value)} 
                            type="text" 
                            placeholder='Название' 
                            name="" 
                            id="" />
                        <textarea 
                            onChange={(e) => setQuestioncontentH(e.target.value)} 
                            placeholder='Текст' 
                            name="" 
                            id="" />
                        <button 
                            onClick={(e) => sendQuestionHome(e)}
                            className='btn-admin-change' 
                            type="submit"
                        >Добавить актуальный вопрос на главной странице</button>
                    </form>
                </div>
            </div>
        </div>
    )
}