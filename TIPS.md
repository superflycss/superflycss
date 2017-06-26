# Tips

### Always import [@superflycss/foundation](https://github.com/superflycss/foundation) first

Import order for CSS matters.  This is the correct way to do it:
``` css
@import "@superflycss/foundation";
@import "@superflycss/component-header";
```

If on the other hand you were to accidetally do this:
``` css
@import "@superflycss/component-header";
@import "@superflycss/foundation";
```

The `Header_link`, when applied to `<a class="Header_link">...</a>` elements not render the pseduo selectors events `:hover, :active, visited` since the styling of the `<a class="Header_link">...</a>` element would be overriden by the styling declaration of `<a>...</a>` element declared in [@superflycss/foundation](https://github.com/superflycss/foundation).
