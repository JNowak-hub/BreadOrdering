import styled from "styled-components";

const BackgroundImageWrapper = styled.div`
  /* The image used */
  background-image: url("/bread-login.jpg");

  /* Control the height of the image */
  min-height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
`;

const ContainerWrapper = styled.div`
  /* Add styles to the form container */
  position: relative;
  right: 2px;
  margin: 20px;
  max-width: 300px;
  padding: 2px;
  background-color: rgba;
`;
export { BackgroundImageWrapper, ContainerWrapper };
