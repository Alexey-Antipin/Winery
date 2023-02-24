import "./index.scss";

type Props = {
  massive: Massive[];
  cls?: string;
};

type Massive = {
  text: string;
  href: string;
};

export const List: React.FC<Props> = ({ massive, cls }) => {
  return (
    <ul className="list">
      {massive.map((item, index) => (
        <li className={`text ${index === 0 && cls}`} key={index}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};
