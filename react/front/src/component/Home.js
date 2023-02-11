import { useEffect } from "react";
import axios from 'axios'; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileCirclePlus,faThin} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"
import Nav from "./Nav"
const Home = () => {
  const [post, setPosts]=useState([])
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/edit', { replace: true });
  }
  const page_change=(data)=>{
    localStorage.setItem("id",data)
    navigate('/post', { replace: true });

  }
  useEffect(() => {
    axios.get('/post'
    ).then((response) => {
    console.log(response.data)
    setPosts(response.data)

    }).catch((err)=>{
      console.log(err)
    });
  },[]);

  return (
    <div>
      <Nav/>
      <div className="row">
      {post.map((data) =>(
          <div className="column" key={data._id} onClick={()=>page_change(data._id)}>
             <div className="card">
               <h3>{data.title}</h3>
               { data.image &&
               <img className="uploads" src={`http://localhost:4000/${data.image}`}/>
                }
               <p>{data.post}</p>
             </div>
          </div>
      ))}
      </div>
      <div className="footer">
        <p className="stick"><FontAwesomeIcon style={{height:"30px",color:"gray"}} onClick={handleClick} icon={faFileCirclePlus} /></p>
      </div>
    </div>
  )
}

export default Home