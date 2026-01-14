import DayCard from "./components/DayCard";

function App() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div
       style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)", // 5 colunas
        gap: "20px", // espaço entre os cards
        padding: "20px",
      }}
    >
      <h1>Férias</h1>
      {days.map((day) => (
        <DayCard key={day} day={day} />
      ))}
    </div>
  );
}

export default App;

