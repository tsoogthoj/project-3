import React from "react";


import "./StaffInfo.css";


function StaffInfo(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>

  
    );
    return (
      <tr>
        {listItems}
      </tr>
    );
  }
            
export default StaffInfo;