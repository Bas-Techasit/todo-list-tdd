import './App.css';
import AddItem from './components/AddItem';
import ListItem from "./components/ListItem";
import React, {useState} from "react";
import {Item} from "./components/item";

function App() {
    const [items, setItem] = useState(initialState)
    const [text, setText] = useState<string>('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const id = items.length === 0 ? 1 : items.length + 1
        const newItem: Item = { id: id, text: text, isComplete: false}
        setItem([...items, newItem])
        setText('')
    }

    return (
        <>
            <h1 data-testid="title">Todo List</h1>
            <AddItem
                onInputChange={handleChange}
                onSubmit={handleSubmit}
                text={text}
            />
            <ListItem data={items}/>
            {items.length === 0 && <p>Todo List is empty!</p>}
        </>
    )
}

let initialState: Item[] = []


export default App
