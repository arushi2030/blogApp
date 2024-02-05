import "./App.css";
import Item from './components/Item';
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    {
      itemName:'Nirma',
      itemDay:'20',
      itemYear: "1998"
    },
    {
      itemName:'Nirma2',
      itemDay:'203',
      itemYear: "19948"
    }
  ];

  return (
   <div>
      <Item name={response[0].itemName} >Item children</Item >
      <ItemDate day={response[0].day} month='January' year={response[0].year} />
      
      <Item name={response[1].itemName} />
      <ItemDate day={response[1].day} month='January' year={response[1].year} />
   </div>
  );
}

export default App;
