import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
          </div>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
