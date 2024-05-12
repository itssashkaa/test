import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../../store.ts';
import { Country } from '../types/country.ts';


export const fetchCountryDetails = createAsyncThunk<
    Country,
    string,
    { dispatch: AppDispatch; state: RootState; rejectValue: any }
>(
    'countries/fetchCountryDetails',
    async (name, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const resp = await axios.get<Country[]>(__BASE_URL__ + `name/${name}`, {
                params: {
                    fields: 'flags,name,capital,population,coatOfArms'
                }
            })
            return resp.data[0];
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
