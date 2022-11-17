# Brightcove code challenge - Playwright tests

### :rocket: How to run de project


1. Install npm dependecies

```bash
npm install
```

2. Install browsers (Chromium, Firefox, Webkit)

```bash
npx playwright install
```

3. Run the tests

the tests will be executed on Chromium

```bash
npm run test # headless
npm run "test:headed"
```

4. Generate html report

```bash
npm run report
```


### CI pipeline

When creating a pull request, the plawright tests will be executed.


The corresponding html report will be created and stored for 30 days.
