import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>svaloumas.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
