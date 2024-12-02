import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  value: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  options: Option[];
}

export default function Dropdown(props: Props) {
  const { label, value, placeholder, options, onValueChange } = props;

  return (
    <div className="flex w-full flex-col gap-2 lg:w-fit">
      <p className="text-sm text-gray-600">{label}</p>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full lg:w-[220px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
