import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  console.log("Hello, Chronos Pomodoro!");

  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <section>MENU</section>
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
