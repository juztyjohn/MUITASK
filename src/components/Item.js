import React, { useEffect, useState } from 'react';
import { View } from './View';
import {
  Grid,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Item() {
  const theme = createTheme();

  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      title,
      author,
      isbn,
    };
    setbooks([...books, book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  // delete book from LS
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setbooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
        <Grid item padding={'10px'} xs={false} sm={4} md={6}>
          <Box>
            <CssBaseline />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Book Details
            </Typography>

            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleAddBookSubmit}
            >
              <TextField
                label="Title"
                fullWidth
                margin="normal"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <TextField
                label="Author"
                fullWidth
                margin="normal"
                required
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
              <TextField
                label="Rupees"
                fullWidth
                margin="normal"
                required
                onChange={(e) => setIsbn(e.target.value)}
                value={isbn}
              ></TextField>
              <Button
                type="submit"
                fullWidth
                color='secondary'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ADD
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={6} padding={'10px'}>
          {books.length > 0 && (
            <>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ISBN#</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>AuTableCellor</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <View books={books} deleteBook={deleteBook} />
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                type="submit"
                color='secondary'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => setbooks([])}
              >
                Remove All
              </Button>
            </>
          )}
          {books.length < 1 && <div>No books are added yet</div>}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Item;
