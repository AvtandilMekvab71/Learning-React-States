import {useState} from 'react'

export default function ShoppingList(){
    const [items, setItems] = useState(['Milk', 'Bread', 'Eggs'])
    const [newItem, setNewItem] = useState('')

    function addItem(){
            if(!newItem.trim()) return
            setItems([...items, newItem.trim()])
            setNewItem('')
        }
    function removeItem(item){
        setItems(items.filter(x => x !== item))
          // ! Crucial: You must update the state, otherwise the data is not stored
    }
    return(
        <div id = '007'>  
            <input
                type="text"
                value = {newItem}
                onChange = {(e) => setNewItem(e.target.value)}/>
            <button type='button' onClick = {addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    
                    <li key={index}>
                        {item}
                        <button onClick = {() => removeItem(item)}>Remove</button>
                    </li> 
                ))}
            </ul>
        </div>  
    )
}

// ! React re-executes the component function when state changes, that is why every time 'setItems' executes, the component automatically removes the item.
// TODO The protocol: stateUpdate -> renderTriggered ->  componentChanged