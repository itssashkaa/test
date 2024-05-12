import cls from './Page.module.scss';
import { ReactNode } from 'react';
import { classNames } from '../../helpers/classNames.ts';

interface PageProps {
    children: ReactNode;
    className?: string;
}

const Page = (props: PageProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.Page, {}, [className])}>
            {children}
        </div>
    );
};

export default Page;