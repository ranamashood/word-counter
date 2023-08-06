interface Props {
  field: string;
  value: number;
}

const Badge = ({ field, value }: Props) => {
  return (
    <div>
      {field}: {value}
    </div>
  );
};

export default Badge;
