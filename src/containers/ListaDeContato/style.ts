import styled from 'styled-components'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  tipo: enums.Tipo
  parametro: 'modo'
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  align-items: center;
  border-radius: 10px;
`
export const Linha = styled.li<TagProps>`
  list-style: none;
  border-radius: 10px;
`

export const Numero = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 10px;
  font-weight: light;
  font-size: 16px;
`
export const Email = styled(Numero)`
  font-size: 16px;
  font-weight: light;
`
export const Form = styled(Numero)`
  font-size: 16px;
  font-weight: light;
`

export const ListaDeContatos = styled.ul`
  width: 60%;
  box-shadow: 0 2px 8px;
  border-radius: 10px;
`
export default Container
