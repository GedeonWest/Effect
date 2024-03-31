// Load Styles
import '../scss/main.scss';
import Masonry from 'masonry-layout';
import ticker from './ticker.js';
import header from './header.js';

// Load Bootstrap init
import { initBootstrap } from './bootstrap.js';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

header();
ticker();
