import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCountryDetails } from '../services/fetchCountryDetails.ts';
import { CountryDetailsSchema } from '../types/countryDetailsSchema.ts';
import { Country } from '../types/country.ts';

const initialState: CountryDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const countriesDetailsPageSlice = createSlice({
    name: 'countriesDetailsPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryDetails.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCountryDetails.fulfilled,
                (
                    state,
                    action: PayloadAction<Country>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchCountryDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: countriesDetailsPageActions } = countriesDetailsPageSlice;
export const { reducer: countriesDetailsPageReducer } = countriesDetailsPageSlice;
