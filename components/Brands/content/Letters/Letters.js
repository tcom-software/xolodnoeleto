import { LettersContainer } from "./styles";
const Letters = ({ selected, setSelected }) => {
  const letters = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ];
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
