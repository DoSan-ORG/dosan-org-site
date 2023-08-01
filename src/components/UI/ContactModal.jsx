import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

function ContactModal ({ open, handleCloseModal }){
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    width: '90%',
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Thank you for your message!
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          We will get back to you soon.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ContactModal;
