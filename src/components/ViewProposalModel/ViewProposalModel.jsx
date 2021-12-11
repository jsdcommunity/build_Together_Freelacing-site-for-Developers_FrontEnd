import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, InputAdornment, OutlinedInput, Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"70%",
  minWidth:200,
  maxWidth: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

export default function ViewProposalModel({

   isOpen = false,  
   closeFunc = () => null,
   proposalData={},
   statusBtn = () => null
  }) {



  return (
    <div>
      
      <Modal
        open={isOpen}
        onClose={closeFunc}
      >
        <Box sx={style}>
        <Stack sx={{
          alignItems:"center",
          mb:2
        }} direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="assets/hero-man.png" />
          <Typography>Buyer name</Typography> {statusBtn(proposalData.status)}
        </Stack>

          <Typography variant="subtitle1" sx={{border:"1px solid #ccc4c4",p:1,borderRadius:"5px"}}>
           {proposalData.jobTitle}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
           Amount :<OutlinedInput value="100" disabled sx={{px:2,mx:1}}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          </Typography>
        </Box>
      </Modal>
      
    </div>
  );
}
