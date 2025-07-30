import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

export function App() {
  console.log("Hello, Chronos Pomodoro!");

  return (
    <>
      <Container>
        <Logo>Logo</Logo>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
