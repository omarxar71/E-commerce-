import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions() , withHashLocation() , withInMemoryScrolling({scrollPositionRestoration:"top"})),
     provideHttpClient() , importProvidersFrom(BrowserAnimationsModule)]
};
