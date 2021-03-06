import React, { useContext } from 'react'
import styled from 'styled-components'

import CO2NumberContext from 'utils/CO2NumberContext'
import ModalContext from 'utils/ModalContext'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  font-size: 6em;

  ${(props) => props.theme.mq.small} {
    font-size: 12vw;
  }
`
const InputWrapper = styled.div`
  position: relative;
  flex: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2%;
    width: 104%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.second};
    border: 2px solid ${(props) => props.theme.colors.text};
    transform: rotate3d(1, -1, 0, 33deg) rotate(5.1deg);
  }
`
const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 0 0.3em;
  font-weight: 900;
  font-style: italic;
  color: ${(props) => props.theme.colors.main};
  text-align: right;
  background-color: transparent;
  border: none;
  transform: translate3d(0, 0, 10em);

  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
const Unit = styled.div`
  font-size: 0.6em;
  font-weight: 700;
  line-height: 1.9;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 200ms ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
export default function NumberInput() {
  const { CO2, setCO2 } = useContext(CO2NumberContext)
  const { setCO2E } = useContext(ModalContext)

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type='number'
          value={Math.round(CO2 * 100) / 100}
          onChange={(e) => {
            if (e.currentTarget.value <= 99999) {
              setCO2(e.currentTarget.value)
            }
          }}
        />
      </InputWrapper>
      <Unit onClick={() => setCO2E(true)}>
        kgCO<sub>2</sub>e
      </Unit>
    </Wrapper>
  )
}
