import './SmsChatWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faPhone,
  faUser,
  faInfo,
  faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import moment from 'moment'

function SmsChatWindow() {
  const [navDropDown, setNavDropDown] = useState(false)
  const [textFooter, setTextFooter] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [smsData, setSmsData] = useState([])

  function handleChange(event) {
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  const onClick = () => {
    navDropDown === false ? setNavDropDown(true) : setNavDropDown(false)
  }

  useEffect(() => {
    fetchSmsData()
  }, [])

  // Fetch smsData
  const fetchSmsData = async () => {
    const response = await fetch('/smsData?_sort=SentDate&_order=asc')
    const data = await response.json()
    const recipientTexts = data.filter((sms) => sms.Direction === 'inbound')
    const lastRecipientText = recipientTexts[recipientTexts.length - 1]
    const senderTexts = data.filter((sms) => sms.Direction !== 'inbound')
    const lastSenderText = senderTexts[senderTexts.length - 1]
    setTextFooter([lastRecipientText.Sid, lastSenderText.Sid])
    setSmsData(data)
    setIsLoading(false)
  }

  const testFooter = (id) => {
    textFooter.includes(id)
      ? setTextFooter((prevState) =>
          prevState.filter((stateId) => stateId !== id)
        )
      : setTextFooter((prevState) => [...prevState, id])
  }

  const testPicArray = [
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
  ]

  return (
    <div>
      <header className='sms-nav-header'>
        <div className='sms-nav-main'>
          <div className='sms-nav-back'>
            <FontAwesomeIcon icon={faChevronLeft} className='sms-nav-chevron' />
            <span className='badge'>11</span>
          </div>
          <div
            onClick={onClick}
            className={
              navDropDown === true ? 'ulAnimate flex-center' : 'flex-center'
            }
          >
            <ul>
              {testPicArray.map((avatar, index) => (
                <li key={index}>
                  <img src={avatar} alt='' />
                </li>
              ))}
            </ul>
            <div>
              <span className='sms-nav-recipients'>Anthony Carlisi</span>
              {navDropDown === true ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='sms-nav-recipients-chevron'
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className='sms-nav-recipients-chevron'
                />
              )}
            </div>
          </div>
        </div>
        {/* SMS Dropdown Menu */}
        <ul
          className={navDropDown === false ? 'no-display' : 'sms-nav-dropdown'}
        >
          <li>
            <FontAwesomeIcon icon={faPhone} className='circle-icon' />
            <p>call</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className='circle-icon' />
            <p>profile</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faInfo} className='circle-icon' />
            <p>info</p>
          </li>
        </ul>
      </header>

      <ul className='chat-window'>
        {smsData.map((obj, index) => (
          <li
            key={index}
            className={`sms-container  ${
              obj.Direction === 'inbound' ? 'sms-recipient' : 'sms-sender'
            } ${
              index + 1 < smsData.length && smsData[index + 1].From !== obj.From
                ? 'sms-mb'
                : ''
            }`}
          >
            <div className='sms-message-container'>
              <p
                className={`sms-message ${
                  (index + 1 < smsData.length &&
                    smsData[index + 1].From !== obj.From) ||
                  smsData.length - 1 === index
                    ? 'tail'
                    : console.log(
                        (index + 1 < smsData.length &&
                          smsData[index + 1].From !== obj.From) ||
                          smsData.length - 1 === index
                      )
                }`}
              >
                {smsData[index].Body}
              </p>
              {obj.Status === 'undelivered' ? (
                <i className='bi bi-exclamation-circle error'></i>
              ) : (
                ''
              )}
            </div>
            {(index + 1 < smsData.length &&
              smsData[index + 1].From !== obj.From) ||
            smsData.length - 1 === index ? (
              <p className='sms-footer'>
                {`${
                  obj.Status.charAt(0).toUpperCase() + obj.Status.slice(1)
                } ${moment(obj.SentDate).format('h:mm A')}`}
              </p>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>

      {/* <li className='sms-title'>Yesterday</li>

        <li className='sms-container sms-recipient group'>
          <p className='sms-header'>Anthony Carlisi</p>
          <div className='sms-message-container'>
            <p className='sms-message tail'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              ratione tempora molestias, eligendi debitis modi saepe.
              Consequatur officia, est, aut laboriosam nulla id, nisi molestiae
              labore voluptatibus ab voluptatum eum.
            </p>
            <div className='sms-avatar-wrapper'>
              <img
                // class='no-display'
                src='https://picsum.photos/50'
                alt=''
              ></img>
            </div>
          </div>
          <p className='sms-footer'>Sent 10:37 AM</p>
        </li> */}
      <footer>
        <textarea rows={1} onChange={handleChange}></textarea>
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </footer>
      {/* <footer>
        <div>
          <AutoGrowTextArea value={textarea} onChange={setTextarea} />
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </div>
      </footer> */}
    </div>
  )
}

export default SmsChatWindow
