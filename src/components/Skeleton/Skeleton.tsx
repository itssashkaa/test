import { CSSProperties } from 'react';
import { classNames } from '../../helpers/classNames.ts';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

const Skeleton = (props: SkeletonProps) => {
    const {
        width,
        height,
        border,
        className,
    } = props;

    const styles:CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};

export default Skeleton;