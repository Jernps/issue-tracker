import ErrorMessage from '@/app/components/ErrorMessage'
import { Box, TextField } from '@radix-ui/themes'
import { register } from 'module'
import React from 'react'
import { Controller } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
  return (
    <div>
      <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height="20rem" />
      </Box>
    </div>
  )
}

export default LoadingNewIssuePage
