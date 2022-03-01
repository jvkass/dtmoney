import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useState } from "react";
interface NewTransactionModalProps {
    onIsOpen: boolean;
    onIsRequestClose: () => void;
}

export function NewTransactionModal({ onIsOpen, onIsRequestClose }: NewTransactionModalProps) {
    const [type,setType] = useState('deposit');
    
    return (
        <Modal
            isOpen={onIsOpen}
            onRequestClose={onIsRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" 
            onClick={onIsRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"         
                        onClick={()=>{setType('deposit')}}
                        isActive={type === 'deposit'}         
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={()=>{setType('withdraw')}}
                        isActive={type === 'withdraw'}            
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}