import {
  Container,
  Label,
  Input,
  Icon,
  InputContainer,
  ErrorLabel,
  Border,
} from './styles/InputField.styled'

function InputField({
  onChange,
  value,
  label,
  onKeyPress,
  errorLabel,
  type,
  maxLength,
  size,
  icon,
  onClick,
  inputMode,
  onFocus,
  onBlur,
  name,
}) {
  return (
    <Container>
      <Border>
        {icon && <Icon filled={value} icon={icon} />}
        <InputContainer>
          <Label filled={value}>{label}</Label>
          <Input
            size={size}
            onFocus={onFocus}
            onBlur={onBlur}
            type={type}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onClick={onClick}
            inputMode={inputMode}
            name={name}
          />
        </InputContainer>
      </Border>
      {errorLabel && <ErrorLabel>{errorLabel}</ErrorLabel>}
    </Container>
  )
}

export default InputField
