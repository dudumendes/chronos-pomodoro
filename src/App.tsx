import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  console.log("Hello, Chronos Pomodoro!");

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
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
