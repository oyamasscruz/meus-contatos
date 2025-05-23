import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ListaDeContato from '../ListaDeContato'
import Adicionar from '../../components/Adicionar'
import { Container } from '../../styles'
import BarraLateral from '../BarraLateral'

function Conteudo() {
  const { contatoSelecionado } = useSelector(
    (state: RootReducer) => state.contato
  )
  return (
    <Container style={{ display: 'flex' }}>
      <BarraLateral />
      {contatoSelecionado !== null && <ListaDeContato />}
      {contatoSelecionado === null && <Adicionar />}
    </Container>
  )
}
export default Conteudo
