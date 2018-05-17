# REFACTORING 

## When refactoring always check NPM dependents 

For example whne refactoring the [@superflycss/variables-dimension](https://www.npmjs.com/package/@superflycss/variables-dimension) module look at the dependents tab on NPM and rerun the build and test for the dependents, then inspect the tests visually to make sure they still pass.
