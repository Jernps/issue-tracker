'use client'
import { Button, Callout, TextField, Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import {z} from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spiner from '@/app/components/Spiner';

type IssueFrom = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit ,formState: {errors}} = useForm<IssueFrom>({
    resolver: zodResolver(createIssueSchema)
  });
  const [ error, setError] = useState('');
  const [ isSubmitting, setSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
      try {
        setSubmitting(true)
         await axios.post('/api/issues', data); 
          router.push('/issues')
      } catch (error) {
        setSubmitting(false)
        setError('An unexpected error occurred.')
      }
      })

  return (
    <div className='max-w-xl '>
      {error && (<Callout.Root color='red' className='mb-5'><Callout.Text>{error}</Callout.Text></Callout.Root>)}
        <form className='space-y-3' onSubmit={onSubmit}>
    <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')} />
    </TextField.Root>
    <ErrorMessage>{errors.title?.message}</ErrorMessage>
    <Controller 
      name='description'
      control = {control}
      render={ ({field}) => <SimpleMDE placeholder='Description' {...field} />}
    />
    <ErrorMessage>{errors.description?.message}</ErrorMessage>
    
    <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spiner/>} </Button>
  </form>
    </div>
  
  )
}

export default NewIssuePage