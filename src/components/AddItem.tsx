import React from "react";

interface AddItemProps {
    text: string
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: React.FormEvent) => void
}

function AddItem({ onSubmit, onInputChange, text }: AddItemProps) {

    return (
    <form onSubmit={onSubmit}>
        <input 
            data-testid="addItemField"
            onChange={onInputChange}
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