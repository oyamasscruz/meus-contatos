import { styled } from 'styled-components'
import * as enums from '../../utils/enums/Contato'
import variaveis from '../../styles/variaveis'

type TagProps = {
  tipo: enums.Tipo
  parametro: 'modo'
}

type NomeProps = {
  estaEditando: boolean
}

function mudaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'modo') {
    if (props.tipo === enums.Tipo.FAMILIA) return variaveis.corFamilia
    if (props.tipo === enums.Tipo.PESSOAL) return variaveis.corPessoal
    if (props.tipo === enums.Tipo.TRABALHO) return variaveis.corTrabalho
  }
  return variaveis.preto
}

export const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
`

export const DadosDoContato = styled.div<NomeProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.estaEditando ? '50vh' : '40hv')};
  transition: height 2s ease-in-out;
  border-radius: 16px;
`

export const Botoes = styled.div`
  margin-top: 16px;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`

export const BotaoEditar = styled.button`
  border-radius: 16px;
  padding: 8px;
  border: none;
  cursor: pointer;
  border:2px solid ${variaveis.corTrabalho};
  box-shadow: 0 1px 11px ${variaveis.corTrabalho};
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: ${variaveis.preto};
    border: 2px solid #fff;
`
export const BotaoVoltar = styled(BotaoEditar)`
  border-radius: 50%;
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid ${variaveis.corTrabalho};
  box-shadow: 0 1px 11px ${variaveis.corTrabalho};

  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: ${variaveis.preto};
    border: 2px solid #fff;
`

export const BotaoSalvar = styled(BotaoEditar)`
  background-color: #fff;
  color: #282928;

  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: ${variaveis.preto};
    border: 2px solid #fff;
`

export const BotaoCancelar = styled(BotaoEditar)`
  background-color: #fff;
  color: #282928;

  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: ${variaveis.preto};
    border: 2px solid #fff;
`

export const Tipo = styled.select<TagProps>`
  background-color: ${(props) => mudaCorDeFundo(props)};
  padding: 16px;
  border-radius: 16px;
  margin-top: 16px;
  border: 2px solid #fff;
  font-size: 24px;
  font-weight: bold;
`

export const Nome = styled.input<NomeProps>`
  font-weight: bold;
  font-size: 32px;
  margin: 24px 0;
  padding: 8px;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  border: ${(props) => (props.estaEditando ? '2px solid #fff' : 'none')};
  border-radius: 10px;
  text-align: center;
`

export const Numero = styled(Nome)`
  font-size: 24px;
`

export const Email = styled(Nome)`
  font-size: 24px;
`

export const BotaoDeletar = styled.button<NomeProps>`
  display: ${(props) => (props.estaEditando ? 'block' : 'none')};
  margin: 2rem;
  padding: 8px;
  background-color: #fff;
  color: red;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 1px 11px red;
    transition: box-shadow 0.5s ease-in-out;
  }
`
