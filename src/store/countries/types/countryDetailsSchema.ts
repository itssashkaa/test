import { Country } from './country.ts';

export interface CountryDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Country;
}