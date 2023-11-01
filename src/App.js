import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(newItem));
  };

  // fn to add an item to the list
  const addItem = (item) => {
    const listItems = [
      ...items,
      { id: items.length + 1, checked: false, item: item },
    ];
    setAndSaveItems(listItems);
  };

  //used to check and uncheck the checkbox. here what happens is that we go through the items array using map and using the id we convert the checkbox's value and reprint or redisplay the array
  const handleCheck = (id) => {
    const listItems = items.map((items) =>
      items.id === id
        ? {
            ...items,
            checked: !items.checked,
          }
        : items
    );
    setAndSaveItems(listItems);
  }; // this is if else statement exp after '=>' is the condition statement. if the condition is true, statements after '?' is executed or else the statements after ':' is executed

  //here an item is deleted by reprinting the whole array elements that does not equal to the id of the element that we want to delete.
  const handleDelete = (id) => {
    const listItems = items.filter((items) => items.id !== id);
    setAndSaveItems(listItems);
  };

  const handleAddItem = (e) => {
    e.preventDefault(); // used to prevent reloading when we submit the form
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");

    // console.log("hello ");
  };

  return (
    <div className="App">
      <Header title="Shopping List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem={handleAddItem}
      />
      <Content
        items={items.filter((items) =>
          items.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
