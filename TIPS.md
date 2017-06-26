# Tips

### Always import [@superflycss/foundation](https://github.com/superflycss/foundation) first

If you import it last some of the styles in 
[@superflycss/foundation](https://github.com/superflycss/foundation) 
may end up overriding the styles defined in components you are importing.
For example the default/baseline styling of links could override a custom component link style.
This may not be evident at first, because it's possible that only pseduo selectors like `:hover, :active, etc` are overridden.
