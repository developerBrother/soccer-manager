import React from 'react'
import modalStyles from './Modal.module.css';

export const Modal = (props) => {
 


    return (
   <div className={modalStyles.modal}>
            <div className={modalStyles.card}>
             
              {props.message}
              
              <div className={modalStyles.break}/>
              {/* {props.matchVal==="won" && <iframe src="http://cdn1.vox-cdn.com/assets/4647741/swiss.gif"  ></iframe> } */}
              {/* <iframe src="https://giphy.com/embed/2YAkCiEkxs240DA6wk" width="100%" class="giphy-embed" allowFullScreen></iframe> */}
              
              
              
              <div className={modalStyles.break} />
              <button onClick={props.modalHandler}>Clear</button>
            </div>
          </div>
  )
}
