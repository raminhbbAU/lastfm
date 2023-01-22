import { configureStore } from '@reduxjs/toolkit'
import {authSlice,ArtistListSlice,ArtistTrackSlice} from '../reducers';

const store =  configureStore({
    reducer: {
        auth: authSlice,
        ArtistList: ArtistListSlice,
        ArtistTrack: ArtistTrackSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;