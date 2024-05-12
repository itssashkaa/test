import { StateSchema } from '../../store.ts';

export const getCountryDetails = (state: StateSchema) => state.countryDetails.data || undefined;
export const getCountryDetailsIsLoading = (state: StateSchema) => state.countryDetails.isLoading;
export const getCountryDetailsError = (state: StateSchema) => state.countries.error ?? '';