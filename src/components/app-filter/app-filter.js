import './app-filter.css'

function AppFilter() {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type='button'
            >All employees</button>
            <button
                className="btn btn-outline-light"
                type='button'
            >To promote</button>
            <button
                className="btn btn-outline-light"
                type='button'
            >Salary more than 1000 Euro</button>
        </div>
    );
}
export default AppFilter;