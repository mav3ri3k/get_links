# Get Info
Extension based parser for Google Search

Upon entering a google query, the results can be easily accessed in the following format:

## Search Results
Search results are provided as a json in the following format

```js
results: [
      {
        title: "Hideo Kojima",
        url: "https://en.wikipedia.org/wiki/Hideo_Kojima",
        description: "Hideo Kojima is a Japanese video game designer. He is regarded  ...",
      }
      ...

The code is stored in `./scripts/main.js`

This is then build using esbuild into `content-scripts.js`

```sh 
esbuild ./scripts/content.js --bundle --outfile=content-scripts.js ;
```

Results can be seen through inspect view for google serach results webpage
