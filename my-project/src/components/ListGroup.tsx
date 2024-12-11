import { MouseEvent, useState } from "react";

//{item:[], heading:string}

interface Props {
  items: string[];
  heading: string;

  //(item: string) => void

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook allows us to tap into built-in features in react
  // handling events
  //function
  //state

  //passing data via props
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleClick = (event: MouseEvent, index: number, item: string) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1> {heading}</h1>
      {/* {items.length === 0 ? <p>No Item found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      {/* true && 'Duc' => Duc */}
      <ul className="list-group">
        {/* Rendering list */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              handleClick(event, index, item);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
