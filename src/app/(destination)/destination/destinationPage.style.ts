import styled from "styled-components";
import mobileDestinationCover from "../../../../public/destination/background-destination-mobile.jpg";
import { Banner } from "@/components/Banner/Banner";

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
background: url(${mobileDestinationCover.src}) no-repeat;
background-size: "cover",
align-items: center;
padding: 5rem;
min-height: 100vh;
`;
