import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import CardContato from './containers/CardContato'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <CardContato />
      </Container>
    </>
  )
}

export default App
