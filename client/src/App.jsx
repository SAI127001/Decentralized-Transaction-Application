import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import EthereumChart from "./components/EthereumChart";

const App = () => (
  
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      <EthereumChart/>
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
