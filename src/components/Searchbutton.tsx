import { ChangeEvent } from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  showButton?: boolean
  onSearchClick?: () => void
  buttonText?: string
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Ara...",
  label,
  showButton = false,
  onSearchClick,
  buttonText = "Ara"
}: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="mb-4">
      {label && <label className="form-label">{label}</label>}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {showButton && (
          <button className="btn btn-primary" type="button" onClick={onSearchClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchInput