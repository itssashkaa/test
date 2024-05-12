import { configureStore } from '@reduxjs/toolkit';
import { countriesPageReducer } from './countries/slices/CountryPageSlice.ts';
import { CountrySchema } from './countries/types/countrySchema.ts';
import { CountryDetailsSchema } from './countries/types/countryDetailsSchema.ts';
import { countriesDetailsPageReducer } from './countries/slices/CountryDetailsPageSlice.ts';

export interface StateSchema {
    countries: CountrySchema;
    countryDetails: CountryDetailsSchema;
}

export const store = configureStore<StateSchema>({
    reducer: {
        countries: countriesPageReducer,
        countryDetails: countriesDetailsPageReducer
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];