import { useDispatch, useSelector } from 'react-redux'
import Container, { BotaoComCor } from './style'
import { RootReducer } from '../../store'
import { editar, selecionarContato } from '../../store/reducers/contato'

const BarraLateral = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const dispatch = useDispatch()
  const contatos = itens
  return (
    <Container>
      {contatos.map((t) => (
        <BotaoComCor
          onClick={() => dispatch(selecionarContato(t.id))}
          parametro="modo"
          tipo={t.tipo}
          key={t.tipo}
        >
          {t.nome}
        </BotaoComCor>
      ))}
    </Container>
  )
}

export default BarraLateral
