import { Container, Label, Input, Wrapper } from './styles/Sandbox.styled'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function InputField({
  onClick,
  onChange,
  value,
  label,
  name,
  size,
  icon,
  placeholder,
  type,
}) {
  label = 'Amount Requested'
  size = 15
  // value = 2500
  placeholder = 'placeholder'
  icon = faDollarSign
  return (
    <Container>
      <Wrapper>
        <span>test</span>
        <Input
          onClick={onClick}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          size={size}
        />
        <Label>{label}</Label>
      </Wrapper>
    </Container>
  )
}

export default InputField
