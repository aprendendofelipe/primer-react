import React from 'react'
import Box from './Box'
import {SxProp} from './sx'
import ToggleVisibility from './_ToggleVisibility'

type BaseProps = SxProp & {
  disabled?: boolean
  required?: boolean
  visuallyHidden?: boolean
  id?: string
}

export type LabelProps = BaseProps & {
  htmlFor?: string
  as?: 'label'
}

export type LegendOrSpanProps = BaseProps & {
  as: 'legend' | 'span'
  htmlFor?: undefined
}

type Props = LabelProps | LegendOrSpanProps

const InputLabel: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  disabled,
  htmlFor,
  id,
  required,
  visuallyHidden,
  sx,
  as = 'label',
}) => {
  return (
    <ToggleVisibility
      isVisible={!visuallyHidden}
      as={as}
      htmlFor={htmlFor}
      id={id}
      sx={{
        fontWeight: 'bold',
        fontSize: 1,
        display: 'block',
        color: disabled ? 'fg.muted' : 'fg.default',
        cursor: disabled ? 'not-allowed' : 'pointer',
        alignSelf: 'flex-start',
        ...sx,
      }}
    >
      {required ? (
        <Box display="flex" as="span">
          <Box mr={1}>{children}</Box>
          <span aria-hidden="true">*</span>
        </Box>
      ) : (
        children
      )}
    </ToggleVisibility>
  )
}

export default InputLabel
