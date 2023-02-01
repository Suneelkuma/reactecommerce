import React, { useEffect, useState } from 'react'
 import axios from 'axios'
import Card from './Card';
import Page from './Page';
function Image() {
    const [query,setQuery]=useState("");
    const [result,setResult]=useState([]);
const [show,setShow]=useState(false)
    const [next,setNext]=useState(10);

    const [prev,setPrev]=useState(0);
    function nextvalue(){
        setNext(next+10)
        setPrev(prev+10)
    }

    function previous(){
        setNext(next-10)
        setPrev(prev-10)
    }

    const handleChange=(e)=>{
        let q=e.target.value;
setQuery(q);
    }
    const HandleSubmit=(e)=>{
e.preventDefault()
    setShow(true)
    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {q: `${query}`, country: 'in', language: 'en'},
        headers: {
          'X-RapidAPI-Key': '7a7f512b67msh7b3a028d6fd57e4p165a51jsnec6f0cf52563',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.data);
          setResult(response.data.data)
          console.log(response.data.data[0].product_photos[0]);
          console.log(response.data.data[0].product_description)
      }).catch(function (error) {
          console.error(error);
      });
   
    //    axios.get(`https://api.unsplash.com/search/photos?page=5&query=${query}}&client_id=NEN7Nfm9m3jBOhfX5Xbe6cs7OOT6kg-iVEx8JGSZYfk`)
    //    .then((response)=>{
    //     console.log(response.data.results);
    //     setResult(response.data.results)
    //    })
   
    }
  return (<>
  <div className="container">
    <h1 style={{textAlign:"center",backgroundColor:"cyan", margin:"5px"}}>Available Products</h1>
    <form onSubmit={HandleSubmit}>
        <input style={{margin:"10px" ,height:"34px"}} type="text"  className="input" onChange={handleChange}  />
        <button className="btn btn-primary mx-2" type="submit">Search</button>

        <div className='imageHolder'>
            {
result.slice(prev,next).map((e,i)=>{
    // this return with rapid api
return <Card img={e.product_photos} description={e.product_description} /> 

// this return work with unspalsh api
//  return <Card id={i} img={e.urls.small} description={e.description} />
})
        }
            
            
        </div>
    </form>
  {show && <Page previousvalue={previous} nextvalue={nextvalue}/>}  
  </div>
     
    </>
  )
}

export default Image
