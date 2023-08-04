import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { onClickDirective } from "./src/directives/client-click.ts";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    onClickDirective()
  ],
});