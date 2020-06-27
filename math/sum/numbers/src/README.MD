## How to build

```rit build formula --watch``

The `--watch` flag will help you compile the code on watch mode.

## How to run the formula

After build you can run with the following commnand:
```rit math sum numbers```

If you don't have node in your machine, try:
```rit math sum numbers --docker```

### Usign with stadin

You should send as a json to `--stadin`. Better option for CI/CD case
`echo "{\"number_01\":\"1\", \"number_02\":\"2\"}" | rit math sum numbers --stdin`