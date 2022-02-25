import Modal from "react-modal";
import { Container } from "./styles";

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

                <button placeholder="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}