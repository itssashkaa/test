import { StateSchema } from '../../store.ts';

export const getCountries = (state: StateSchema) => state.countries.data || [];
export const getIsLoading = (state: StateSchema) => state.countries.isLoading;
export const getError = (state: StateSchema) => state.countries.error ?? '';