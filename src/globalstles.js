import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Pattaya', sans-serif;
        

    }
     #root {
         
         background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
         height: 100vh;
         background-position: cover;
         background-size: cover;
         
         
     }
`
export const homeSty= styled.h1`

     font-size: 4rem;
     color: blue;
`