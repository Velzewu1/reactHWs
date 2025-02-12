import React, {useState} from 'react'; 
 
function TodoList({ onSave, todos, onDelete, onCancel, onCheck, checkedList }) {
    const [inputValue, setInputValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    // const [checked, setChecked] = useState(false);

    function handleSave() {
        if (inputValue.trim()) {
            onSave(inputValue, editingIndex);
            setInputValue('');
            setEditingIndex(null);
        }
    }

    function handleEdit(index) {
        setEditingIndex(index);
        setInputValue(todos[index]);
    }

    function handleCancel() {
        onCancel();
        setEditingIndex(null);
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={checkedList[index]} onChange={() => onCheck(index)} />
                        {editingIndex === index ? (
                            <>
                                <input
                                    placeholder="Edit your task"
                                    value={inputValue}
                                    type="text"
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default TodoList;
