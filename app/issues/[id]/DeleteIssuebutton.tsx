import { Button } from '@radix-ui/themes'

const DeleteIssuebutton = ({ issueId} : {issueId:number}) => {
  return (
    <Button color='red'>Delete Issue</Button>
  )
}

export default DeleteIssuebutton
