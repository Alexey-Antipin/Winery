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
        <li  key={index}>
          <a className={`text ${index === 0 && cls}`} href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};
