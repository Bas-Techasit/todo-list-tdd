import './App.css';
import AddItem from './components/AddItem';

function App() {
  return (
    <>
      <h1 data-testid="title">Todo List</h1>
      <AddItem />
      <p>Todo List is empty!</p>
    </>
  )
}

export default App;
