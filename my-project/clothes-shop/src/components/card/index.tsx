import { ICard } from "../../interfaces";

const Card = (props: ICard): JSX.Element => {
  const { name, price, type, img, label, discount, key } = props;
  return (
    <div className="px-2 cursor-pointer mb-10" key={key}>
      <div>
        <img src={img} alt={name} />
        {label && <div>{label}</div>}
      </div>
      <div className="mt-2">
        <h2 className="text-lg">{name}</h2>
        <span className="text-lg">{type}</span>
        <p className="text-lg">{price}</p>
        {discount && <span>{discount}</span>}
      </div>
    </div>
  );
};

export { Card };
