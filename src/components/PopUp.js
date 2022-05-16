import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PopUp({
    open, 
    setOpen, 
    title, 
    setTitle, 
    addData, 
    handleClose
}) {
    

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input
                        placeholder="Add a title"
                        className='add-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="button-container">
                        <button 
                            className="add-docs"
                            onClick={addData}
                        >
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}