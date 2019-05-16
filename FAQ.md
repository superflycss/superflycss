# FAQ

## Doesn't [ShadowDOM](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom) address the [side effects](https://philipwalton.com/articles/side-effects-in-css/) issue related to CSS?

It does, but it does not address [reusability](https://en.wikipedia.org/wiki/Reusability).

## Why have separate repository for each module?

In addition to all the reasons outlined in the [browserify module philosophy](https://github.com/browserify/browserify-handbook#module-philosophy) It makes approaching the repository less intimidating.  Developers can quickly get up to speed on a particular module because the module is small and has a well defined structure.

When multiple modules are needed for a project this can easily provided by cutting and pasting a `package.json` snippet.

