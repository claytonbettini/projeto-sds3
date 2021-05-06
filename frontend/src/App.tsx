import DataTable from "comonents/DataTable";
import Footer from "comonents/Footer";
import NavBar from "comonents/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
