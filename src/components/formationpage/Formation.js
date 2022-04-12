import formationStyles from "./Formation.module.css";
import AuthContext from "../../context/context";
import { winFunction } from "./winFunction";
import { Playerbox } from "./Playerbox";
import { useContext,useState,useRef } from "react";

import { Modal } from "../Modal";

const Formation = () => {

  const selection=useRef();

  const ctx = useContext(AuthContext);
  const [modal, modalStatus] = useState(false);
  const [modalMessage, changeMessage] = useState("");
  const [recommendation,recChange]=useState("2");
  const [match,updateMatch]=useState();
  


  const recommendHandler=()=>{
   

    const val=parseInt(selection.current.value);
    if(val===1){
      recChange("2");
    }
    if(val===2){
      recChange("4");
    }
    if(val===3){
      recChange("6");
    }
    if(val===4){
      recChange("8");
    }
  }

  const modalHandler = () => {
    modalStatus(false);
    updateMatch(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
  
    
    let selectedNum = 0;
    let rating=0;
    for (let i = 0; i < ctx.playerList.length; i++) {
      if (ctx.playerList[i].selected === true) {
        
        selectedNum++;
        rating=(rating+parseInt(ctx.playerList[i].stat));
      }
    }

    if (selectedNum > 11) {
      
      modalStatus(true);
      changeMessage("Too many players");
    }
    else if (selectedNum < 11) {
      modalStatus(true);
      changeMessage("Select 11 players");
    }
    else{
      
      const win = winFunction(rating,parseInt(selection.current.value));

      if(win){
        updateMatch("won");
        ctx.setPoints(ctx.points+100);
        changeMessage("You won! +100");
        modalStatus(true);
      } else {
        updateMatch("lost");
        ctx.setPoints(ctx.points-10);
        changeMessage("Match Lost -10");
        modalStatus(true);

      }
    }
  };

  return (
    <div className={formationStyles.container}>
      
      <form onSubmit={submitHandler}>
        <div className={formationStyles.scrollcontainer}>
          Select 11 Players
        <div className={formationStyles.subcontainer}>
          
          {ctx.playerList.sort(function(a,b){return a.name-b.name}).map((x, index) => (
            <Playerbox
              key={x.id}
              name={x.name}
              stat={x.stat}
              country={x.country}
              id={x.id}
              index={index}
            />
          ))}
        </div>
        </div>
        
        
        <div className={formationStyles.subcontainer2}>
        Select a Division
          <select onChange={recommendHandler} ref={selection}>
            <option value={1}>Division 1</option>
            <option value={2}>Division 2</option>
            <option value={3}>Division 3</option>
            <option value={4}>Division 4</option>
          </select>
          
          <span>
            Recommended Rating: {recommendation}
          </span>
         
          <button onClick={submitHandler}>PLAY</button>
        </div>
      </form>
      
      {modal && <Modal message={modalMessage} modalHandler={modalHandler} matchVal={match} />}
    </div>
  );
};

export default Formation;
