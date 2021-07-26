import React from "react";

import PropTypes from "prop-types";

import { Wrapper } from "./Button.styles";

type Props = {
  text: string;
  callback: () => void;
}

const Button: React.FC<Props> = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

// Button.propTypes = {
//   text: PropTypes.string,
//   callback: PropTypes.func,
// };

export default Button;
