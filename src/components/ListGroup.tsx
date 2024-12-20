function ListGroup() {
  let items = ["l", "Fransisco", "Tokyo", "London", "Paris"];

  // If statement can only br outside of return ()
  //   if (items.length == 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //   }

  //let message = items.length === 0 ? <p>No item found</p> : null;

  // if i have different number of possible meddages i could use a function and change the input
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null
  //   }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
