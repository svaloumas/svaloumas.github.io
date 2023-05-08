import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        My name is <HighlightSpan>Stefanos Valoumas</HighlightSpan>.
      </p>
      <p>
        I'm a <HighlightAlt>software engineer</HighlightAlt> based in Athens,
        Greece.
      </p>
      <p>
        Programming enthusiast with experience in all phases of the development
        life cycle.
        <br /> This interest in CS was not affecting only my free time while I
        was working as a Civil engineer <br /> for construction companies, but
        also led me to the decision for a drastic career path change.
        <br /> Being in the industry since then, I've worked for Omilia
        (https://omilia.com/),
        <br /> Orfium (https://orfium.com), and Transifex
        (https://transifex.com).
      </p>
    </AboutWrapper>
  );
};

export default About;
