import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store'

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );

  const onclickNewNote = () => {
     dispatch( startNewNote() );
  };

  console.log(active)

  return (
    <JournalLayout>
      
      {
        ( !!active )
        ? <NoteView />
        : <NothingSelectedView />
      }
      
      <IconButton
        size='large'
        disabled={ isSaving }
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
