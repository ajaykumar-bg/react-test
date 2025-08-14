import React, { useState } from "react";
import Modal from "./Modal";
import "./ReactPortalExample.css"; // Optional: for basic styling

function ReactPortalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="ReactPortalExample">
      <h1>React Portal Example</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>This is a Portal Modal!</h2>
          <p>Content rendered outside the main DOM hierarchy.</p>
        </Modal>
      )}
    </div>
  );
}

export default ReactPortalExample;
