import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background-color:var(--blue);
`;

export const WrapperHeader = styled.div`
  max-width: 1120px;
  margin:0 auto;

  padding:2rem 1rem 12rem; //rem sempre em comparação com font-size do root

  display:flex;
  align-items:center;
  justify-content:space-between;

  button{
    font-size:1rem;
    color:#FFF;
    background-color:var(--blue-light);
    border:0;
    padding:0 2rem;
    border-radius:0.25rem;
    height:3rem;

    transition:filter 0.2s;

    &:hover{
      filter:brightness(1.1);
    }

    &:active{
    
    }
  }

  .withoutransaction{
    box-shadow: 0 0 0 2px transparent, 0 0 2px 2px white;
    animation:anime 1.2s infinite linear;
  }   

  @keyframes anime{ 
    to{
      box-shadow: 0 0 3px 4px #ccc, 0 0 2px 5px gold;
    }
  }
`

