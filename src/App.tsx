import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("Hello, Chronos Pomodoro!");

  return (
    <>
      <Heading>
        Hello, Chronos Pomodoro!
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>Welcome to your productivity app.</p>
    </>
  );
}
