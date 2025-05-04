import Container, {
  CardPessoal,
  CardFamilia,
  CardTrabalho,
  NomeContato
} from './style'

const BarraLateral = () => {
  return (
    <Container>
      <CardFamilia>
        <NomeContato>Azélia Soares</NomeContato>
      </CardFamilia>
      <CardFamilia>
        <NomeContato>Danielle Cantidio</NomeContato>
      </CardFamilia>
      <CardTrabalho>
        <NomeContato>Carlos Luneta</NomeContato>
      </CardTrabalho>
      <CardPessoal>
        <NomeContato>Jhonny Bravo</NomeContato>
      </CardPessoal>
      <CardPessoal>
        <NomeContato>Murilo Pires</NomeContato>
      </CardPessoal>
      <CardTrabalho>
        <NomeContato>Denise Fragoso</NomeContato>
      </CardTrabalho>
    </Container>
  )
}

export default BarraLateral
