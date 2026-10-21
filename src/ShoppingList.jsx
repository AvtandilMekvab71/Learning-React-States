import {useState} from 'react'

export default function ShoppingList(){
    const [items, setItems] = useState(['Milk', 'Bread'])
    const [newItem, setNewItem] = useState('')

    function addItem(){
            if(!newItem.trim()) return
            setItems([...items, newItem.trim()])
            setNewItem('')
        }

    return(
        <div id = '007'>  
            <input
                type="text"
                value = {newItem}
                onChange = {(e) => setNewItem(e.target.value)}/>

            <button type = 'button' onClick = {addItem}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>  
    )
}