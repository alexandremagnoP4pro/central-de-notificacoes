import "@shared/infra/typeorm";
import App from "./infra/Http/App";

const app = new App();

app.listen(3333);
