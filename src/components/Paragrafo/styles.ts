import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
    fontSize: 14px;
    color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
    line-height: 22px;
`
