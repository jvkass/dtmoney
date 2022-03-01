import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
interface NewTransactionModalProps {
    onIsOpen: boolean;
    onIsRequestClose: () => void;
}

export function NewTransactionModal({ onIsOpen, onIsRequestClose }: NewTransactionModalProps) {
    const [title,setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [category,setCategory] = useState(0);
    const [type,setType] = useState('deposit');
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault(); 

        const data ={
            title,
            value,
            category,
            type
        };

        api.post('/transactions',data)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"         
                        onClick={()=>{setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"         
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={()=>{setType('withdraw')}}
                        isActive={type === 'withdraw'} 
                        activeColor="red"           
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={e => setCategory(Number(e.target.value))}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}