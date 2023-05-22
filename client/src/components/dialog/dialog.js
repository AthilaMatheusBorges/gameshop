import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {

  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (

      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Preço"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.cost}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Deletar</Button>
          <Button onClick={handleClose}>Salvar</Button>
        </DialogActions>
      </Dialog>
 
  );
}