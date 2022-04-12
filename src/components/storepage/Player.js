import playerStyle from "./Player.module.css";
const Player = (props) => {
  const sellHandler = () => {
    props.funcCall(props.data.id);
  };

  const buyHandler = () => {
    props.funcCall(props.data.id);
  };


  return (
    <div key={props.data.id} className={playerStyle.wContainer}>
      <div className={playerStyle.pcontainer}>
        <p>
          {props.data.name +
            " Rating: " +
            props.data.stat +
            " " +
            props.data.country +
            " Pos: " +
            props.data.position}
        </p>
      </div>
      {props.saleType === "sell" && (
        <button onClick={sellHandler}>SELL ${props.data.points}</button>
      )}
      {props.saleType === "buy" && (
        <button onClick={buyHandler}>BUY ${props.data.points}</button>
      )}
    </div>
  );
};

export default Player;
