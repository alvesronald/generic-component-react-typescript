import "./styles.css";
import { Select } from "./components/Select";

const data = [
  { name: "Ronald", age: "20" },
  { name: "Luciano", age: "50" },
  { name: "Maria", age: "12" }
];

export default function App() {
  return (
    <Select
      data={data}
      renderOption={({ name }) => name}
      keyExtractor={({ age }) => age}
    />
  );
}
