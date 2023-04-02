import { useState } from "react";

function AddItem() {
    const [text, setText] = useState('')
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }    

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setText('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
            data-testid="addItemField"
            onChange={handleChange}
            value={text}
        />
        <button 
            data-testid="addButton" 
            disabled={text === ''} >
            Add
        </button>
    </form>
    )
}

export default AddItem