import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'

const issuePage = () => {
  return (
    <div className='px-5'>
      <Button><Link href='/issue/new'>New Issue</Link></Button>
    </div>
  )
}

export default issuePage
