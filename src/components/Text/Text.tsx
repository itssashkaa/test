import { classNames } from '../../helpers/classNames.ts';
import cls from './Text.module.scss'
import { memo } from 'react';

type TextSize = 'S' | 'L' | 'M';
type TextColor = 'main' | 'accent' | 'inverted';
type TextAlign = 'center' | 'start' | 'end;'
export interface TextProps {
    size?: TextSize;
    color?: TextColor;
    text: string;
    align?: TextAlign;
    className?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        size = 'M',
        color = 'main',
        text,
        align = 'start',
        className = '',
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [cls[size], cls[color], cls[align], className])}>
            {text}
        </div>
    );
});
