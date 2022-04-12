import {useState, useContext} from 'react';
import Player from './Player';
import AuthContext from '../../context/context';
import playerStyles from '../Yourplayers.module.css';

const StorePlayers=(props)=>{
   
    const ctx=useContext(AuthContext);

   
  const [availablePlayers,changeSale]=useState (ctx.salePlayers)

      const buyHandler=(id)=>{
        
        
        
        const index = availablePlayers.findIndex(function(player){
            return player.id===id;
        });
        
        //If player has enough points, go through with the purchase
        if(ctx.points-availablePlayers[index].points>0){
        
        ctx.setPoints(ctx.points-availablePlayers[index].points)
        
        ctx.changePlayers([...ctx.playerList,availablePlayers[index]]);
        
        changeSale(ctx.salePlayers.filter(x=> x.id!==id));
        ctx.changeSale(ctx.salePlayers.filter(x=> x.id!==id));
        
        

        }else{
            props.modal();
        }
        
      }

    return<div className={playerStyles.container}>
        {availablePlayers.map(x=><Player key={x.id} data={x} funcCall={buyHandler} saleType={'buy'}/>)}
        
    </div>
}

export default StorePlayers;