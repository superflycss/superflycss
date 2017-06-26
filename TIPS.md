# Tips

### Always import [@superflycss/foundation](https://github.com/superflycss/foundation) first

Import order for CSS matters.  This is the correct way to do it:
``` css
@import "@superflycss/foundation";
@import "@superflycss/component-header";
```

On the other hand accidetally doing this:
``` css
@import "@superflycss/component-header";
@import "@superflycss/foundation";
```

Would result in the browser not rendering the pseduo selectors events `:hover, :active, visited` defined for the `Header_link` since the  since the styling of the `<a class="Header_link">...</a>` element would be overriden by the styling declaration for anchors (`<a>...</a>` elements) declared in [@superflycss/foundation](https://github.com/superflycss/foundation).
