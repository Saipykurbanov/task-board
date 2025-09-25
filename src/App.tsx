import './style/style.css';
import Statistics from './blocks/statistics/Statistics';
import Filters from './blocks/filters/Filters';
import TaskList from './blocks/task_list/TaskList';
import Pagination from './blocks/pagination/Pagination';
import Title from './blocks/title/Title';
import Form from './blocks/form/Form';
import Detail from './blocks/detail/Detail';

function App() {

  return (
    <main>

      <Title />
      <Statistics />
      <Filters />
      <TaskList />
      <Pagination />
      <Form />
      <Detail />

    </main>
  )
}

export default App
