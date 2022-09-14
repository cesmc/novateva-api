import React from "react";
import Films from "./Films";

const Characters = ({ filteredUsers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Eye color</th>
          <th>Films</th>
        </tr>
      </thead>
      {filteredUsers.map((character, id) => (
        <tbody key={id}>
          <tr>
            <td>{character.name}</td>
            <td>{character.gender}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.eye_color}</td>
            <td>
              <Films character={character} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Characters;
