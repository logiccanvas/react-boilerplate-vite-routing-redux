import React, { Suspense } from "react";
import PropTypes from "prop-types";

import Loader from "@/components/widgets/Loader";

const AppSuspense = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};

AppSuspense.defaultProps = {
  children: null,
};

export default AppSuspense;
