import cls from './Card.module.scss';
import { ReactNode } from 'react';
import { classNames } from '../../helpers/classNames.ts';

interface CardProps {
    children?: ReactNode;
    className?: string;
}
const Card = ({children, className}: CardProps) => {
    return (
        <div className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
};

export default Card;