import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountrySchema } from '../types/countrySchema.ts';
import { fetchCountryList } from '../services/fetchCountryList.ts';

import { Country } from '../types/country.ts';

const initialState: CountrySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const countriesPageSlice = createSlice({
    name: 'countriesPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCountryList.fulfilled,
                (
                    state,
                    action: PayloadAction<Country[]>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchCountryList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: countriesPageActions } = countriesPageSlice;
export const { reducer: countriesPageReducer } = countriesPageSlice;
