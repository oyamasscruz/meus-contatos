import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaDeContato from './containers/ListaDeContato'
import { Provider, useSelector } from 'react-redux'
import store, { RootReducer } from './store'

function Conteudo() {
  const { contatoSelecionado } = useSelector(
    (state: RootReducer) => state.contato
  )
  return (
    <Container style={{ display: 'flex' }}>
      <BarraLateral />
      {contatoSelecionado !== null && <ListaDeContato />}
    </Container>
  )
}
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Conteudo />
    </Provider>
  )
}

export default App
