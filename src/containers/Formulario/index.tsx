import { FormEvent, useState } from 'react'
import {
  Section,
  Container,
  Email,
  Form,
  Botao,
  Nome,
  Telefone,
  Titulo
} from './styles'
import * as enums from '../../utils/enums/Contato'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionarContato } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [novoNome, setNovoNome] = useState('')
  const [novoNumero, setNovoNumero] = useState(0)
  const [novoEmail, setNovoEmail] = useState('')
  const [novoTipo, setNovoTipo] = useState(enums.Tipo.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const nomeEValido = novoNome.length > 3
    const numeroEValido = /^\d+$/.test(String(novoNumero))
    const emailEValido = /^[^\s@]+@[^\s@]+\.com$/.test(novoEmail)

    if (!nomeEValido) {
      alert('O nome precisa ter ao menos 3 palavras!')
      return
    }
    if (!numeroEValido) {
      alert('O telefone precisa conter apenas números!')
      return
    }
    if (!emailEValido) {
      alert('O e-mail deve ser válido e terminar com ".com".')
      return
    }

    dispatch(
      adicionarContato({
        nome: novoNome,
        telefone: Number(novoNumero),
        email: novoEmail,
        tipo: novoTipo
      })
    )
    alert('Contato criado com sucesso!!!')
    navigate('/')
  }

  const cancelarCadastro = () => {
    const confirmacao = window.confirm(
      'Tem certeza que você cancelar? Todo o conteúdo será apagado'
    )
    if (confirmacao) {
      setNovoNome('')
      setNovoNumero(0)
      setNovoEmail('')
      setNovoTipo(enums.Tipo.FAMILIA)
    }
  }
  return (
    <Section>
      <Container>
        <Botao onClick={cancelarCadastro}>Cancel</Botao>
        <Titulo>{!novoNome ? 'Novo Contato' : novoNome}</Titulo>
        <Botao onClick={cadastrarContato}>Concluir</Botao>
      </Container>
      <Form action="">
        <label>Nome</label>
        <Nome
          value={novoNome}
          type="text"
          onChange={(e) => setNovoNome(e.target.value)}
        />
        <label>Telefone</label>
        <Telefone
          type="tel"
          inputMode="numeric"
          value={novoNumero}
          onChange={(e) => {
            const valorDigitado = e.target.value
            if (/^\d*$/.test(valorDigitado)) {
              setNovoNumero(Number(valorDigitado))
            }
          }}
        />
        <label>Email</label>
        <Email
          value={novoEmail}
          type="email"
          onChange={(e) => setNovoEmail(e.target.value)}
        />
        <select
          onChange={(e) => setNovoTipo(e.target.value as enums.Tipo)}
          value={novoTipo}
        >
          <option value={enums.Tipo.FAMILIA}>FAMILIA</option>
          <option value={enums.Tipo.PESSOAL}>PESSOAL</option>
          <option value={enums.Tipo.TRABALHO}>TRABALHO</option>
        </select>
      </Form>
    </Section>
  )
}

export default Formulario
