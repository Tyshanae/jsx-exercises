const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Tyshanae" />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
