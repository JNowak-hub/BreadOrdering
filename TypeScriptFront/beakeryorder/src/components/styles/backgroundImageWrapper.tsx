import styled from "styled-components";

const BackgroundImageWrapper = styled.div`
  /* The image used */
  background-image: url("/bread-login.jpg");

  /* Control the height of the image */
  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const ContainerWrapper = styled.div`
  /* Add styles to the form container */
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
  background-color: rgba;
`;
export { BackgroundImageWrapper, ContainerWrapper };
