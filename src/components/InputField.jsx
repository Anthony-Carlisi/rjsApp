import {
  Input,
  Container,
  Icon,
  Label,
  ErrorLabel,
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
      {icon && <Icon id='icon' filled={value} icon={icon} />}
      <Input
        size={size}
        icon={icon}
        errorLabel={errorLabel}
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
      <Label icon={icon} filled={value}>
        {label}
      </Label>
      {errorLabel && value && <ErrorLabel>{errorLabel}</ErrorLabel>}
    </Container>
  )
}

export default InputField
