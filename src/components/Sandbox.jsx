import { Container, Label, Input, Icon } from './styles/Sandbox.styled'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function InputField({ onChange, value, label, name, size, icon }) {
  label = 'test'
  size = 15
  // value = 2500
  icon = faDollarSign
  return (
    <Container>
      <Label filled={value} htmlFor={name}>
        Amount requested
      </Label>
      {/* <Icon icon={icon} /> */}
      <Input
        size={size}
        value={value}
        onChange={onChange}
        type='text'
        name={name}
        placeholder={'25,000'}
      />
    </Container>
  )
}

export default InputField
