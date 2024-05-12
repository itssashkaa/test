import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../../store.ts';
import { Country } from '../types/country.ts';


export const fetchCountryList = createAsyncThunk<
    Country[],
    void,
    { dispatch: AppDispatch; state: RootState; rejectValue: any }
>(
    'countries/fetchCountryList',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const resp = await axios.get<Country[]>(__BASE_URL__ + 'all', {
                params: {
                    fields: 'flags,name,capital',
                }
            })
            return resp.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
