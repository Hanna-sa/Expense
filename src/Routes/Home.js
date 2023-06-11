import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
       <div className="App">
        <div className="Glass">
         <Navbar />      
          <h1 style={{ padding: 150 }}>This is home</h1>              
      </div>
     </div>
  );
}
export default Home;
