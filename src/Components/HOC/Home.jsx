import React from 'react'
import { HOC_comp } from './HOC_comp'

function Home(props) {
  return (
    <div>
      <h1>Home </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus nostrum consequatur minus, aspernatur ipsam, quaerat nulla modi, beatae sapiente perferendis quos odio vero iste quis possimus nesciunt fuga rem soluta ducimus deleniti. Culpa quam aspernatur commodi perferendis eum, obcaecati alias voluptatibus vero unde deserunt sapiente et dicta, ratione magnam!</p>
    </div>
  )
}

export default HOC_comp(Home)
