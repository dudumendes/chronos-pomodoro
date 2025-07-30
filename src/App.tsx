import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

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
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" id="taskName" name="taskName" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 </p>
          </div>

          <div className="formRow">
            <button type="submit">Start</button>
          </div>
        </form>
      </Container>
    </>
  );
}
