import { FormField, Button, Form } from '@/shared/ui/components';
import { Container } from '@/shared/ui/layout';
import React from 'react';
import styles from './Main.module.scss'

export const Main: React.FC = () => {
    const nums = [1, 2, 3]
    return (
        <div className={styles.main}>
            <Container centeredChildren>
                <Form
                    title='Форма'
                    width='400px'>
                    <FormField
                        fieldType='input'
                        title='Флекс'
                        name='flex'
                        value={''}
                        onChange={() => { }}
                        zodError=''
                    />
                    <FormField
                        fieldType='input'
                        title='Флекс'
                        name='flex'
                        value={''}
                        onChange={() => { }}
                        zodError=''
                    />
                    <FormField
                        fieldType='input'
                        title='Флекс'
                        name='flex'
                        value={''}
                        onChange={() => { }}
                        zodError=''
                    />
                    <FormField
                        fieldType='textarea'
                        title='Флекс'
                        name='flex'
                        value={''}
                        onChange={() => { }}
                        zodError=''
                    />
                    <FormField
                        fieldType='select'
                        title='Флекс'
                        name='flex'
                        value={''}
                        onChange={() => { }}
                        zodError=''
                        options={nums.map((num) => ({
                            value: num,
                            title: num
                        }))}
                        defaultOptionTitle='Хайп'
                    />
                    <Button
                        children='Хайп'
                        variant='default'
                        onClick={(e) => e.preventDefault()}
                    />
                </Form>
            </Container>
        </div>
    );
};
