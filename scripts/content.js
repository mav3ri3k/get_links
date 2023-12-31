// google search results are served in components of class name .g
searchResults = document.querySelectorAll(".g")

const results = [];

searchResults.forEach((result) => {
  // extract title, url and description for each components
  const title = result.querySelector("h3");
  const url = result.querySelector("a");
  const description = result.querySelector(".VwiC3b");

  if (title && url && description) {
    results.push({
      title: title.textContent,
      url: url.href,
      description: description.textContent,
    });
  }
});

console.log(results)

