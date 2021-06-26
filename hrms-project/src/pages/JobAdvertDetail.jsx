import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'

export default function  JobAdvertDetail() {



  let {id} = useParams()
 
  const [jobAdvert, setjobAdvert] = useState({})
 
  

  useEffect(()=>{
      let jobAdvertService = new JobAdvertService()
    

      jobAdvertService.getJobAdvertById(id).then(result=> setjobAdvert(result.data.data))
  },[]

  )



    return (
        
        <div>
           
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{jobAdvert.jobPosition?.name}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
   
        </div>
    )
}
