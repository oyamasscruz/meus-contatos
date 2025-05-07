import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaDeContato from './containers/ListaDeContato'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContato />
      </Container>
    </Provider>
  )
}

export default App
