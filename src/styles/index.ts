import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Roboto Mono, sans-serif;
  color: #e6e8ec;
  background-color: #282928;
  }
  `
export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  justify-content: spacebetween;
  margin: 1rem;
`

export default EstiloGlobal
