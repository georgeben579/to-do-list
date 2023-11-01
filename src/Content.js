import ItemList from "./ItemList";
// import emptyList from "../images/empty list.jpg";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p> Your List is Empty</p>
      )}
    </main>
  );
};
export default Content;

// to display list use map
