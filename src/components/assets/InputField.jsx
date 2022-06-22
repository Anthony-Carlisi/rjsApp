import styles from './InputField.module.css'
import '../global.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InputField({
  onChange,
  value,
  label,
  onKeyPress,
  enableError,
  errorLabel,
  type,
  maxLength,
  size,
  icon,
  enableIcon,
  onClick,
  inputMode,
}) {
  return (
    <div
      className={[styles.inputContainer, enableIcon && styles.symbol].join(' ')}
    >
      {enableIcon && (
        <div className={value && styles.filled}>
          <FontAwesomeIcon
            className={value ? styles.test : styles.inputIcon}
            color='#1f4058'
            icon={icon}
          />
        </div>
      )}
      <input
        size={size}
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onClick={onClick}
        inputMode={inputMode}
      />
      <label className={`${styles.inputLabel} ${value && styles.filled}`}>
        {label}
      </label>
      {enableError && <label className={styles.inputError}>{errorLabel}</label>}
    </div>
  )
}

export default InputField
