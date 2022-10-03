import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,army,setArmy,setBolts}) {
 
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} army={army}setArmy={setArmy} setbolts={setBolts} />
        ))}

       
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
