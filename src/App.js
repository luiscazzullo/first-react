import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = () => {
  const students = ['Francisco', 'Hernan', 'Gastón', 'Javier'];
  return (
    <>
      <Header 
        title="Producto"
        isRed
      />
      <Body students={students} />
      <Footer />
    </>
  )
}

export default App;