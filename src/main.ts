import { bootstrapApplication } from '@angular/platform-browser'; // Importa el método bootstrapApplication desde un sitio web. Esta función arranca la aplicación en el navegador
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación desde el archivo src/app/app.config.ts
import { App } from './app/app'; // Importa el COMPONENTE raíz de la aplicación desde el archivo src/app/app.ts

bootstrapApplication(App, appConfig) // Arranca la aplicación utilizando el componente raíz y la configuración proporcionada
  .catch((err) => console.error(err));
