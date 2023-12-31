(() => {
  // scripts/content.js
  searchResults = document.querySelectorAll(".g");
  var results = [];
  searchResults.forEach((result) => {
    const title = result.querySelector("h3");
    const url = result.querySelector("a");
    const description = result.querySelector(".VwiC3b");
    if (title && url && description) {
      results.push({
        title: title.textContent,
        url: url.href,
        description: description.textContent
      });
    }
  });
  console.log(results);
})();
