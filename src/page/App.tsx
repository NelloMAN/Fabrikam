import React from 'react';
import logo from '../logo.svg';
import './css/App.css';
import UserTable from '../component/UserTable';
import CompanyList from '../component/CompanyList';

function App() {
    return (
        <div className="content">
            <header className="row">
            </header>
            <section>
                <div className='row'>
                    <div className='col-2'>
                        <h2>Azienda: </h2>
                    </div>
                    <div className='col-2'>
                        <CompanyList />
                    </div>
                </div>
            </section>
            <section>
                <UserTable />
            </section>
        </div>
    );
}

export default App;
