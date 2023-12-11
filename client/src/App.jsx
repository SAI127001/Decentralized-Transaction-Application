import { Navbar, Welcome, EthereumChart, Footer, AboutCard, Transactions } from "./components";

const App = () => (
  
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      <EthereumChart/>
    </div>
    <AboutCard />
    <Transactions />
    <Footer />
  </div>
);

export default App;
