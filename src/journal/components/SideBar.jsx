import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth = 24 }) => {
  return (
    <Box
        component='nav'
        sx={{
            width: { sm: drawerWidth }, flexShrink: { sm: 0 }
        }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    Simon Bustamante
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril','Mayo'].map( item => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={item} />

                                    <ListItemText secondary={ 'lorem lorem lorem loremlorem lorem loremloremlorems' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>


        </Drawer>
    </Box>
  )
}
