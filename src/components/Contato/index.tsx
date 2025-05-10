import { Tipo } from './style'
import ContatoState from '../../models/Contato'
import { useDispatch } from 'react-redux'
import { editar, limparContatoSelecionado } from '../../store/reducers/contato'
import { useEffect, useState } from 'react'

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
    email: emailOriginal
  })
  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      telefoneOriginal.toString.length > 0 &&
      emailOriginal.length > 0
    ) {
      setAlteracao({
        nome: nomeOriginal,
        telefone: telefoneOriginal,
        email: emailOriginal
      })
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])
  function cancelarEdicao() {
    setEstaEditando(false)
    setAlteracao({
      nome: nomeOriginal,
      telefone: telefoneOriginal,
      email: emailOriginal
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
              dispatch(editar({ ...alteracao, id, tipo }))
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
          <Tipo parametro="modo" tipo={tipo}>
            {tipo}
          </Tipo>
        </label>
      </div>
    </>
  )
}

export default Contato
