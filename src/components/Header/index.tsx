import { useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { TransactionContext } from '../Contextos/TransactionsContext';
import { ContainerHeader } from './styles';
import {WrapperHeader} from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){

  const {transaction} = useContext(TransactionContext);

  return (
      <ContainerHeader>
        
        <WrapperHeader>
          <img src={logoImg} alt="dt-money"/> 
          <button className={transaction.length === 0 ? "withoutransaction" : ''} onClick={onOpenNewTransactionModal}>
            Nova transação
          </button> 
        </WrapperHeader>





      </ContainerHeader>
  
  );
}