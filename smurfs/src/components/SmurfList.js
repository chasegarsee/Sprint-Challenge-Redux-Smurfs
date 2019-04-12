import React from "react";

const SmurfList = props => {
  return (
    <div className="Smurf-List">
      {props.smurfs.map(smurf => (
        <div id={smurf.id} key={smurf.id}>
          <div>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
          <button onClick={(event, id = smurf.id) => props.delete(event, id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default SmurfList;
