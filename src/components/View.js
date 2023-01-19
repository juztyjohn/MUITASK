import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <TableRow key={book.isbn}>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <Icon icon={trash} />
            </TableCell>           
        </TableRow>            
    
))
}