import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {` 
              _                             _         
  ____ ____ _| |___ _  _ _ __  __ _ ___  __| |_____ __
 (_-< V / _' | / _ \\ || | '  \\/ _' (_-<_/ _' / -_) V /
 /__/\\_/\\__,_|_\\___/\\_,_|_|_|_\\__,_/__(_)__,_\\___|\\_/ 

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
              _                        
  ____ ____ _| |___ _  _ _ __  __ _ ___
 (_-< V / _' | / _ \ || | '  \/ _' (_-<
 /__/\_/\__,_|_\___/\_,_|_|_|_\__,_/__/
       _         
    __| |_____ __
  _/ _' / -_) V /
 (_)__,_\___|\_/ 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (v1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
