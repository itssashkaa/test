import Page from '../../../components/Page/Page.tsx';
import CountryList from '../../../components/CountryList/CountryList.tsx';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { fetchCountryList } from '../../../store/countries/services/fetchCountryList.ts';
import { getCountries, getError, getIsLoading } from '../../../store/countries/selectors/countries.ts';
import { Text } from '../../../components/Text/Text.tsx';
import cls from './CountryListPage.module.scss'

const CountryListPage = () => {
    const dispatch = useAppDispatch();
    const countries = useAppSelector(getCountries);
    const isLoading = useAppSelector(getIsLoading);
    const error = useAppSelector(getError);

    useEffect(() => {
        dispatch(fetchCountryList());
    }, [dispatch]);

    return (
        <Page>
            <Text
                className={cls.CountryListPage__text}
                text={'Список стран'}
                size={'L'}
                color={'inverted'}
                align={'center'}
            />
            <CountryList countries={countries} error={error} isLoading={isLoading} />
        </Page>
    );
};

export default CountryListPage;