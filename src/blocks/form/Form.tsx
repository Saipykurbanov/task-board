import React from 'react';
import Input from '../../components/input/Input';
import useForm from './hooks/useForm';
import Button from '../../components/button/Button';
import './css/form.css';
import TextArea from '../../components/textarea/TextArea';
import Cross from './components/Cross';


const Form = () => {

    const hook = useForm()

    if(!hook.open) return null

    return (
        <div className={`form_wrapper`}>
            <div className="form" ref={hook.formRef} onMouseDown={(e: any) => e.stopPropagation()}>
                <Cross callback={hook.close}/>
                <Input 
                    value={hook.inputs.title}
                    change={(e: any) => hook.change(e, 'title')}
                    label='Заголовок'
                    placeholder='Введите заголовок'
                />
                <TextArea 
                    value={hook.inputs.description}
                    change={(e: any) => hook.change(e, 'description')}
                    label='Описание'
                    placeholder='Введите описание'
                />
                <Button callback={hook.save}>Добавить</Button>
            </div>
        </div>
    );
};

export default Form;
