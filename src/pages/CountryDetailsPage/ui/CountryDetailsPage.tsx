import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import {
    getCountryDetails,
    getCountryDetailsError,
    getCountryDetailsIsLoading
} from '../../../store/countries/selectors/countryDetails.ts';
import Page from '../../../components/Page/Page.tsx';
import { CountryDetails } from '../../../components/CountryDetails/CountryDetails.tsx';
import { useEffect } from 'react';
import { fetchCountryDetails } from '../../../store/countries/services/fetchCountryDetails.ts';
import { useParams } from 'react-router-dom';

const CountryDetailsPage = () => {
    const country = useAppSelector(getCountryDetails);
    const isLoading = useAppSelector(getCountryDetailsIsLoading);
    const error = useAppSelector(getCountryDetailsError);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(fetchCountryDetails(id!));
    }, []);

    return (
        <Page>
            <CountryDetails country={country} isLoading={isLoading} error={error} />
        </Page>
    );
};

export default CountryDetailsPage;