import { Box, CircularProgress, Grid, Pagination, Stack } from '@mui/material';
import react,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getArtistTopTrack } from '../../api/api';
import TrackCard from '../../components/trackcard/trackCard';
import { UpdateArtistTrack } from '../../redux/reducers/artisttrackSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/storehooks';
import { errorNotifyByErrorObject } from '../../services/toast.notification';


const Artist = () => {

    const myStore = useAppSelector((state) => state)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let { artistId } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setError] = useState(undefined);
    const [curPage,setCurPage] = useState(1);


    useEffect(()=>{
       loadArtistInfo();

    },[curPage])

    const loadArtistInfo = () => {

        getArtistTopTrack(artistId || "",curPage)
        .then((result:any) => {
            console.log(result.data.toptracks);
            dispatch(UpdateArtistTrack({ArtistTrack:result.data.toptracks}))
            setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
          errorNotifyByErrorObject(error,undefined,5000)
        })

    }

    const paginationHandleChange = (e:any, p:any) => {
        setCurPage(p);
    }

    return (
        <>
            
            {isLoading && (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
              >

                <Grid item xs={3}>
                  <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                    <CircularProgress />
                  </Box>
                </Grid>
              </Grid> 
            )}  

            {isError && (
                <div>error!</div>
            )} 


            {isLoading == false && isError === undefined && myStore.ArtistTrack.list !== undefined && (

                <Stack spacing={2}>

                    <Grid container spacing={1}>

                        {myStore.ArtistTrack.list && (
                            myStore.ArtistTrack.list.track.map((x: any) => {
                                return (
                                    <Grid item>
                                        <TrackCard info={x} />
                                    </Grid>
                                )
                            })
                        )}

                    </Grid>

                    <Pagination count={30} page={curPage} color="primary" onChange={paginationHandleChange} />
                </Stack>


            )} 


        
        </>
    )

}

export default Artist;