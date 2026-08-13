
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  const wrapperStyles = {
    background:
      "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
    width: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
    // Add more inline styles as needed
  };

  return <div style={wrapperStyles}>{children}</div>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node,
};
