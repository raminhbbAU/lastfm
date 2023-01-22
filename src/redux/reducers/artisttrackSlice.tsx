import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

interface ArtistTrackState {
    list: any,
}
  
const initialState:ArtistTrackState = {
    list:undefined,
}

export const ArtistTrackSlice = createSlice({
    name:"ArtistTrack",
    initialState,
    reducers:{
        UpdateArtistTrack: (state,action) => {
            state.list = action.payload.ArtistTrack;
        },
        CleanArtistTrack: (state,action) => {
            state.list = undefined;
        }
    }
})

export const {UpdateArtistTrack,CleanArtistTrack} = ArtistTrackSlice.actions

export const selectArtistTrack = (state: RootState) => state.ArtistTrack

export default ArtistTrackSlice.reducer;