import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';
import styled from 'styled-components';

const Ellipse = ({ className }) => {
  return (
    <StyledEllipse className={className}>
      <div className="ellipse-1"></div>
      <div className="ellipse-2"></div>
    </StyledEllipse>
  );
};

const StyledEllipse = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  z-index: 0;

  @keyframes Ellipse1 {
    0% {
      left: 37.5%;
      right: 48.61%;
      top: 35.71%;
      bottom: 17.99%;
    }
    20% {
      left: 47.22%;
      right: 38.89%;
      top: 32.97%;
      bottom: 17.86%;
    }
    40% {
      left: 47.85%;
      right: 36.81%;
      top: 30.22%;
      bottom: 20.6%;
    }
    60% {
      left: 38.89%;
      right: 45.76%;
      top: 28.85%;
      bottom: 24.86%;
    }
    80% {
      left: 35.42%;
      right: 51.11%;
      top: 30.22%;
      bottom: 21.98%;
    }
    100% {
      left: 37.5%;
      right: 48.61%;
      top: 35.71%;
      bottom: 17.99%;
    }
  }

  @keyframes Ellipse1mob {
    0% {
      left: 25.83%;
      right: 39.44%;
      top: 45%;
      bottom: 20.78%;
    }
    20% {
      left: 37.22%;
      right: 28.06%;
      top: 42.19%;
      bottom: 23.28%;
    }
    40% {
      left: 32.78%;
      right: 32.5%;
      top: 46.56%;
      bottom: 18.91%;
    }
    60% {
      left: 44.17%;
      right: 20.56%;
      top: 49.53%;
      bottom: 16.25%;
    }
    80% {
      left: 39.17%;
      right: 24.44%;
      top: 54.53%;
      bottom: 10.94%;
    }
    100% {
      left: 25.83%;
      right: 39.44%;
      top: 45%;
      bottom: 20.78%;
    }
  }

  @keyframes Ellipse2 {
    0% {
      left: 47.15%;
      right: 42.36%;
      top: 59.34%;
      bottom: 15.11%;
    }
    20% {
      left: 41.67%;
      right: 47.64%;
      top: 45.6%;
      bottom: 25.55%;
    }
    40% {
      left: 42.36%;
      right: 46.11%;
      top: 35.16%;
      bottom: 35.58%;
    }
    60% {
      left: 43.33%;
      right: 45.14%;
      top: 43.96%;
      bottom: 23.35%;
    }
    80% {
      left: 44.86%;
      right: 45.14%;
      top: 42.45%;
      bottom: 29.12%;
    }
    100% {
      left: 47.15%;
      right: 42.36%;
      top: 59.34%;
      bottom: 15.11%;
    }
  }

  @keyframes Ellipse2mob {
    0% {
      left: 50.28%;
      right: 23.61%;
      top: 62.34%;
      bottom: 18.75%;
    }
    20% {
      left: 51.67%;
      right: 22.22%;
      top: 64.22%;
      bottom: 16.72%;
    }
    40% {
      left: 31.94%;
      right: 41.94%;
      top: 68.44%;
      bottom: 12.5%;
    }
    60% {
      left: 30.28%;
      right: 43.06%;
      top: 55.16%;
      bottom: 25.94%;
    }
    80% {
      left: 43.61%;
      right: 28.89%;
      top: 45.62%;
      bottom: 35.31%;
    }
    100% {
      left: 50.28%;
      right: 23.61%;
      top: 62.34%;
      bottom: 18.75%;
    }
  }

  .ellipse-1 {
    position: absolute;
    background-color: ${COLORS.RED.PRIMARY};
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    filter: blur(60px);
    left: 25.83%;
    right: 39.44%;
    top: 45%;
    bottom: 20.78%;
    animation: Ellipse1mob 13000ms linear infinite;

    ${BREAKPOINTS.DESKTOP} {
      width: 200px;
      height: 337px;
      filter: blur(100px);
      left: 37.5%;
      right: 48.61%;
      top: 35.71%;
      bottom: 17.99%;
      animation: Ellipse1 13000ms linear infinite;
    }
  }

  .ellipse-2 {
    position: absolute;
    background-color: ${COLORS.RED.LIGHT};
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    filter: blur(40px);
    animation: Ellipse2mob 13000ms linear infinite;
    left: 50.28%;
    right: 23.61%;
    top: 62.34%;
    bottom: 18.75%;

    ${BREAKPOINTS.DESKTOP} {
      width: 151px;
      height: 186px;
      left: 47.15%;
      right: 42.36%;
      top: 59.34%;
      bottom: 15.11%;
      filter: blur(60px);
      animation: Ellipse2 13000ms linear infinite;
    }
  }
`;

export default Ellipse;
