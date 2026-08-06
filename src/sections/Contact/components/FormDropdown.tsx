import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select'
import type { FormDropdownProps } from '../../../types'

const FormDropdown = ({ countries, setValue, value }: FormDropdownProps) => {
  return (
    <div className="mb-5">
      <label htmlFor="dropdown" className="field-label">
        Country
      </label>
      <Select id="dropdown" name="dropdown" onValueChange={setValue} value={value} required>
        <SelectTrigger className="w-full mt-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            {countries
              .filter((country) => country.names.common)
              .map((country) => (
                <SelectItem key={country.names.common} value={country.names.common}>
                  {country.names.common}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
export default FormDropdown
