import React, {useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from "../../redux/store/storehooks";
import { login,logout } from "../../redux/reducers/authSlice";
import { sucessNotify } from '../../services/toast.notification';
import { Box, CircularProgress, Grid } from '@mui/material';


const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
   

    useEffect( () => {
        setTimeout( () => {
            doLogin();
        },1000)
    },[])

    const doLogin = () => {

        // for mocking purposes it's a unreal login which happen automatically

        const mockLoginData = {
            loginType:"user",
            userId:1,
            userTitle:"raminhbb"
        }


        // navigate to dashboard page and dispatch login in redux store
        dispatch(login(mockLoginData))
        navigate("/panel/dashboard");
        sucessNotify(`Welcome ${mockLoginData.userTitle}`) 
        
    }

    return (
       <>
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
                        <span>Keep calm mate! you are connecting to the website soon</span>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>

            </Grid> 
       </>
    );
};

export default Login
