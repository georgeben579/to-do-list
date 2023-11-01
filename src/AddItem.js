import { FaPlus } from "react-icons/fa";
import { useRef } from "react"; // useRef is use to get focus back to the input element

const AddItem = ({ newItem, setNewItem, handleAddItem }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleAddItem}>
      <label htmlFor="addItem"></label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addItem"
        placeholder="Add Item "
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="btn"
        type="submit"
        aria-label="addItem"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
