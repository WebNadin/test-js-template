//= partials/helper.js

async function* fetchCommits() {
  let url = `https://jsonplaceholder.typicode.com/comments?_limit=5`;
  console.log('url = ', url);
  //while (url) {
  //
  //}
const response = await fetch(url);
    const commits = await response.json();
    //console.log("commits =", commits);
    //const currentPostCommits = [...commits].filter(commit => commit.postId = id);
    //console.log("currentPostCommits =", currentPostCommits);
    for (let commit of commits) {
      yield commit
    }
}

(async () => {
  let count = 0;
  for await (const commit of
  fetchCommits()
  )
  {
    console.log('commit.email = ', commit.email);
  }
  console.log("count =", count);
  if (++count == 10) { // остановимся на 100 коммитах
    return;
  }
})();

//document.addEventListener("DOMContentLoaded", function () {
//  printNumbers(2, 10);
//});


//let count = 0;
//for (const commit of
//  fetchCommits()
//  ) {
//  console.log('commit.email = ', commit.email);
//}
//if (++count == 10) { // остановимся на 100 коммитах
//  break;
//}



