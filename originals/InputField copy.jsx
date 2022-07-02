import {
  Input,
  Container,
  Icon,
  Label,
  ErrorLabel,
  DropDown,
  InputContainer,
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
  options,
  onClickDropdown,
}) {
  return (
    <Container>
      <InputContainer>
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
      </InputContainer>

      {options && (
        <DropDown width={size}>
          {options.map((value, index) => (
            <ul key={index}>
              <li>
                <button value={value} onClick={onClickDropdown}>
                  {value}
                </button>
              </li>
            </ul>
          ))}
        </DropDown>
      )}
    </Container>
  )
}

export default InputField
