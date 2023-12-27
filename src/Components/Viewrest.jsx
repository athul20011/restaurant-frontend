import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {
const [restDetails,setRestDetails]=useState({})
  //useparam-> used to get path parameter from url  
  // const paraId = useParams()
  // console.log(paraId.id); //object ->id=3
  //API call to get details of the perticular resturenrts using the path parameter
  const {id} = useParams()
  console.log(id);

  const base_url='https://restaurant-backend-kdnr.onrender.com/restaurants'

  const fetchRest=async()=>{
const result =await axios.get(`${base_url}/${id}`)
console.log(result.data);
setRestDetails(result.data)

  }
  console.log(restDetails);
  useEffect(()=>{
fetchRest()
  },[])
  return (
    <div>
<Row>
  <Col>
  <img src={restDetails.photograph} alt="" style={{width:'300px', height:'450px' ,margin:'40px'}} />
  </Col>
  <Col>
  <div>
  <ListGroup>
    <h1 className='text-center'>{restDetails.name}</h1>
      <ListGroup.Item> Address:  {restDetails.address}</ListGroup.Item>
      <ListGroup.Item> Cuisine_type:  {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item> Operating time: </ListGroup.Item>
      <ListGroup.Item><Restop op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview review={restDetails.reviews}/></ListGroup.Item>

    </ListGroup>
  </div>
  </Col>
</Row>
    </div>
  )
}

export default Viewrest