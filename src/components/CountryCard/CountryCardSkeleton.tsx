import cls from './CountryCard.module.scss';
import Card from '../Card/Card.tsx';
import Skeleton from '../Skeleton/Skeleton.tsx';
import { memo } from 'react';

export const CountryCardSkeleton = memo(() => {
    return (
        <Card className={cls.CountryCard}>
            <Skeleton width={330} height={200} border={'12px'}/>
            <div className={cls.CountryCard__desc}>
                <Skeleton width={330} height={40} />
                <Skeleton width={150} height={20} />
            </div>
        </Card>
    );
});

