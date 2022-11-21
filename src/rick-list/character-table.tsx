import React from "react";
import { CharacterEntity, CharacterDetail } from "./model";
import { CharacterTableRow } from "./character-table-row";
import { cargarListaRick, cargarInfo } from "../conection/api";
import { useDebounce } from "use-debounce";
import "../styles.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export const CharacterTable: React.FC = () => {
  const [members, setMembers] = React.useState<CharacterEntity[]>([]);
  const [filter, setFilter] = React.useState("");
  const [debounceFilter] = useDebounce(filter, 1000);
  const [character, setCharacter] = React.useState<CharacterDetail>({
    name: "",
    status: "",
    species: "",
  });
  const [open, setOpen] = React.useState(false);

  const cargarLista = async () => {
    let listRick = await cargarListaRick(filter);
    setMembers(listRick.results);
  };

  const handleClickOpen = async (id) => {
    let loadInfo = await cargarInfo(id);
    setCharacter(loadInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    cargarLista();
  }, [debounceFilter]);

  return (
    <>
      <h1>Rick&Morty</h1>
      <h2>Select character:</h2>
      <div className="selector">
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div>
        <table>
          <thead>
            <tr
              className="target-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "360px",
                margin: "8px",
              }}
            >
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <>
                <div>
                  <Button onClick={() => handleClickOpen(member.id)}>
                    <CharacterTableRow key={member.id} member={member} />
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Name: {character.name}
                        <br />
                        Status: {character.status}
                        <br />
                        Species: {character.species}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} autoFocus>
                        Cerrar
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
