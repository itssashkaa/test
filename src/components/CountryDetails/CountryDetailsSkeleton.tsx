import Card from '../Card/Card.tsx';
import cls from './CountryDetails.module.scss'
import { memo } from 'react';
import Skeleton from '../Skeleton/Skeleton.tsx';


export const CountryDetailsSkeleton = memo(() => {

    return (
        <Card className={cls.CountryDetails}>
            <Skeleton width={300} height={250} border={'12px'}/>
            <div className={cls.CountryDetails__desc}>
                <Skeleton width={150} height={30}/>
                <Skeleton width={150} height={30}/>
                <Skeleton width={150} height={30}/>
            </div>
            <Skeleton width={300} height={250} border={'12px'}/>
        </Card>
    );
});
