import {
  Container,
  Label,
  Input,
  Border,
  Icon,
  Error,
  IconWrapper,
  List,
  Dropdown,
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
  autoComplete,
  options,
  onClickDropdown,
  onKeyDown,
  optionsIndex,
}) {
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
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
        />
        <Label icon={LeadingIcon}>{label}</Label>
        <IconWrapper style={{ width: '40.4px' }}>
          {TrailingIcon && (
            <Icon onClick={TrailingIconOnclick} icon={TrailingIcon} />
          )}
        </IconWrapper>
        <Error>{error}</Error>
        {options &&
          options.filter((item) => {
            return item.toLowerCase() === value.toLowerCase()
          }).length === 0 && (
            <Dropdown id='Dropdown'>
              {options.map((item, id) => (
                <List
                  aria-selected={id === optionsIndex}
                  key={id}
                  name={name}
                  onClick={() => onClickDropdown(item, name)}
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
