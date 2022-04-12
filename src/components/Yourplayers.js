import AuthContext from "../context/context";
import { useContext } from "react";
import Player from "./storepage/Player";
import yourPlayerStyles from "./Yourplayers.module.css";
import {sortList} from './sortingLogic';

const Yourplayers = (props) => {
  //This will display the list of players
  //The dummy player data will be mapped to the
  //player component

  //store the list of players in a stateful variable

  const ctx = useContext(AuthContext);

  const sellHandler = (id) => {
    if (ctx.playerList.length - 1 < 11) {
      props.modal();
    } else {
      ctx.changePlayers(
        ctx.playerList.filter((x) => {
          ctx.setPoints(ctx.points + x.points);
          return x.id !== id;
        })
      );
    }
  };
//sorting array

const sortedArr = sortList(ctx.playerList,props.sortVal);
  

  return (
    <div className={yourPlayerStyles.container}>
      {sortedArr.map((x) => (
        <Player key={x.id} data={x} funcCall={sellHandler} saleType={"sell"} />
      ))}
    </div>
  );
};

export default Yourplayers;
