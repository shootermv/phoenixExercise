// src/features/jobExperiences/jobExperiencesSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
interface JobExperience {
  jobTitle: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  companyLogo: string;
}

interface JobExperiencesState {
  jobExperiences: JobExperience[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state using that type
const initialState: JobExperiencesState = {
  jobExperiences: [],
  status: 'idle',
  error: null,
};

// Define the async thunk to fetch job experiences data from the API using Axios
export const fetchJobExperiences = createAsyncThunk(
  'jobExperiences/fetchJobExperiences',
  async () => {
    const response = await axios.get(
      'https://mocki.io/v1/7fb3ae65-92d9-47fb-b168-e54142ee10e6',
    );

    return response.data.workExperiences as JobExperience[];
  },
);

// Create the slice
const jobExperiencesSlice = createSlice({
  name: 'jobExperiences',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobExperiences.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchJobExperiences.fulfilled,
        (state, action: PayloadAction<JobExperience[]>) => {
          state.status = 'succeeded';
          state.jobExperiences = action.payload;
        },
      )
      .addCase(fetchJobExperiences.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch job experiences';
      });
  },
});

export default jobExperiencesSlice.reducer;
