import { faHome,faPaperPlane,faLink,faItalic,faBold,faList,faUnderline,faStrikethrough} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import react,{useState } from "react";
import Nav from "./Nav"
const Edit = () => {
const navigate=useNavigate();
const [title,setTitle]=useState('');
const [data,setData]=useState('');
const [file,setFile]=useState();
const handleClick=()=>{
  console.log(file)
  var formData = new FormData();
  formData.append('title', title);
  formData.append('data', data);
  formData.append('image',file);
  console.log(Object.fromEntries(formData))
  axios.post('/create_post',formData
  ).then(function (response) {
    navigate('/', { replace: true })
     }).catch(function (error) {
         console.error(error);
     });
}
  return (
    <div>
      <Nav></Nav>
      <div className="right">
        <span className="home" onClick={()=>{
                navigate('/', { replace: true });
        }}><FontAwesomeIcon style={{fontSize:"30px"}} icon={faHome}/></span>
        <span style={{marginTop:"10px"}} className="home" onClick={handleClick}><FontAwesomeIcon style={{fontSize:"30px"}} icon={faPaperPlane}/></span>
      </div>
      <div className="posted">
        <div className="diff">
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faLink}/></span>
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faItalic}/></span>
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faBold}/></span>
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faList}/></span>
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faUnderline}/></span>
          <span className="nav-ie"><FontAwesomeIcon style={{fontSize:"12px"}} icon={faStrikethrough}/></span>
          <span className="nav-ie"><input className="img" onChange={(e)=>{setFile(e.target.files[0])}} type="file"/></span>
        </div>
        <input className="title_in" onChange={(e)=>{setTitle(e.target.value)
        console.log(title)}} type="text" placeholder="title"></input>
        <textarea className="input_d" onChange={(e)=>{setData(e.target.value)
        console.log(data)}} placeholder="content"/>
      </div>

    </div>
  )
}

export default Edit