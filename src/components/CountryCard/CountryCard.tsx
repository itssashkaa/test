import cls from './CountryCard.module.scss';
import Card from '../Card/Card.tsx';
import { Link } from 'react-router-dom';
import { RoutePath } from '../AppRouter/config/routerConfig.tsx';
import { Country } from '../../store/countries/types/country.ts';

interface CountryCardProps {
    country: Country;
}

const CountryCard = (props: CountryCardProps) => {
    const { country } = props;
    return (
        <Link to={RoutePath.countries_details + country.name.common}>
            <Card className={cls.CountryCard}>
                <img className={cls.CountryCard__img} src={country.flags.png} alt={country.flags.alt}/>
                <div className={cls.CountryCard__desc}>
                    <div className={cls.CountryCard__name}>{country.name.common} - {country.name.official}</div>
                    <div className={cls.CountryCard__capital}>Столица: {country.capital}</div>
                </div>
            </Card>
        </Link>
    );
};

export default CountryCard;