import React, { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {Remove,Update_data} from '../Redux/Action'
import { DeleteContext } from "./Context/ContextProvider";

export const Todo = () => {

  const {user_data} =useSelector((state)=> state.todoReducer);
  
  const {dltTask, setDltTask} = useContext(DeleteContext);
  
  const dispatch = useDispatch();
   
    const [showEye,setShowEye] = useState(false);
    const [showEyeValue,setShowEyeValue] = useState("");
    const [show, setShow] = useState(false);
    const [update,setUpdate] = useState("");
    const [ind,setInd] = useState("");
   
    const handleClose = () => setShow(false);
    
    const handleShow =(el)=>{
      setShow(true);
      setUpdate(el)
    }
    // dlt function
    const deleteItem=(id)=>{
      
      dispatch(Remove(id))

      setDltTask(true)
   
    }
    //update function
    const userTask_update =()=>{
      dispatch(Update_data(update,ind))
      handleClose()
    }
    
  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {user_data.map((ele, K)=>{
            return (
            
                <div
          className="todo_container mb-2 d-flex justify-content-between align-items-center px-2" key={K}
          style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}
         
        >
          <li style={{ listStyle: "none" }}>{ele}</li>
          <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-item-centre">
            <EditIcon 
            onClick={()=>{
              handleShow(ele)
              setInd(K)
            }}
            style={{ color: "#3c40c6", cursor: "pointer" }} />
            <DeleteIcon
            onClick={()=> deleteItem(K)}
             style={{ color: "red", cursor: "pointer" }} />
            <RemoveRedEyeIcon 
              onClick={()=>{
                setShowEye(true)
                setShowEyeValue(ele)
              }}
            style={{ color: "#1dd1a1", cursor: "pointer" }} />
          </div>
        </div>
                
            )
        })}
        {/* read model */}
        <Modal show={showEye} >
        <h1 className='text-center'>{showEyeValue}</h1>
        <Modal.Footer>
          <Button variant="secondary"onClick={()=>{
            setShowEye(false)
          }}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/* update model*/}
      <Modal show={show} onHide={handleClose}>
        <h3 className="text-center mt-2">Update Your Task</h3>
        <Modal.Header >
        <div className='todo col-lg-5 mx-auto d-flex
                    justify-content-between align-items-center'>
                        <input 
                        onChange={(e)=>setUpdate(e.target.value)}
                        className='form-control col-lg-5 mt-2'
                        name='task'
                        value={update}/>
                        
                    </div>
        </Modal.Header>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>userTask_update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};
