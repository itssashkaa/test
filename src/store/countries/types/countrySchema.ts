import { Country } from './country.ts';

export interface CountrySchema {
    isLoading: boolean;
    error?: string;
    data?: Country[];
}