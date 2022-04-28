import React from 'react';
import './App.css'
import {CatsForm} from "./components/CatsForm";
import {DogsForm} from "./components/DogsForm";
import {Cats} from "./components";
import {Dogs} from "./components";

const App = () => {
    return (
        <div>
            <div className={'flex'}>
                <CatsForm/>
                <DogsForm/>
            </div>

            <hr/>

            <div className={'flex'}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;