import styled from "styled-components";

export const TransactionsTBContainer = styled.div`
  margin-top:4rem;

  table{
    width:100%;
    border-spacing:0 0.5rem;

    th{
      color:var(--text-body);
      font-weight:400;
      padding:1rem 2rem;
      text-align:left;
      line-height:1.5rem;
    }

    td{
      padding:1rem 2rem;
      border:0;
      background-color:var(--shape);
      color:var(--text-body);
      border-radius:0.25rem;

      &:first-child{
        color:var(--text-title);
      }

      &.deposit{
        color:var(--green);
      }
      &.withdraw{
        color:var(--red);
      }

      button{
        background-color:transparent;
        border:solid 1px transparent;
        border-radius:3px;
        padding:3px;
        width:30px;
        position:relative;
        top:3px;
        left:10px;
      }

      button:hover{
        border:solid 1px black;
        background-color:rgba(10,10,10,0.2);
      }

      button img {
        display:block;
        width:100%;
      }
    }


  }
`