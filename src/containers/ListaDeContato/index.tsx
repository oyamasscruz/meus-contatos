import Contato from '../../components/Contato'
import Container, { Email, Form, Nome, Numero } from './style'

const CardContato = () => {
  return (
    <Container>
      <Contato />
      <Nome>Danielle Cantidio</Nome>
      <Numero>
        <p>+62982134202</p>
      </Numero>
      <Email>
        <p>daniellecantidio@gmail.com</p>
      </Email>
      <Form>
        <input type="checkbox" />
        <label htmlFor="">Família</label>
        <input type="checkbox" />
        <label htmlFor="">Pessoal</label>
        <input type="checkbox" />
        <label htmlFor="">Trabalho</label>
      </Form>
    </Container>
  )
}

export default CardContato
