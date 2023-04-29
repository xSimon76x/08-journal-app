import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store'

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onclickNewNote = () => {
     dispatch( startNewNote() );
  };


  return (
    <JournalLayout>
      {/* <Typography>
        Consectetur sunt officia amet in ea dolor.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        onClick={ onclickNewNote }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50,

        }}  
      >
        <AddOutlined  sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>    
  )
}
