import React from 'react';
import ExprenseList from '../../components/expense-list';
import TopFold from '../../components/topfold';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <TopFold/>
            <ExprenseList/>
        </div>
    )
}

export default Home
