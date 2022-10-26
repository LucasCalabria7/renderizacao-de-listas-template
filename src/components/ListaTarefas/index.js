import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Estudar React", "Finalizar Exercício", "Descansar"])

  const renderizaLista = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index} >
        <p>{tarefa}</p>
        <RemoveButton onClick={() => removeTarefa(tarefa)} >
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    )
  })


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    let copiaLista = [...lista]
    copiaLista.push(novaTarefa)
    setLista(copiaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) =>{
      return item !== tarefa
    })
    setLista(listaFiltrada)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa} >Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {renderizaLista}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
