import React from 'react'
import { useLocation } from 'react-router-dom'

const Single = () => {
  let location = useLocation()
  console.log(location.state.recipe)
  let data = location.state.recipe
  return (
    <div className='container mt-2'>
      <div className="card mb-3 ">
  <div className="row g-0 d-flex justify-content-center p-2">
    <div className="col-md-4 ">
      <img src={data.image}   className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title:{data.label}</h5>
        <h6 className="card-title">Meal Type:{data.mealType}</h6>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<ul>
  <b>Ingredient</b>
  {data.ingredientLines.map((ele)=>
  {
    return <li>{ele}</li>
  })}

</ul>

    </div>
  )
}

export default Single
