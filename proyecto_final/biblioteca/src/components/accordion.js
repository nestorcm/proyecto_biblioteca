import React, { useState } from 'react';
import "../assets/css/accordion.css"

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item mb-3">
            <div className="accordion-header">
                <button
                    className="accordion-button btn btn-primary w-100 text-start"
                    onClick={toggleAccordion}
                >
                    {title}
                </button>
            </div>
            {/* Mostrar el contenido si isOpen es true */}
            {isOpen && (
                <div className="accordion-body p-3" style={{ backgroundColor: "#f9f9f9" }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
