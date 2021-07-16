import React, { Fragment} from "react";
import "./ListItem.css";

function ListItem(props) {
  return (<Fragment>
      <div className="card">
          <p>{props.id}</p>
          <p>{props.title}</p>
          <p>{props.amount}</p>
          <p>{props.date.toDateString()}</p>
          <p>{props.tag}</p>
      </div>
  </Fragment>);
}

export default ListItem;
