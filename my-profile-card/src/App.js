import "./App.css";
import Info from "./components/info/info.component";
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="profile-card-container">
      <Info />
      <About />
      <Footer />
    </div>
  );
}

export default App;
