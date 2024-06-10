import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pilih Bahasa" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Bahasa</SelectLabel>
          <SelectItem value="apple">Indonesia</SelectItem>
          <SelectItem value="banana">Inggris</SelectItem>
          <SelectItem value="blueberry">Malaysia</SelectItem>
          <SelectItem value="grapes">Jepang</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}