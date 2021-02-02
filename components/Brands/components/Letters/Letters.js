import { LettersContainer } from "./styles";
const Letters = ({ selected, setSelected }) => {
  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  return (
    <LettersContainer>
      {letters.map((e, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              if (selected.indexOf(e) === -1) {
                setSelected([e, ...selected]);
              } else {
                setSelected([...selected.filter((elem) => elem !== e)]);
              }
            }}
            className={selected.indexOf(e) !== -1 ? "selected" : ""}
          >
            {e}
          </div>
        );
      })}
    </LettersContainer>
  );
};

export default Letters;
