import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'Bill Joe', salary: 900, promote: false, id: 1 },
        { name: 'Jhon Snow', salary: 1150, promote: false, id: 2 },
        { name: 'Kate Mike', salary: 1200, promote: false, id: 3 },
        { name: 'Lusine Susanna', salary: 1150, promote: false, id: 4 },
        { name: 'Aram Kristapor', salary: 900, promote: true, id: 5 },
        { name: 'Narek Stepan', salary: 950, promote: false, id: 6 },
    ]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}
export default App;