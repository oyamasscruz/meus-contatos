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
import { useDispatch, useSelector } from 'react-redux'
import {
  deletarContatoSelecionado,
  editar,
  selecionarContato
} from '../../store/reducers/contato'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

type Props = ContatoState

const Contato = ({ id, nome, telefone, email, tipo }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contatoEditando, setContatoEditando] = useState({
    nome,
    telefone,
    email,
    tipo
  })

  useEffect(() => {
    if (!estaEditando) {
      setContatoEditando({
        nome,
        telefone,
        email,
        tipo
      })
    }
  }, [nome, telefone, email, tipo, estaEditando])

  const editando = () => {
    setEstaEditando(true)
  }

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setContatoEditando({ nome, telefone, email, tipo })
  }

  const salvarEdicao = () => {
    if (!contatoEditando.nome.trim()) {
      alert('O contato precisa ter um nome')
      return
    }
    const contatoParaEditar = {
      id,
      nome: contatoEditando.nome,
      telefone: Number(contatoEditando.telefone),
      email: contatoEditando.email,
      tipo: contatoEditando.tipo
    }
    dispatch(editar(contatoParaEditar))
    alert('Contato atualizado com sucesso')
    setEstaEditando(false)
  }

  const voltarSelecionarContato = () => {
    dispatch(selecionarContato(null))
  }

  const atualizaCampo = (campo: string, valor: any) => {
    if (campo === 'telefone') {
      valor = valor === '' ? 0 : Number(valor)
      if (isNaN(valor)) {
        alert('Por favor, digite apenas números para o telefone')
        return
      }
    }
    setContatoEditando((prev) => ({
      ...prev,
      [campo]: valor
    }))
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
            value={estaEditando ? contatoEditando.nome : nome}
            onChange={(e) => atualizaCampo('nome', e.target.value)}
          />
        </label>
        <label>
          <Numero
            estaEditando={estaEditando}
            type="tel"
            disabled={!estaEditando}
            value={estaEditando ? contatoEditando.telefone : telefone}
            onChange={(e) => atualizaCampo('telefone', Number(e.target.value))}
          />
        </label>
        <label>
          <Email
            estaEditando={estaEditando}
            type="email"
            disabled={!estaEditando}
            value={estaEditando ? contatoEditando.email : email}
            onChange={(e) => atualizaCampo('email', e.target.value)}
          />
        </label>
        <label htmlFor={tipo}>
          <Tipo
            onChange={(e) => {
              const tipoSelecionado = e.target.value
              if (
                Object.values(enums.Tipo).includes(
                  tipoSelecionado as enums.Tipo
                )
              ) {
                atualizaCampo('tipo', tipoSelecionado)
              }
            }}
            value={estaEditando ? contatoEditando.tipo : tipo}
            disabled={!estaEditando}
            parametro="modo"
            tipo={estaEditando ? contatoEditando.tipo : tipo}
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
