import React from 'react'
// import PropTypes from 'prop-types'
// import {isChecked} from './index'
import { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox } from './styles'

const Checkbox = ({ ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={isActive} {...props} />
    <StyledCheckbox checked={isActive}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
// export default function Checkbox() {
//   return (
//     <CheckboxContainer>
//       <HiddenCheckbox />
//       <StyledCheckbox>
//         <Icon viewBox="0 0 24 24">
//           <polyline points="20 6 9 17 4 12" />
//         </Icon>
//       </StyledCheckbox>
//     </CheckboxContainer>
//   )
// }
