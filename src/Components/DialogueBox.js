import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  // const [name, setName] = useState("")
  // const [Batch, setBatch] = useState("")
  // const [roll, setRoll] = useState("")
  // const [stuClass, setStuClass] = useState("")

  


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button variant="outlined" color="primary" style={{margin:20}} onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Fill all the required inputs.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add all the details for adding a new member in the xisting list.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="Text"
            fullWidth
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="batch"
            label="Batch"
            type="Text"
            fullWidth
            // onChange={(e) => setBatch(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Roll no:"
            type="number"
            fullWidth
            // onChange={(e) => setRoll(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="class"
            label="Class"
            type="text"
            fullWidth
            // onChange={(e) => setStuClass(e.target.value)} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}