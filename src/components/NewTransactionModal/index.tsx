import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransactions";
interface NewTransactionModalProps {
    onIsOpen: boolean;
    onIsRequestClose: () => void;
}

export function NewTransactionModal({ onIsOpen, onIsRequestClose }: NewTransactionModalProps) {
    const {createTransaction} = useTransaction();
    
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [category,setCategory] = useState('');
    const [type,setType] = useState('deposit');
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault(); 

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onIsRequestClose();
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
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
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
                    onChange={e => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}