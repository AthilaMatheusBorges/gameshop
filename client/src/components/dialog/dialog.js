import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Axios from 'axios'
import produce from 'immer'

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category
  })

  const handleEditGames = () => {
    Axios.put('http://localhost:3001/edit', {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category
    });
    handleClose()
  }

  const handleDeleteGames = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    handleClose()
  }

  const handleClickOpen = () => {
    props.setOpen(true)
  }

  const handleClose = () => {
    props.setOpen(false)
  }

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value
    }))
  }

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
          onChange={handleChangeValues}
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
          onChange={handleChangeValues}
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
          onChange={handleChangeValues}
          fullWidth
          variant="standard"
          defaultValue={props.category}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleDeleteGames()}>Deletar</Button>
        <Button onClick={() => handleEditGames()}>Salvar</Button>
      </DialogActions>
    </Dialog>
  )
}
