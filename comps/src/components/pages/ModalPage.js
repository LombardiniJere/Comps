import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal";

function ModalPage() {
  const [ showModal, setShowModa ] = useState(false);

  const handleClick = () => {
    setShowModa(true);
  }
  const handleCloseModal = () => {
    setShowModa(false);
  }

  const actionBar = 
    <div>
      <Buttons primary onClick={ handleCloseModal }>Accept</Buttons>
    </div>

  const modal = 
    <Modal onClose={ handleCloseModal } actionBar={ actionBar } >
      <p>Imporat Agreement !</p>
    </Modal>

  return (
    <div className="relative">
      <Buttons primary onClick={ handleClick }>
        ! Open Modal !
      </Buttons>
      {showModal && modal}
    </div>
  )
}

export default ModalPage;