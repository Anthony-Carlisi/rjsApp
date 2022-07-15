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
  DropdownClick,
  onKeyDown,
  autoComplete,
  activeSuggestionIndex,
  filteredSuggestions,
}) {
  const valueMatch =
    filteredSuggestions &&
    filteredSuggestions.filter((suggestion) => {
      return suggestion.toLowerCase() === value.toLowerCase()
    })

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
        {filteredSuggestions && valueMatch.length === 0 && (
          <Dropdown id='Dropdown'>
            {filteredSuggestions.map((item, index) => (
              <List
                aria-selected={index === activeSuggestionIndex}
                key={index}
                value={item}
                name={name}
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
