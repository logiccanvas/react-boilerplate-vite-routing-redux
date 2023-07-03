import React, { memo } from "react";

import Spin from "./Spin";

import "./style.scss";

const Loader = () => {
  return (
    <div className="app-loader">
      <Spin />
    </div>
  );
};

export default memo(Loader);
