
import './App.css'
import Header from './components/header/Header'
import Section from './components/section/Section'

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Section 
        date="02 de jul, 2021"
        title="Agora é oficial: o Windows 11 está vindo"
        coment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
      />
      <Section 
        date="05 de jul, 2021"
        title="Tim Berners-Lee vai leiloar código-fonte da web"
        coment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero."
      />
    </div>
  )
}

export default App
