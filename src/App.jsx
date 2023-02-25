import Info from "./components/Info"
import Head from "./components/Head"
import Footer from './components/Footer';


export default function App() {

  return (
    <div className="main-container">
      <div className="container">
        <Head />
        <Info />
        <Footer />
      </div>
    </div>
  )
}

