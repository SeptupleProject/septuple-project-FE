import React from "react";
import { Route } from "react-router-dom";
import formImage from "../assets/img/formImg.jpg";
export const FormTemplate = (props) => {
  const bgImageStyle = {
    height: "100vh",
    position: "relative",
    objectFit: "cover",
    zIndex: "1",
  };
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 px-0">
                <img style={bgImageStyle} className="py-0 " src={formImage} />
                <div className="img-overlay"></div>
              </div>
              <div className="col-4 text-center px-0">
                <props.component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
