import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import Container, { Linha, ListaDeContatos } from './style'

const CardContato = () => {
  const { itens, contatoSelecionado } = useSelector(
    (state: RootReducer) => state.contato
  )
  const contatoSelecionadoId = itens.find((c) => c.id === contatoSelecionado)
  return (
    <>
      <Container>
        <ListaDeContatos>
          {contatoSelecionadoId && (
            <Linha parametro="modo" tipo={contatoSelecionadoId.tipo}>
              <Contato
                key={`${contatoSelecionadoId.id} - ${contatoSelecionadoId}`}
                {...contatoSelecionadoId}
              />
            </Linha>
          )}
        </ListaDeContatos>
      </Container>
    </>
  )
}

export default CardContato
