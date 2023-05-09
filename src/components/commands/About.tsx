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
        Programming enthusiast with experience in all phases of the software
        development life cycle.
        <br /> Background in civil engineering with a strong interest in
        computer science that eventually led to a career pivot.
        <br /> Being in the tech industry since then, I've worked for Omilia
        (https://omilia.com/),
        <br /> Orfium (https://orfium.com), and Transifex
        (https://transifex.com).
      </p>
      <p>
        Always looking into the opportunity to get involved in open-source
        projects. In love with Go, Python and C, <br /> actively learning Rust.
        Feel free to reach out if you need help with your projects.
      </p>
    </AboutWrapper>
  );
};

export default About;
