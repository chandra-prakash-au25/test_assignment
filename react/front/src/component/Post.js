import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import Nav from "./Nav"
const Post = () => {
const navigate = useNavigate();
const [post,setPost]=useState([])
const handle_delete=()=>{
  const id=localStorage.getItem('id')
  axios.post('post/single/del', {postId:id}
  ).then(function (response) {
    console.log("post deleted")
    navigate('/', { replace: true })
     }).catch(function (error) {
         console.error(error);
     });
}
  useEffect(() => {
    const id=localStorage.getItem('id')
    axios.post('post/single', {postId:id}
 )
    .then(function (response) {
        setPost(response.data)
        console.log(post['title'])
    })
    .catch(function (error) {
        console.error(error);
    });
  },[]);
  return (
    <div>
      <Nav/>
            <span className="home" onClick={()=>{
              navigate('/', { replace: true });
            }}><FontAwesomeIcon style={{fontSize:"30px"}} icon={faHome}></FontAwesomeIcon></span>
      <div className="post">
        <h1>{post['title']}</h1>
        <p>{post['post']}</p>
      </div>
      <div className="footer">
        <p className="stick" onClick={handle_delete}><FontAwesomeIcon style={{height:"30px",color:"red"}} icon={faTrash} /></p>
      </div>

    </div>
  )
}

export default Post