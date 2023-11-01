import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ items, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={items.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(items.id)}
        checked={items.checked}
      />
      <label
        onDoubleClick={() => handleCheck(items.id)}
        style={items.checked ? { textDecoration: "line-through" } : null} // <----- if-else statement
      >
        {items.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(items.id)}
        role="button"
        aria-label={`delete ${items.items}`}
      />
    </li>
  );
};
export default LineItem;
