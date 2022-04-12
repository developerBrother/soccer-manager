import React from "react";
import { useState  ,useContext, useEffect} from "react";
import AuthContext from "../../context/context";
import playerBoxStyles from "./Playerbox.module.css";

export const Playerbox = (props) => {
  const ctx = useContext(AuthContext);
  const [checkVal,updateCheck]=useState(false);

  const playerSelect = () => {
     updateCheck(!checkVal);
  };

  useEffect(() => {
    if(checkVal===true){
      console.log("selected");
      ctx.playerList[props.index].selected=true;
      
     }
     else {ctx.playerList[props.index].selected=false;
      
     }
  }, [ctx.playerList,props.index,checkVal]);

  return (
    <div className={`${playerBoxStyles.playerbox} ${checkVal && playerBoxStyles.selected}`} onClick={playerSelect}>
      <h1 className={playerBoxStyles.name}>{props.name}</h1>
      <h1 className={playerBoxStyles.rating}>Rating: {props.stat}</h1>
      <h2 className={playerBoxStyles.country}> {props.country}</h2>
      <span>
       {/*  <label htmlFor={props.id}>Select</label> */}
       {/*  <input type="checkbox" name="player"  onChange={playerSelect} /> */}
      </span>
    </div>
  );
};
