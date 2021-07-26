import React from "react";

// import PropTypes from "prop-types";

import { Wrapper, Content, Text } from "./HeroImage.styles";

type Props = {
  image: string;
  title: string;
  text: string;
}

const HeroImage: React.FC<Props> = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

// HeroImage.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   text: PropTypes.string,
// };

export default HeroImage;
