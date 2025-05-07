import { ChangeEvent, useState } from 'react'
import {
  BotaoCancelar,
  BotaoEditar,
  BotaoSalvar,
  BotaoVoltar,
  Botoes,
  Nome
} from './style'

type Props = {
  name: string
}

const Contato = ({ name }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [editandoTexto, setEditandoTexto] = useState(name)
  const cancelaEdicao = () => {
    setEstaEditando(false)
  }
  function mostraTexto(evento: ChangeEvent<HTMLInputElement>) {
    setEditandoTexto(evento.target.value)
  }
  return (
    <>
      {estaEditando ? (
        <>
          <Botoes>
            <BotaoCancelar onClick={() => cancelaEdicao()}>
              Cancelar
            </BotaoCancelar>
            <BotaoSalvar>Salvar</BotaoSalvar>
          </Botoes>
          <Nome type="text" value={editandoTexto} onChange={mostraTexto} />
        </>
      ) : (
        <>
          <Botoes>
            <BotaoVoltar>&lt;</BotaoVoltar>
            <BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </BotaoEditar>
          </Botoes>
          <Nome type="text" value={editandoTexto} readOnly />
        </>
      )}
    </>
  )
}

export default Contato
