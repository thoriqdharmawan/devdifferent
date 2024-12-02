interface Props {
  label: string;
  value: string;
}
const ItmSection = ({ label, value }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-foreground">{label}</p>
      <h4 className="text-md font-semibold">{value}</h4>
    </div>
  );
};

export default ItmSection;
