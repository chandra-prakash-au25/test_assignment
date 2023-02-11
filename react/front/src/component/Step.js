import axios from 'axios'; 
import { useState } from "react";


const Step = () => {
  const [first,setFirst]=useState()
  const [second,setSecond]=useState()
  const [err,setErr]=useState()
  const [data,setData]=useState()
  const generate_step=()=>{
    var val;
    if (!(/^\d+$/.test(second))){
      setErr("Enter Valid Number Second")
      val=1
    }
    else if(!(/^\d+$/.test(first))){
      val=1
      setErr('Enter Valid Number First')
    }
    else(setErr(''))
    if(!val){
      axios.post('steps/step',{"first":first,"second":second}
      ).then((response) => {
      var res=[]
      var data=response.data.steps.split("+")
      for(let i=0;i<data.length;i+=1){
      let data2=JSON.stringify(data[i])
        res.push(JSON.parse(data2))
      }
    setData(res)
 

      }).catch((err)=>{
        console.log(err)
      });
    }
  }
  return (
    <div>
      <div className='nav'>
        <h1 className='nav-head'>Step Addition</h1>
      </div>
      <div className='step_content'>
        <div className='step_in'> <span>First  Number :</span> <input  type="text" onChange={(e)=>{setFirst(e.target.value)

        }
      } className='input_'/></div>
        <div className='step_in'> <span> Second Number :</span> <input type="text" onChange={(e)=>{setSecond(e.target.value)
        }} className='input_'/></div>
        <div className='step_in btn'> <button onClick={generate_step}>Generate Steps</button></div>
        <div className='step_in data_step'>
          <div className='step_'>
            <div className='step_data'>
              <div style={{marginBottom:"5%"}}><span className='err'>{err}</span></div>
                <>
              <div style={{marginLeft:"20px",color:'#FFA654'}}>{"{"}</div>

                {data&&
                  data.map((val,i)=>
                    <div className='map_div' key={i}>{val &&<span className='map_spn'>Step{i+1}:</span>}{val}</div>
                  )
                }
                <div style={{marginLeft:"20px",color:'#FFA654'}}>{"}"}</div>

                </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step