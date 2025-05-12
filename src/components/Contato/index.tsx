import { ChangeEvent, useEffect, useState } from 'react'
import { Tipo } from './style'
import ContatoState from '../../models/Contato'
import { useDispatch } from 'react-redux'
import { editar, limparContatoSelecionado } from '../../store/reducers/contato'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoState

const Contato = ({
  id,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  tipo
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [alteracao, setAlteracao] = useState({
    nome: nomeOriginal,
    telefone: telefoneOriginal,
    email: emailOriginal,
    tipo
  })
  useEffect(() => {
    if (!estaEditando) {
      setAlteracao({
        nome: nomeOriginal,
        telefone: telefoneOriginal,
        email: emailOriginal,
        tipo
      })
    }
  }, [id, estaEditando])

  function cancelarEdicao() {
    setEstaEditando(false)
    setAlteracao({
      nome: nomeOriginal,
      telefone: telefoneOriginal,
      email: emailOriginal,
      tipo
    })
  }
  const dispatch = useDispatch()
  function ocultacontato() {
    dispatch(limparContatoSelecionado())
  }
  function atualizaCampo(campo: string, valor: string) {
    setAlteracao((prev) => ({
      ...prev,
      [campo]: valor
    }))
  }
  return (
    <>
      {estaEditando ? (
        <>
          <button onClick={cancelarEdicao}>Cancelar</button>
          <button
            onClick={() => {
              dispatch(editar({ ...alteracao, id }))
              setEstaEditando(false)
            }}
          >
            Salvar
          </button>
        </>
      ) : (
        <>
          <button onClick={ocultacontato}>&lt;</button>
          <button onClick={() => setEstaEditando(true)}>Editar</button>
        </>
      )}
      <div>
        <label htmlFor={nomeOriginal}>
          <input
            type="text"
            disabled={!estaEditando}
            onChange={(evento) => atualizaCampo('nome', evento.target.value)}
            value={alteracao.nome}
          />
        </label>
        <label>
          <input
            type="tel"
            disabled={!estaEditando}
            onChange={(evento) =>
              atualizaCampo('telefone', evento.target.value)
            }
            value={alteracao.telefone}
          />
        </label>
        <label htmlFor={emailOriginal}>
          <input
            type="email"
            disabled={!estaEditando}
            value={alteracao.email}
            onChange={(evento) => atualizaCampo('email', evento.target.value)}
          />
        </label>
        <label htmlFor={tipo}>
          <Tipo
            disabled={!estaEditando}
            parametro="modo"
            tipo={tipo}
            onChange={(e) =>
              setAlteracao((prev) => ({
                ...prev,
                tipo: e.target.value as enums.Tipo
              }))
            }
          >
            <option value={enums.Tipo.FAMILIA}>Família</option>
            <option value={enums.Tipo.PESSOAL}>Pessoal</option>
            <option value={enums.Tipo.TRABALHO}>Trabalho</option>
          </Tipo>
        </label>
      </div>
    </>
  )
}

export default Contato
