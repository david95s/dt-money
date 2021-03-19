import { useContext } from 'react';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionContext } from '../Contextos/TransactionsContext';
import {ContainerSumary} from './styles';

export function Summary(){

  const {transaction} = useContext(TransactionContext);

  const summary = transaction.reduce((acc, item)=>{
    if(item.type === "deposit"){
      acc.deposits += item.amount;
      acc.total += item.amount;
    }else{
      acc.withdraw += item.amount;
      acc.total -= item.amount;
    }
    return acc;
  },{
    deposits:0,
    withdraw:0,
    total:0,
  });


  function formatRealCoin(value:number){
   const formated =  new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency:'BRL'
    }).format(value)

    return formated;
  }

  return (
    <ContainerSumary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        
        <strong>{formatRealCoin(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong> -{formatRealCoin(summary.withdraw)}</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
        {formatRealCoin(summary.total)}
        </strong>
      </div>
    </ContainerSumary>
  )
} 