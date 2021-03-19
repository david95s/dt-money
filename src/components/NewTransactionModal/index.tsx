import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionContext } from '../Contextos/TransactionsContext';

import closeImg from '../../assets/vector.svg';
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import {FormNewTransationMDLContainer, TransactionTypeContainer, RadioBoxButton} from './styles'

interface NewTransationModalProps{
  isOpen:boolean;
  onRequestClose: () => void;
}


export const NewTransationModal = ({isOpen, onRequestClose}:NewTransationModalProps)=>{
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');//inputValue
  const [amount, setAmount] = useState(0);//inputValue
  const [category, setCategory] = useState('');//inputValue

  
  const {createTransaction} = useContext(TransactionContext);
  
  function resetFieldInputs(){
    setType('');
    setTitle('');
    setAmount(0);
    setCategory('');
  }

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();
    await createTransaction({type, title, amount, category});
    onRequestClose();
    resetFieldInputs();
  }


  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    > 
      <button onClick={onRequestClose} className="btn-react-modal-close" type="button">
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <FormNewTransationMDLContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
        placeholder="Titulo"
        onChange={(event)=> setTitle(event.target.value)}
        value={title}
        />
        <input 
        type="number" 
        placeholder="Valor"
        value={amount}
        onChange={(event)=> setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          
          <RadioBoxButton 
            type="button"
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada"/>
            <span>Entrada</span>
          </RadioBoxButton>
         
          <RadioBoxButton
            type="button"
            onClick={()=> setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red" 
          >
            <img src={outcomeImg} alt="saida"/>
            <span>Saida</span>
          </RadioBoxButton>

        </TransactionTypeContainer>
        <input  
        placeholder="Categoria"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </FormNewTransationMDLContainer>

    </Modal>
  );
}