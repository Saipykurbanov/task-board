import React from 'react';
import Input from '../../components/input/Input';
import TextArea from '../../components/textarea/TextArea';
import Button from '../../components/button/Button';
import './css/detial.css';
import useDetail from './hooks/useDetail';
import CheckBox from '../../components/checkbox/CheckBox';
import Cross from './components/Cross';


const Detail = () => {

    const hook = useDetail()

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
                <CheckBox 
                    label='Выполнен'
                    value={hook.inputs.completed}
                    change={hook.checked}
                />
                <Button callback={hook.save}>Сохранить</Button>
                <Button mode='red' callback={hook.deleteTask}>Удалить</Button>
            </div>
        </div>
    );
};

export default Detail;