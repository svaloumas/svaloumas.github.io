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
        Computer science professional with comprehensive experience across all stages of the software development lifecycle.<br /> 
        A former civil engineer who successfully transitioned into software development, driven by a passion for technology.<br /> 
        Known for creativity, problem-solving abilities, and exceptional organizational skills.<br /> 
        Adept at meeting strict deadlines, adaptable to changing environments, and a strong team player.<br /> 
        Enthusiastic about mentoring and committed to pragmatic, high-quality solutions.
      </p>
      <p>
        Always looking into the opportunity to get involved in open-source
        projects. In love with Go, Python and C.<br/>
        Feel free to reach out if you need help with your projects.
      </p>
    </AboutWrapper>
  );
};

export default About;
