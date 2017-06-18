# Examples

## Override component CSS variables

The [Site component](https://github.com/superflycss/component-site) has the following definition:
```css
:root {
  --Site-min-width: 270px;
  --Site-min-height: 100%;
  --Site-background-color: #FFFFFF;
  --Site-margin: 0px;
}

.Site {
    background-color: var(--Site-background-color);
    min-height: var(--Site-min-height);
    min-width: var(--Site-min-width);
    margin: var(--Site-margin);
}
```

Suppose we wish to change the `Site--margin` property value to `2rem`.  We would do this by first importing the `@superflycss/component-site` component.

``` css
import '@superflycss/component-site';
```

And then overriding the `Site-margin` property like this:
``` css
import '@superflycss/component-site';
:root {
  --Site-margin: 2rem;
}
```

When the [task-build]() is run the result will be the following `Site` component:

``` css
.Site {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 270px;
    margin: 2rem;
}
```

To see a live working example of the markup illustrated here see the the [Component Site Variable Override Test](https://github.com/superflycss/component-site/blob/master/src/test/css/variable-override.css).
