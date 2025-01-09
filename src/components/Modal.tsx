import { useState } from "react";
import "../css/Modal.css";

interface Field {
    label: string;
    type: string;
    name: string;
}

interface ModalProps {
    modalData: {
        title: string;
        fields: Field[];
    };
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalData, onClose }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const maxDescriptionLength = 200;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3 className="title">{modalData.title}</h3>
                <form className="form-content">
                    {modalData.fields.map((field, index) => (
                        <div key={index} className="form-group">
                            <label>{field.label}</label>
                            {field.name === "description" ? (
                                <>
                                    <textarea
                                        name={field.name}
                                        maxLength={maxDescriptionLength}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        placeholder="Digite a descrição..."
                                    />
                                    <div className="char-count">
                                        {formData[field.name]?.length || 0}/{maxDescriptionLength}
                                    </div>
                                </>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            )}
                        </div>
                    ))}
                    <div className="form-actions">
                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;