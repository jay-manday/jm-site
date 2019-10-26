import React from 'react'
import styled from 'styled-components'

export default () => (
  <Load>
    <h3>Loading...</h3>
  </Load>
)

const Load = styled.div`
  color: #aaa;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #222;
`
