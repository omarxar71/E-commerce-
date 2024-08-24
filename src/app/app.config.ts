import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions() , withHashLocation() , withInMemoryScrolling({scrollPositionRestoration:"top"}))]
};
