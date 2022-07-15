import {
  Container,
  Label,
  Input,
  Border,
  Icon,
  Error,
  IconWrapper,
  Dropdown,
  List,
} from './styles/Sandbox.styled'

function Sandbox({
  onClick,
  onChange,
  value,
  label,
  name,
  size,
  placeholder,
  type,
  LeadingIcon,
  LeadingIconOnClick,
  TrailingIcon,
  TrailingIconOnclick,
  error,
  options,
  DropdownClick,
}) {
  const filteredOptions =
    options &&
    options.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  return (
    <Container>
      <Border>
        <IconWrapper>
          {LeadingIcon && (
            <Icon onClick={LeadingIconOnClick} icon={LeadingIcon} />
          )}
        </IconWrapper>
        <Input
          onClick={onClick}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          size={size}
          icon={LeadingIcon}
        />
        <Label icon={LeadingIcon}>{label}</Label>
        <IconWrapper style={{ width: '40.4px' }}>
          {TrailingIcon && (
            <Icon onClick={TrailingIconOnclick} icon={TrailingIcon} />
          )}
        </IconWrapper>
        <Error>{error}</Error>
        {options && value.toLowerCase() !== filteredOptions[0].toLowerCase() && (
          <Dropdown id='Dropdown'>
            {filteredOptions.map((item, index) => (
              <List
                aria-selected={index === 0}
                key={index}
                value={item}
                onClick={DropdownClick}
              >
                {item}
              </List>
            ))}
          </Dropdown>
        )}
      </Border>
    </Container>
  )
}

export default Sandbox
