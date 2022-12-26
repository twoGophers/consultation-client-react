import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../store/slice/ModalSlice';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import  { fetchApplication }  from '../../store/slice/ApplicationSlice';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';

export default function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.show);
    const [ showModalStatus, setShowModalStatus ] = useState(modal);
    const [ reqStatus, setReqStatus ] = useState(true);
    const [ switchModal, setSwitchModal ] = useState(false);
    const [ timeStatusModal, setTimeStatusModal ] = useState(1000);
    const { register, handleSubmit, reset, formState: { errors, isValid }} = useForm({
        defaultValues: {
          fullName: '',
          surName: '',
          email: '',
          phone: '',
          password: ''
        },
        mode: 'onChange',
      });

        
    const onSubmit = async (values) => {        
        const data = await dispatch(fetchApplication(values));
        console.log(data.meta.requestStatus);
        setReqStatus(false);
        setSwitchModal(<ModalSuccess/>);

        setTimeout(() => {
            dispatch(showModal(false));
            reset({
                fullName: '',
                surName: '',
                email: '',
                phone: '',
                password: ''
            })
        } ,timeStatusModal);

        setTimeout(() => {
            setReqStatus(true);
        }, timeStatusModal);

        if (!data.payload) {
            setSwitchModal(<ModalError/>);
            setTimeStatusModal(2000);
        }
    };

    useEffect(() => {
        setShowModalStatus(modal);
    }, [modal]);

    return (
        <div className={ showModalStatus ? 'modal active' : 'modal'} >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                { reqStatus  
                    ? <Paper className='modal__paper'>
                        <Typography  className='modal__typography' variant="h5">
                            Создание аккаунта
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
