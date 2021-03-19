import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#f8f2f5;
    --red:#E52E4D;
    --red-light: #d46073;
    --blue:#5429CC;
    --green:#33cc95;
    --blue-light:#6933FF;
    --text-title:#363F5F;
    --text-body: #969CB3;
    --shape:#FFFFFF;
  }
  
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight:400;  
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight:600;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size:93.75%;
    }

    @media (max-width: 720px){
      font-size:87.5%;
    }
  }

  body{
    background:var(--background);
    -webkit-font-smoothing:antialiased;
  }

  button{
    cursor:pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background-color:rgba(0,0,0, 0.5);
  
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
  }

  .react-modal-content{
    width:98%;
    max-width:576px;

    background-color:var(--background);
    padding:3rem;

    position:relative;
    top:-40px;
    outline:0;

    border-radius:0.24rem;
  }

  .btn-react-modal-close{
    height:0;
    position:absolute;
    top:1.5rem;
    right:1.5rem;

    border:0;
    background-color:transparent;
    transition:filter 0.2s;

    &:hover{
      filter:brightness(0.4);
    }

    img{
      height:0.9rem;
    }
  }

  .modal-to-delete{
    width:500px;
    background-color:var(--background);
    padding:40px;
    border:none;
    outline:0;
    position: relative;
    top:-80px;
    border-radius:3px;
    h1{
      color:var(--text-title);
      font-weight:500;
      margin-bottom:20px;
    }

    div.wrapperbtnsdelete{
      display:flex;
      justify-content:space-between;      

      button{
        width:200px;
        color:white;
        padding:10px 0;
        border-radius:3px;
        &:first-child{
          background-color:var(--red);
          border:solid 1px var(--red);
        }
        &:last-child{
          background-color:var(--green);
          border:solid 1px var(--green);
        }
        &:hover{
          filter:brightness(0.9);
        }
      }
    }

  
  }

`
