import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../store/slice/ModalSlice';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { fetchApplication }  from '../../store/slice/ApplicationSlice';
import { fetchChatBot } from '../../store/slice/TelegramSlice';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import Link from 'next/link';

export default function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.show);
    const [ showModalStatus, setShowModalStatus ] = useState(modal);
    const [ reqStatus, setReqStatus ] = useState(true);
    const [ statusCheckbox, setsStatusCheckbox ] = useState();
    const [ switchModal, setSwitchModal ] = useState(false);
    const [ timeStatusModal, setTimeStatusModal ] = useState(1000);
    const [ date, setDate] = useState(new Date());
    const { register, handleSubmit, reset, formState: { errors, isValid }} = useForm({
        defaultValues: {
          fullName: '',
          surName: '',
          email: '',
          phone: '',
          password: '',
          checkbox: false
        },
        mode: 'onChange',
      });
        
    const onSubmit = async (values) => {   

        values.checkbox = statusCheckbox;
        const data = await dispatch(fetchApplication(values));

        //Определение статуса отправки формы
        console.log(data.meta.requestStatus);

        //Отправка на бота инфо
        const userQuestionnaire = `Имя: ${values.fullName},         Фамилия: ${values.surName},          Емайл: ${values.email},          Телефон: ${values.phone},          Услуги: ${values.checkbox},          Время: ${date.toLocaleTimeString()},          Дата: ${date.toLocaleDateString()}`

        if(data.meta.requestStatus === 'fulfilled') {
            await dispatch(fetchChatBot(userQuestionnaire));
        } else {
            console.log('The bot died');
        }

        setReqStatus(false);
        setSwitchModal(<ModalSuccess/>);

        setTimeout(() => {
            dispatch(showModal(false));
            reset({
                fullName: '',
                surName: '',
                email: '',
                phone: '',
                password: '',
                checkbox: ''
            })
        } ,timeStatusModal);

        setTimeout(() => {
            setReqStatus(true);
        }, timeStatusModal);

        if (!data.payload) {
            try {
                setSwitchModal(<ModalError/>);
                setTimeStatusModal(2000);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        setShowModalStatus(modal);
    }, [modal]);

    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 );
        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <div className={ showModalStatus ? 'modal active' : 'modal'} >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                { reqStatus  
                    ? <Paper className='modal__paper'>
                        <Typography  className='modal__typography' variant="h5">
                            Отправить заявку
                        </Typography>
                        <CloseIcon className='modal__close' onClick={() => dispatch(showModal(false))} />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                            error={Boolean(errors.fullName?.message)}
                            helperText={errors.fullName?.message}
                            {...register('fullName', { required: 'Укажите имя' })}
                            className="field"
                            label="Имя"
                            fullWidth
                            />
                            <TextField
                            error={Boolean(errors.surName?.message)}
                            helperText={errors.surName?.message}
                            type="text"
                            {...register('surName', { required: 'Укажите фамилию' })}
                            className="field"
                            label="Фамилия"
                            fullWidth
                            />
                            <TextField
                            error={Boolean(errors.email?.message)}
                            helperText={errors.email?.message}
                            type="email"
                            {...register('email', { required: 'Укажите почту' })}
                            className="field"
                            label="E-Mail"
                            fullWidth
                            />
                            <TextField
                            error={Boolean(errors.phone?.message)}
                            helperText={errors.phone?.message}
                            type="tel"
                            {...register('phone', { required: 'Укажите телефон' })}
                            className="field"
                            label="Телефон"
                            fullWidth
                            />
                            <FormLabel id="demo-radio-buttons-group-label">Выберите вид услуги</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel onClick={(e) => setsStatusCheckbox(e.target.value)} value="consultation" control={<Radio />} label="Консультация" />
                                <FormControlLabel onClick={(e) => setsStatusCheckbox(e.target.value)} value="visa" control={<Radio />} label="Туристическая виза" />
                                <FormControlLabel onClick={(e) => setsStatusCheckbox(e.target.value)} value="DC160" control={<Radio />} label="Проверка DC 160" />
                                <FormControlLabel onClick={(e) => setsStatusCheckbox(e.target.value)} value="greencard" control={<Radio />} label="Грин карта" />
                                <FormControlLabel onClick={(e) => setsStatusCheckbox(e.target.value)} value="personal" control={<Radio />} label="Cоздание личного кабинета" />
                            </RadioGroup>
                            <div className='form-conditionality'>
                                <TextField
                                error={Boolean(errors.checkbox?.message)}
                                type="checkbox"
                                {...register('checkbox', { required: 'Укажите согласие' })}
                                className="field"
                                />
                                    согласны с политикой <Link href={'/conditionality/conditionality'}> кондефициальности</Link>
                            </div>
                            <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
                                Отправить заявку
                            </Button>
                        </form>
                        </Paper>
                    :  switchModal
                }
            </div>
        </div>
    )
}
