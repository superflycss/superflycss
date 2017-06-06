# Naming Conventions

## Component Class Names

### Syntax

`.[namespace-]ComponentName[_descendant|--modifier][.onState]`

### Examples

``` css
.fs-Button {} /* Component */
.fs-Button_price {} /* Descendant */
.fs-Button--default {} /* Modifier */
.fs-Button--default.onDisabled {} /* Disabled state */
```
## Component Variable Names

### Syntax

`--[namespace-]ComponentName[_descendant|--modifier][_onState]-(css-property|variable-name)`

### Examples

``` css
--fs-Button-font: inherit; /* Inherit button font family */
--fs-Button-border-color: current-color; /* Use the text color for the border */
--fs-Button_price-text-color: light-gray; /* Text color for the price descendant */
--fs-Button--default-background-color: red; /* Modifier */
--fs-Button--default_onDisabled-opacity /* Disabled button opacity setting */
```
## Utility Names

### Syntax

`u-[media-type-]utility-name`

Media type values supported are:
- print
- xs
- sm
- md
- lg
- xl

### Examples

``` css
.u-flex {
  display: flex !important;
}

.u-flex-inline {
  display: inline-flex !important;
}
```
