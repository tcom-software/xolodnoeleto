import { DataEmptyContainer } from "./styles";

const DataEmpty = ({ title = "Пусто" }) => {
  return (
    <DataEmptyContainer>
      <h2>{title}</h2>
    </DataEmptyContainer>
  );
};

export default DataEmpty;
