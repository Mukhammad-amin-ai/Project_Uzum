import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    let {id } = useParams()
  return (
   <Box sx={{width:"100%",height:"100vh"}}>
    <Typography>
        {id}
    </Typography>
   </Box>
  )
}
