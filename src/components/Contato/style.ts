import { styled } from 'styled-components'

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
`
export const BotaoVoltar = styled(BotaoEditar)`
  border-radius: 50%;
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BotaoSalvar = styled(BotaoEditar)`
  background-color: #fff;
  color: #282928;
`

export const BotaoCancelar = styled(BotaoEditar)`
  background-color: #fff;
  color: #282928;
`

export const Nome = styled.input`
  font-weight: bold;
  font-size: 32px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 10px;
  border: none;
`
