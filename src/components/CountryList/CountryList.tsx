import CountryCard from '../CountryCard/CountryCard.tsx';
import cls from './CountryList.module.scss';
import { Country } from '../../store/countries/types/country.ts';
import { CountryCardSkeleton } from '../CountryCard/CountryCardSkeleton.tsx';

interface CountryListProps {
    countries: Country[];
    isLoading?: boolean,
    error?: string;
}

const getSkeletons = () => (
    new Array(9)
        .fill(0)
        .map((_, index) => (
            <CountryCardSkeleton
                key={index}
            />
        ))
);

const CountryList = (props: CountryListProps) => {
    const {
        countries,
        isLoading,
        error,
    } = props;

    return (
        <div className={cls.CountryList}>
            {countries.map(country => (
                <CountryCard country={country} key={country.name.common}/>
            ))}
            {error && <div>Произошла ошибка - {error}</div>}
            {isLoading && getSkeletons()}
        </div>
    );
};

export default CountryList;