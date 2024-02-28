import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import AppRoutes from './Components/Routers/routes';


function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
