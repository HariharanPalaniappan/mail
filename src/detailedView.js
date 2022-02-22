import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
const DetailedView = (props)=> {
    return(
        <div className="details-container">
            <h2>{props.data.subject}</h2>
            <div className="status-bar">
                <div className="profile-container">
                    <span><FaUserAlt/></span>
                    <div>
                        <p>{props.data.name}</p>
                        <span>to me</span>
                    </div>
                </div>
            </div>
            <div className="message-datails">
                    {props.data.message}
            </div>
        </div>
    );
}
export default DetailedView;