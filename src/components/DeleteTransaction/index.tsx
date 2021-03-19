import { useContext} from 'react';
import Modal from 'react-modal';
import { TransactionContext } from '../Contextos/TransactionsContext';
import imgCloseModal from '../../assets/vector.svg'
interface deleteTransationModalProps{
  closeDeleteModal: () => void;
  isOpenDelete:boolean;
  idToDelete:string;
}

export const DeleteTransaction = ({closeDeleteModal, idToDelete, isOpenDelete}:deleteTransationModalProps)=>{
  
  const {removeTransaction} = useContext(TransactionContext);  

  function deleteTheTransaction(){
    const numberID = Number(idToDelete);
    removeTransaction(numberID)
    closeDeleteModal();
  }
  
  return (
    <Modal isOpen={isOpenDelete} onRequestClose={closeDeleteModal}  className="modal-to-delete"  overlayClassName="react-modal-overlay" >
      <h1>Tem certeza que deseja Excluir ?</h1>
      <button className="btn-react-modal-close">
        <img src={imgCloseModal} alt="Fechar Modal"/>
      </button>
      <div className="wrapperbtnsdelete">
        <button onClick={deleteTheTransaction}>Excluir</button>
        <button onClick={closeDeleteModal}>Cancelar</button>
      </div>
    </Modal>
  )
}