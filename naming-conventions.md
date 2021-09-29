# Naming Conventions

## Component Class Names

### Syntax

`.[namespace-]ComponentName[_descendant|--modifier][.onState]-[media-type]`

### Examples

``` css
.fs-Button {} /* Component */
.fs-Button_price {} /* Descendant */
.fs-Button--default {} /* Modifier */
.fs-Button--default.onDisabled {} /* Disabled state */
.fs-Button--default.onActive {} /* Active state */

.fs-Input.onValid {}
.fs-Input.onInvalid {}

// Responsive component
.Display--fs500fw500-md {} /* Media type is md */
.Display--fs500fw500-md.onActive {} /* Media type is md */
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

#### Rule Exceptions / Number Separators

Numbers are natural separators.  So for example instead of:
```
.Display--fs0-fw200-sm {
```

We do:
```
.Display--fs0fw200sm {
```
