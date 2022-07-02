import {
  Input,
  Container,
  IconContainer,
  Icon,
  Label,
  ErrorLabel,
  DropDown,
} from './styles/InputField.styled'

function InputField({
  onChange,
  value,
  label,
  onKeyPress,
  errorEnabled,
  errorLabel,
  type,
  maxLength,
  size,
  icon,
  enableIcon,
  onClick,
  inputMode,
  onFocus,
  onBlur,
  height,
  dropdownEnabled,
  dropdownOptions,
  onClickDropdown,
}) {
  return (
    <div>
      <Container height={height} enableIcon={enableIcon}>
        {enableIcon && (
          <IconContainer id='iconContainer' width={height} filled={value}>
            <Icon id='icon' filled={value} icon={icon} />
          </IconContainer>
        )}
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
        />
        <Label filled={value}>
          <div id='label'>{label}</div>
        </Label>
        {errorEnabled && <ErrorLabel>{errorLabel}</ErrorLabel>}
      </Container>
      {dropdownEnabled && (
        <DropDown width={size}>
          {dropdownOptions.map((value, index) => (
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
    </div>
  )
}

export default InputField
