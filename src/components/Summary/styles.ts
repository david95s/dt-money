import styled from "styled-components";

export const ContainerSumary = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2rem;
  margin-top: -10rem;

  div{
    background-color:var(--shape);
    padding:1.5rem 2rem;
    border-radius:0.25rem;
    color:var(--text-title);

    header{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    strong{
      display:block;
      margin-top:1rem;
      font-size:2rem;
      line-height:3rem;
      font-weight:500;
    }

    &.hightlight-background{
      color:white;
      background-color:var(--green);
    }
  }

 
`
