import React from "react";

const Films = ({ character }) => {
  return (
    <div>
      {character.films.map((films, id) => (
        <div key={id}>
          <p>{films}</p>
        </div>
      ))}
    </div>
  );
};

export default Films;
