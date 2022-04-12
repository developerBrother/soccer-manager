

export const winFunction=(stats, division)=>{
    const statAverage=stats/10;
    let generated=Math.floor(Math.random()*10);
    let win=true;
    
    
    
    if(division===1){
        if(statAverage<2 && generated>7){
           //20% chance of winning
            return win;
            
        }
        if(statAverage>2 && generated>2){
            //70% chance winning
            return win;
        }
    }
    if(division===2){
        
        if(statAverage<4 && generated>7){
            //20% chance of winning
             return win;
             
         }
         if(statAverage>4 && generated>2){
             //70% chance winning
             return win;
         }
    }
    if(division===3){
        
        if(statAverage<6 && generated>7){
            //20% chance of winning
             return win;
             
         }
         if(statAverage>6 && generated>2){
             //70% chance winning
             return win;
         }
    }
    if(division===4){
        
        if(statAverage<8 && generated>7){
            //20% chance of winning
             return win;
             
         }
         if(statAverage>8 && generated>2){
             //70% chance winning
             return win;
         }
    }
    else{
        win=false;
        return win;
    }
}

