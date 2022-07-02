import { FlexWrapper, Card } from './styles/CardSelect.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardSelect({ onClick, array, name, currentValues }) {
  return (
    <FlexWrapper>
      {array.map(({ value, icon }, index) => (
        <ul key={index}>
          <li>
            <Card
              value={value}
              currentValues={currentValues}
              array={array}
              onClick={onClick}
              name={name}
            >
              {icon && (
                <FontAwesomeIcon
                  size='2x'
                  id='icon'
                  className='entity-icon'
                  color='#1f4058'
                  icon={icon}
                />
              )}
              <h3>{value}</h3>
            </Card>
          </li>
        </ul>
      ))}
    </FlexWrapper>
  )
}

export default CardSelect
