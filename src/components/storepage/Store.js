import storeStyle from "./Store.module.css";
import Yourplayers from '../Yourplayers';
import StorePlayers from './StorePlayers';
import AuthContext from "../../context/context";
import { Modal } from "../Modal";
import { useState,useContext,useRef } from "react";
const Store = () => {
  
const sortRef=useRef();
const [sortVal, changeSortVal]=useState(1);


const ctx=useContext(AuthContext);
const [buymodalStatus,setBuyModalStatus]=useState(false); 
const [sellmodalStatus,setSellModalStatus]=useState(false); 


const buyModalHandler=()=>{
  setBuyModalStatus(!buymodalStatus)
}
const sellModalHandler=()=>{
  setSellModalStatus(!sellmodalStatus)
}

const changeSortHandler=()=>{
  changeSortVal(sortRef.current.value);
  
}

return (
    <div className={storeStyle.container}>
      <div className={storeStyle.sub}>
        <span>
        <h2>Your Players</h2>
        <h2>Your points:${ctx.points}</h2>
        
        </span>
        <h3>Sort: 
          <select  ref={sortRef} onChange={changeSortHandler}>
          <option selected="selected" value={1}>Rating High to Low</option>
          <option value={2}>Rating Low to High</option>
          </select></h3>
        <Yourplayers modal={sellModalHandler} sortVal={sortVal}/>
        
      </div>

      <div className={storeStyle.sub}>
        <h1>Store</h1>
        <StorePlayers modal={buyModalHandler}/>
      </div>
      {sellmodalStatus && <Modal message={"Can't have less than 11 players"} modalHandler={sellModalHandler}/>}
      {buymodalStatus && <Modal message={"Need more money"} modalHandler={buyModalHandler}/>}
    </div>
  );
};

export default Store;
