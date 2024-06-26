import React from 'react';
import styles from './Form.module.scss'
import { combinedClassNames } from '@/shared/lib/helpers';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    title: string
    width?: string
}

export const Form: React.FC<FormProps> = ({
    children,
    title,
    onSubmit,
    width
}) => {
    const formClass = combinedClassNames(
        styles.form,
        styles[width as keyof typeof styles]
    );

    return (
        <form
            style={{ width }}
            className={formClass}
            onSubmit={onSubmit}>
            <h2>{title}</h2>
            {children}
        </form>
    );
};