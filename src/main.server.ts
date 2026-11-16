import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Entry point used at build time to prerender every route to static HTML.
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
