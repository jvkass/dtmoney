import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg"
interface NewTransactionModalProps {
    onIsOpen: boolean;
    onIsRequestClose: () => void;
}

export function NewTransactionModal({ onIsOpen, onIsRequestClose }: NewTransactionModalProps) {
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

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}