import React from "react";

const Icon = (props) => {
  const iconStyle = {
    color: `${props.color}`,
    fontSize: `${props.fontSize}`,
    paddingRight: `${props.paddingRight}`,
  };
  return (
    <div className="icon-component" style={iconStyle}>
      <i className={`${props.content}`}></i>
    </div>
  );
};

export default Icon;
