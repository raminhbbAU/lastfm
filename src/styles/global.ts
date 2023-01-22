import styled,{ createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #f1f2f2; //#f0f0ed;// #fffef9;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    select,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        
        :focus-within {
            background: none;
            box-shadow: #f0da13 0px 0px 0px 1px;
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #5a5959;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #5a5959;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #5a5959;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) 
        {
            font-size: 28px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) 
        {
            font-size: 32px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) 
        {
            font-size: 46px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) 
        {
            font-size: 56px;
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) 
        {
            font-size: 56px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) 
        {
            font-size: 13px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) 
        {
            font-size: 16px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) 
        {
            font-size: 18px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) 
        {
            font-size: 21px;
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) 
        {
            font-size: 21px;
        }
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #f0da13;
        }
    }
    
    *:focus {
        outline: none;
    }

`;
