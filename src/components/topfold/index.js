import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {ImCancelCircle} from 'react-icons/im';
import { Link } from 'react-router-dom';
import {FaAngleLeft} from 'react-icons/fa';
import './topfold.css'
import { useDispatch } from 'react-redux';
import { searchExpense } from "../../redux/actions/expenses";

const TopFold = () => {

    const [query, setQuery] = useState('')

    const dispatch = useDispatch();
    const handleQuery = (e) => {
      setQuery(e.target.value);
      dispatch(searchExpense(e.target.value));
    };

    return (
       
         <div className="topfold">
               {window.location.pathname==='/' ? (<div className="home-topfold">
                 <div className="searchbar">
                     <i><AiOutlineSearch/></i>
                     <input placeholder='Search for expenses' value={query} onChange={(e)=>handleQuery(e)} />
                 </div>
                 <Link to="/add-expense" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
             <div className="add-button">
              <i><IoIosAddCircleOutline/></i>
              <label>Add</label>
            </div>
            </Link>
             </div>):(


                <div className="add-topfold">
                <Link to="/" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                <div className="add-topfold-button">
                    <i><FaAngleLeft/></i>
                    <label>Back</label>
                </div>
                </Link>
                <Link to="/" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                <div className="add-topfold-button">
                    <i><ImCancelCircle/></i>
                    <label>Cancel</label>
                </div>
                </Link>
                </div>
             )}
            
         </div>

    )
}

export default TopFold
