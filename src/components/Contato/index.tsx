import { useEffect, useState } from 'react'
import {
  BotaoCancelar,
  BotaoEditar,
  BotaoSalvar,
  BotaoVoltar,
  Botoes,
  Tipo,
  DadosDoContato,
  ContainerContato,
  Nome,
  Numero,
  Email,
  BotaoDeletar
} from './style'
import ContatoState from '../../models/Contato'
import { useDispatch } from 'react-redux'
import {
  deletarContatoSelecionado,
  editar,
  selecionarContato
} from '../../store/reducers/contato'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoState

const Contato = ({ id, nome, telefone, email, tipo }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [novoNome, setNovoNome] = useState(nome)
  const [novoTelefone, setNovoTelefone] = useState(telefone)
  const [novoEmail, setNovoEmail] = useState(email)
  const [novoTipo, setNovoTipo] = useState(tipo)

  useEffect(() => {
    setNovoNome(nome)
    setNovoTelefone(telefone)
    setNovoEmail(email)
    setNovoTipo(tipo)
  }, [nome, telefone, email, tipo])

  const editando = () => {
    setEstaEditando(true)
  }

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNovoNome(nome)
    setNovoTelefone(telefone)
    setNovoEmail(email)
    setNovoTipo(tipo)
  }

  const salvarEdicao = () => {
    const contatoParaEditar = {
      id,
      nome: novoNome,
      telefone: Number(novoTelefone),
      email: novoEmail,
      tipo: novoTipo
    }
    dispatch(editar(contatoParaEditar))
    alert('Contato atualizado com sucesso')
    setEstaEditando(false)
  }

  const voltarSelecionarContato = () => {
    dispatch(selecionarContato(null))
  }

  const deletarContato = () => {
    const confirmacao = window.confirm(
      `Tem certeza que deseja excluir o contato: ${nome}?`
    )
    if (confirmacao) {
      dispatch(deletarContatoSelecionado(id))
      dispatch(selecionarContato(null))
      alert('Contato deletado com sucesso')
    }
  }

  return (
    <ContainerContato>
      {estaEditando ? (
        <Botoes>
          <BotaoCancelar onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
          <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
        </Botoes>
      ) : (
        <Botoes>
          <BotaoVoltar onClick={voltarSelecionarContato}>&lt;</BotaoVoltar>
          <BotaoEditar onClick={editando}>Editar</BotaoEditar>
        </Botoes>
      )}
      <DadosDoContato estaEditando={estaEditando}>
        <label>
          <Nome
            estaEditando={estaEditando}
            type="text"
            disabled={!estaEditando}
            value={estaEditando ? novoNome : nome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </label>
        <label>
          <Numero
            estaEditando={estaEditando}
            type="tel"
            disabled={!estaEditando}
            value={estaEditando ? novoTelefone : telefone}
            onChange={(e) => setNovoTelefone(Number(e.target.value))}
          />
        </label>
        <label>
          <Email
            estaEditando={estaEditando}
            type="email"
            disabled={!estaEditando}
            value={estaEditando ? novoEmail : email}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
        </label>
        <label htmlFor={tipo}>
          <Tipo
            onChange={(e) => setNovoTipo(e.target.value as enums.Tipo)}
            value={estaEditando ? novoTipo : tipo}
            disabled={!estaEditando}
            parametro="modo"
            tipo={estaEditando ? novoTipo : tipo}
          >
            <option value={enums.Tipo.FAMILIA}>Família</option>
            <option value={enums.Tipo.PESSOAL}>Pessoal</option>
            <option value={enums.Tipo.TRABALHO}>Trabalho</option>
          </Tipo>
        </label>
        <BotaoDeletar estaEditando={estaEditando} onClick={deletarContato}>
          Deletar
        </BotaoDeletar>
      </DadosDoContato>
    </ContainerContato>
  )
}

export default Contato
