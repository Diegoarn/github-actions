import React from "react";
import { CharacterEntity } from "./model";
import "../styles.scss";

interface Props {
  member: CharacterEntity;
}

export const CharacterTableRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <tr
      key={member.id}
      className="target-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: " 1px solid black",
        width: "360px",
        padding: "6px",
      }}
    >
      <td>
        <img src={member.image} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.name}</span>
      </td>
    </tr>
  );
};
