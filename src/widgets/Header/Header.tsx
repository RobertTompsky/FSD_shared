import React from 'react';
import styles from './Header.module.scss'
import { Container } from '@/shared/ui/layout';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_content}>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/about'}>О нас</Link>
                </div>
            </Container>
        </div>
    );
};
