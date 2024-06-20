import React from "react";
import Header from "./components/Header";
import EmployeeCard, { employees } from "./components/EmployeeList";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="envoltura">
      <Header />
      <Calculator />
      <EmployeeCard employees={employees} />
      <Footer />
    </div>
  );
}

export default App;
