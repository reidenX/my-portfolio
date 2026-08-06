import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select'
import type { Countries, FormDropdownProps } from '../../../types'

const FormDropdown = ({ setValue, value }: FormDropdownProps) => {
  const [countries, setCountries] = useState<Countries>([])

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name')
      const fetchedCountries = await response.json()
      setCountries([...fetchedCountries])
    }

    getCountries()
  }, [])

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
            {countries.map((country) => (
              <SelectItem key={country.name.common} value={country.name.common}>
                {country.name.common}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
export default FormDropdown
