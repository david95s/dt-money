import { useState } from 'react';

import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransationModal } from './components/NewTransactionModal';
import {DeleteTransaction} from './components/DeleteTransaction'


import {TransactionProvider} from './components/Contextos/TransactionsContext';

export function App() {
  
  Modal.setAppElement('#root');

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [isDeleteTransModalOpen, setIsDeleteTransModalOpen] = useState(false);

  const [idToDelete, setIdaToDelete] = useState('');

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenDeleteTransaction(id:string){
    setIdaToDelete(id);
    setIsDeleteTransModalOpen(true);
  }

  function handleCloseDeleteTransaction(){
    setIsDeleteTransModalOpen(false);
  }

  
  return (
      <>
      <TransactionProvider>
        <GlobalStyle/>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        <DashBoard openDeleteModal ={handleOpenDeleteTransaction}/>

        <DeleteTransaction  
          closeDeleteModal ={handleCloseDeleteTransaction}
          isOpenDelete ={isDeleteTransModalOpen}
          idToDelete={idToDelete}
        />

        <NewTransationModal onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen} />
        
      </TransactionProvider>

      </>
  );
}
