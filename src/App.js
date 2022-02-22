import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import './App.scss';
import {inbox} from './api';
import MailCard from "./mailCard";
import DetailedView from "./detailedView";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';

function App(props) {
  const [previewMail,setPreviewMail] =useState({});
  useEffect(()=>{
    setPreviewMail(inbox[0]);
  },[])
  const detailedView = (value)=>{
    inbox.map(ele => ele.id === value ? setPreviewMail(ele) : null);
  }
  return (
    <div className="App">
      <div className="header">
        <span>mail</span>
        <input type="search" className="search" placeholder="Search"/>
        <button className="setting-btn" onClick={props.handleClassicClick}>classic</button>
        <button className="setting-btn" onClick={props.handleCompactClick}>compact</button>
        <span><FaUserAlt/></span>
      </div>
      <div className="container">
        <div className="side-bar">
          <button className="compose-btn">Compose</button>
          <ul>
            <li>Inbox</li>
            <li>sent</li>
          </ul>
        </div>
        <div className="main">
          <div className="mail-list">
            {
              inbox && inbox.map((ele)=>{
                return <MailCard details={ele} event={detailedView}/>;
              })
            }
          </div>
          <div className="mail-detailed">
            {previewMail && 
            <DetailedView data={previewMail}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToPros = state => {
  return {
    settings: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClassicClick: () => dispatch({ type: 'setClassic' }),
    handleCompactClick: () => dispatch({type: 'setCompact'})
  }
};
const Home = connect(mapStateToPros, mapDispatchToProps)(App);
export default Home;
