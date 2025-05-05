import { useState } from 'react'
import {
  BotaoCancelar,
  BotaoEditar,
  BotaoSalvar,
  BotaoVoltar,
  Botoes
} from './style'

const Contato = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  const cancelaEdicao = () => {
    setEstaEditando(false)
  }
  return (
    <Botoes>
      {estaEditando ? (
        <>
          <BotaoCancelar onClick={() => cancelaEdicao()}>
            Cancelar
          </BotaoCancelar>
          <BotaoSalvar>Salvar</BotaoSalvar>
        </>
      ) : (
        <>
          <BotaoVoltar>&lt;</BotaoVoltar>
          <BotaoEditar onClick={() => setEstaEditando(true)}>
            Editar
          </BotaoEditar>
        </>
      )}
    </Botoes>
  )
}

export default Contato
