import react,{useState,useEffect} from 'react';
import { alpha, Box, CircularProgress, Container, Grid, InputBase, Pagination, Stack, styled } from "@mui/material";
import Lastfm from "../../components/lastfm";
import { useAppDispatch, useAppSelector } from "../../redux/store/storehooks";
import { getTopArtistsByCountry } from '../../api/api';
import { UpdateArtistList } from '../../redux/reducers/artistlistSlice';
import { errorNotifyByErrorObject } from '../../services/toast.notification';
import SearchIcon from '@mui/icons-material/Search';
import ArtistCard from '../../components/artistcard/artistCard';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })); 

const Dashboard = () => {

    const myStore = useAppSelector((state) => state)
    const dispatch = useAppDispatch();
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setError] = useState(undefined);
    const [country,setCountry] = useState("Australia");
    const [curPage,setCurPage] = useState(1);

    
    useEffect(()=>{
        loadArtists();
    },[curPage,country])


    const loadArtists = () => {

        setIsLoading(true)
        setError(undefined)

        getTopArtistsByCountry(country,curPage)
        .then((result:any) => {
            console.log(result.data.topartists);
            dispatch(UpdateArtistList({ArtistList:result.data.topartists}))
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

    const searchHandler = (e:any) => {
        setCountry(e.target.value);
    }

    return (
        <Container fixed>

        <Box mt={2}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={country}
              onChange = {searchHandler}
            />
          </Search>
        </Box>


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

            {isLoading == false && isError === undefined && myStore.ArtistList.list !== undefined && (
                
                <Stack spacing={2}>

                    <Grid container spacing={1}>
            
                        {myStore.ArtistList.list && (
                            myStore.ArtistList.list.artist.map((x: any) => {
                                return (
                                    <Grid item>     
                                        <ArtistCard info={x}/>
                                    </Grid>
                                )
                            }) 
                        )}

                    </Grid>

                    <Pagination count={30} page={curPage} color="primary" onChange={paginationHandleChange}/>
                </Stack>


            )} 

        </Container>
    );
};

export default Dashboard