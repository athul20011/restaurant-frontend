import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Restcard from './Restcard'



function AllRest() {

  const base_url='https://restaurant-backend-kdnr.onrender.com/restaurants'

  //to build array of restaurent data 
  const [AllRestData,setAllRestData]=useState([])

  //API fetching
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)

  }
  console.log(AllRestData);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
<Row>
  {
    AllRestData.map(item=>(
      <Col sm={12} md={6} lg={4} sl={3}>
<Restcard restaurants={item}/>      

      </Col>
    ))
  }
</Row>
    </div>
  )
}

export default AllRest