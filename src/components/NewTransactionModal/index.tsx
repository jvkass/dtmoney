import Modal from "react-modal";

interface NewTransactionModalProps {
    onIsOpen: boolean;
    onIsRequestClose:()=>void;
}

export function NewTransactionModal({onIsOpen, onIsRequestClose}:NewTransactionModalProps){
   return(
    <Modal
    isOpen={onIsOpen}
    onRequestClose={onIsRequestClose}
  >
    <h2>Cadastrar transação</h2>
  </Modal>
   ); 
}