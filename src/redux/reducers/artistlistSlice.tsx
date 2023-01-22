import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

interface ArtistListState {
    list: any,
}
  
const initialState:ArtistListState = {
    list:undefined,
}

export const ArtistListSlice = createSlice({
    name:"ArtistList",
    initialState,
    reducers:{
        UpdateArtistList: (state,action) => {
            state.list = action.payload.ArtistList;
        },
        CleanArtistList: (state,action) => {
            state.list = undefined;
        }
    }
})

export const {UpdateArtistList,CleanArtistList} = ArtistListSlice.actions

export const selectArtistList = (state: RootState) => state.ArtistList

export default ArtistListSlice.reducer;