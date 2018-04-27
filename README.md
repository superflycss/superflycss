# superflycss

Modularized, [composable](https://en.wikipedia.org/wiki/Composability#System_Design), and responsive CSS variables, components, utilities, typography, their foundation, and corresponding structural, build, and test methodology designed to be forward compatible with [custom elements / web components](https://developers.google.com/web/fundamentals/getting-started/primers/customelements).

## Objectives

The aim of [superflycss](https://github.com/superflycss/superflycss) is to maximize designer and developer productivity, cross eco system utilization, and to minimize maintenance effort by providing:
- [SuperflyCSS Component and Utility Naming Conventions](https://github.com/superflycss/superflycss/blob/master/naming-conventions.md) that provide predictability, clarity, transparency, simplicity, and consistency to the CSS markup and the corresponding end result.  
- A la carte flexibility.  Use only the parts that you want to use.
- A robust CSS foundation / base
- Small focused CSS modules that can be installed with a package manager (NPM), are easily customizable, live in their own repository, are updated and [semver versioned](https://semver.org/) independently of other components or utilities, adhere to a [Module philosophy](https://github.com/substack/browserify-handbook#module-philosophy), and are free of [side effects](https://philipwalton.com/articles/side-effects-in-css/) and [naming collisions](https://philipwalton.com/articles/side-effects-in-css/).  Small modules are less intimidating for new users to get started with and allow developers to find and review code as quickly as possible.
- Dependency management for CSS modules and build tools
- Test cases clearly illustrating how to utilize the css module features and how to got about customization
- The ability to incorporate future CSS specification features, such as variables, now using [PostCSS](https://github.com/postcss/postcss).
- Naming and structural conventions for CSS elements, components, utilities, and repositories
- End to end [superflycss/cli](https://github.com/superflycss/cli) live reload build examples
- Well documented and tested code that incorporates design rationale
- A standardized [project layout](https://github.com/superflycss/pli) for all project repositories
- Project initiation and live reload building and workflow automation provided by [superflycss/cli](https://github.com/superflycss/cli) 
- Adherence to [semver guidelines](http://semver.org/) for update releases
- RxJS style module imports for all css sub modules

## Installation

### SuperflyCSS CLI (Command Line Interface)

```console
npm -i -g @superflycss/cli
```
### SuperflyCSS Variables, Components, and Utilities

**SuperflyCSS** css modules can be installed via NPM.  For example install the color module by running:

```console
npm i @superflycss/variables-colors
```  
## Usage 

### New Project Creation

Create a project name `component-super`:

```console
sfc n component-super
```  

### CLI Live Reload

To build, serve, and live reload the `component-super` project run:

```console
cd component-super
sfc s component-super
```
[Browser-Sync](https://browsersync.io/) will servet the `target` directory, so navigate to http://localhost:3002/test/html/ to see the testing `index.html` file.

### Creating a Composite Build from CSS Modules

Import the module using `@import <module_name>`.  For example:
```css
@import '@superflycss/variables-colors';
```

Then customize by overriding CSS variables and/or extending the CSS.  Once your CSS file is complete, build it using the CLI by running:

```console
sfc build:main:css
```  

Or use the abbreviated version:

```console
sfc bmc
```

### Prepublishing Variales, Components, or Utilities

```console
sfc prepublish
```  

Or use the abbreviated version:
```console
sfc p
```


### Foundation

All superflycss modules assume the utilization of the [superflycss/foundation](https://github.com/superflycss/foundation) module in order to keep code [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself).  Thus in order to guarantee consistent results always include the [superflycss/foundation](https://github.com/superflycss/foundation) module import first.
