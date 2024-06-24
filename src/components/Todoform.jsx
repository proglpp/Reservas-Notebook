import {useState} from 'react'

const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value,category);
    console.log(value, category);
    setValue(" ");
    setCategory(" ");
    
  };

  return (
    <div className="todo-form">
      <h2>Adicionar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite a entrada" value={value} onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Disponivel">Disponivel</option>
            <option value="Indisponivel">Indisponivel</option>
            <option value="Inativo">Inativo</option>
        </select>
        <button type="submit">Acervo</button>
      </form>
    </div>
  )
}

export default Todoform
