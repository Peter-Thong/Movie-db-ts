import React from "react";

// import PropTypes from "prop-types";

import { Wrapper, Image } from "./Actor.styles";

type Props = {
  name: string;
  character: string;
   imageUrl: string;
}

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />

    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

// Actor.propTypes = {
//   name: PropTypes.string,
//   character: PropTypes.string,
//   imageUrl: PropTypes.string,
// };

export default Actor;
