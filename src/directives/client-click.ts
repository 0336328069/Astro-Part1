export function onClickDirective() {
    return {
      name: 'client-click',
      hooks: {
        "astro:config:setup": ({ addClientDirective }: any) => {
          addClientDirective({
            name: "click", // Provide the desired name for your custom client directive
            entrypoint: "./src/event-directives/click.ts",
          });
          addClientDirective({
            name: "hover", // Provide the desired name for your custom client directive
            entrypoint: "./src/event-directives/hover.ts",
          });
        },
      },
    };
  }