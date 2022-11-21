import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  return "Mi primera app: " + saludo;
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string,
};

PrimeraApp.defaultProps = {
  saludo: "Soy un saludo por defecto",
};

export default PrimeraApp;
