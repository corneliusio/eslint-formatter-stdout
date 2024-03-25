# eslint-formatter-stdout

```bash
npm install eslint-formatter-stdout
```

## Does this work?

```bash
cat $PATH_TO_FILE | eslint --stdin --fix-dry-run --stdin-filename $PATH_TO_FILE --format stdout
```

No.

## Well, does this work?

```bash
cat $PATH_TO_FILE | eslint --stdin --fix-dry-run --stdin-filename $PATH_TO_FILE --format eslint-formatter-stdout
```

No.

## Does this package work at all?

Yeah, but not like you want it to. Why? Who knows. But if you set `--format` to the fully qualified path of the formatter index.js it works.
```bash
cat $PATH_TO_FILE | eslint --stdin --fix-dry-run --stdin-filename $PATH_TO_FILE --format "$PATH_TO_NODE_MODULES/eslint-formatter-stdout/src/index.js"
```

Why do you have to do something stupid like this? Idk—take it up with eslint. Their [docs](https://eslint.org/docs/latest/extend/custom-formatters#packaging-a-custom-formatter) indicate that it automatically looks in `node_modules` for packages starting with `eslint-formatter-`.

## But how do I see the linting errors and warnings?

Literally every other formatter does that. If you don't have a use for printing the linted code to stdout instead you're in the wrong place.
