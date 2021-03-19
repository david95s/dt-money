import React, { FormEvent } from "react";
import { TransactionsTBContainer } from "./styles";
import {TransactionContext} from '../Contextos/TransactionsContext';

import deleteImg from '../../assets/trash.svg';

interface openDeleteTransationModalProps{
  openDeleteModal: (id:string)=> void;
}

export function TransactionsTable({openDeleteModal}:openDeleteTransationModalProps){

  const {transaction} = React.useContext(TransactionContext);
  
  function deleteTransaction({currentTarget}:FormEvent){
    const dataAtributo = currentTarget.getAttribute('data-atributo')
    if(dataAtributo){
      openDeleteModal(dataAtributo);
    }
  }

  return(
    <div>
      <TransactionsTBContainer>
        <table>
          <thead>
            <tr>
              <th className="title">Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
          {transaction &&(
            transaction.map((item, index)=>(
              <tr key={item.hash}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                  }).format(item.amount)}
                </td>
                <td> {item.category}</td>
                <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(item.createAt)
                )}
                </td>
                <td>
                  <button data-atributo={item.hash} onClick={deleteTransaction} className="delete">
                    <img src={deleteImg} alt="Deletar uma transação"/>
                  </button>
                </td>
              </tr>
              )))}
          </tbody>
        </table>
      </TransactionsTBContainer>
    </div>
  )
}