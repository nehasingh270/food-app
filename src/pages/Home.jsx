import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const[items,setitem] = useState([]);


  let getRecipe = async()=>{  
  let res = await axios.get("https://api.edamam.com/search?q=paneer &app_id=dc9c3671&app_key=11c470ed01962f4bb1e0d3a76b62d7bd")
console.log(res.data.hits)
setitem(res.data.hits)
  }



  useEffect(()=>{
     getRecipe()
  },[])

  return (
    
    <div className='pt-2'>

      
      <div className='row m-0 p-0 gap-2 justify-content-center'>
      {
        items.map((ele,index)=>{
        return (
            <div className="card" style={{width: '18rem'}}>
  <img src= {ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <Link to="/single" state={ele} className="btn btn-primary">View page</Link>
  </div>
</div>

        )
    
    
    })
      }
      </div>
    </div>
  )
}

export default Home
