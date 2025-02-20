# Component Explorer

The Explorer theme is used in conjunction with the [Shopify CLI Theme Component Plugin]([https://github.com/archetype-themes/components](https://github.com/archetype-themes/plugin-theme-component)) to create an isolated development and test environment for Theme Components inside of the Shopify Theme Editor.

![Google Chrome](https://github.com/user-attachments/assets/a0c037f8-057a-421e-a9f5-726d8ce6808f)


## How it works

Use the `shopify theme component dev [component-name]` command inside of a component collection like [archetype-themes/reference-components](https://github.com/archetype-themes/reference-components) to bootstrap your component development environment. 

This command does the following operations:
1. Copy the contents of `archetype-themes/explorer` repo into the `.dev` directory
2. Copy setup files located in `components/[component]/setup/[templates|sections|config]` into their respective directories in the `.dev` directory
3. Copy component files `snippets|assets` into their respective directories in the `.dev` directory
4. Runs `shopify theme dev` on the `.dev` directory

