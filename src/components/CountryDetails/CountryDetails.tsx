import Card from '../Card/Card.tsx';
import cls from './CountryDetails.module.scss'
import { memo } from 'react';
import { Text } from '../Text/Text.tsx';
import { Country } from '../../store/countries/types/country.ts';
import { CountryDetailsSkeleton } from './CountryDetailsSkeleton.tsx';

interface CountryDetailsProps {
    country: Country | undefined;
    isLoading?: boolean;
    error?: string;
}

export const CountryDetails = memo((props: CountryDetailsProps) => {
    const {
        country,
        isLoading,
        error,
    } = props;

    if (isLoading) {
        return <CountryDetailsSkeleton />
    }

    return (
        <Card className={cls.CountryDetails}>
            {country && (
                <>
                    <img className={cls.CountryDetails__img} src={country.flags.png} alt={country.flags.alt}/>
                    <div className={cls.CountryDetails__desc}>
                        <div className={cls.CountryDetails__desc_item}>Название: {country.name.common}</div>
                        <div className={cls.CountryDetails__desc_item}>Полное название: {country.name.official}</div>
                        <div className={cls.CountryDetails__desc_item}>Столица: {country.capital}</div>
                    </div>
                    <img
                        className={cls.CountryDetails__coatOfArms}
                        src={country.coatOfArms.png}
                        alt={country.flags.alt}
                    />
                </>

            )}
            {error && <Text text={'Произошла ошибка при загрузке данных'}/>}
        </Card>
    );
});
