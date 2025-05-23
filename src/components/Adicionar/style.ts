import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

const BotaoAdicionar = styled(Link)`
  margin-top: 20px;
  margin-left: 20px;
  padding: 24px;
  height: 20px;
  text-decoration: none;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 24px;
  border: 2px solid ${variaveis.corTrabalho};
  box-shadow: 0 2px 8px ${variaveis.corTrabalho};

  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: ${variaveis.preto};
    border: 2px solid #fff;
  }
`

export default BotaoAdicionar
