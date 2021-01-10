import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import StyleContext from 'utils/StyleContext'

import Theme from './themes/Theme'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5em 1em;
`
export default function Themes() {
  const { themes, theme, setTheme } = useContext(StyleContext)

  const [themeKeys, setThemeKeys] = useState([])
  useEffect(() => {
    setThemeKeys(Object.keys(themes))
  }, [themes])

  return (
    <Wrapper>
      {themeKeys.map((themeKey) => (
        <Theme
          theme={themes[themeKey]}
          current={themeKey === theme}
          onClick={() => setTheme(themeKey)}
        />
      ))}
    </Wrapper>
  )
}