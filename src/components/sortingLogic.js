//Receive the array of objects and what type of sort
//return the sorted array

export const sortList=(playerList,sortType)=>{
    let sortVal=parseInt(sortType);
    
    let newList;
    if(sortVal===1){

       newList=playerList.sort((a, b) => {
            let result = 0;
            if (a.stat < b.stat) {
              result = 1;
            } else if (a.stat > b.stat) {
              result = -1;
            }
            return result;
          });

    }
    if(sortVal===2){

       newList=playerList.sort((a, b) => {
            let result = 0;
            if (a.stat > b.stat) {
              result = 1;
            } else if (a.stat < b.stat) {
              result = -1;
            }
            return result;
          });

    }

    return newList;

}