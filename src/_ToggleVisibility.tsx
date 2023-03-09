import React from 'react'
import {BetterSystemStyleObject, SxProp, merge} from './sx'
import Box from './Box'

export type ToggleVisibilityProps = {
  isVisible?: boolean
  as?: React.ElementType
} & SxProp

const ToggleVisibility: React.FC<React.PropsWithChildren<ToggleVisibilityProps>> = ({
  isVisible = false,
  sx = {},
  as = 'span',
  children,
  ...props
}) => {
  return (
    <Box
      as={as}
      sx={merge<BetterSystemStyleObject>(
        !isVisible && {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        sx,
      )}
      {...props}
    >
      {children}
    </Box>
  )
}

export default ToggleVisibility
