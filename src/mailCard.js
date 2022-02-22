import './App.scss';
import { connect } from 'react-redux';
const Card = (props)=>{
    let heightvalue = props.settings === "compact" ? "50px" : "80px";
    return(
        <div key={props.details.id} style={{height : heightvalue}} id={props.details.id} className="card-container" onClick={(e)=>{props.event(e.target.id)}}>
            <div className='mail-details'>
                <p>{props.details.name}</p>
                <span>{props.details.subject}</span>
            </div>
            <span>{props.details.date}</span>
        </div>
    );
}
const mapStateToProps = state => {
    return {
      settings: state
    };
  };
const MailCard = connect(mapStateToProps)(Card);
export default MailCard;