'use strict';

const getPosts = async () => {
  const response = await fetch('https://0r6v1xolq4.execute-api.eu-west-1.amazonaws.com/prod/blogposts');
  const blogPostsJSON = await response.json();

  console.log(JSON.stringify(blogPostsJSON));

  const blogPostsElements = blogPostsJSON.map((bp) => {
    const titleDiv = document.createElement("DIV");
    titleDiv.setAttribute('class', 'article-title');
    const title = document.createTextNode(bp.title);
    titleDiv.appendChild(title);

    const bodyDiv = document.createElement("DIV");
    bodyDiv.setAttribute('class', 'article-body');
    const body = document.createTextNode(bp.body);
    bodyDiv.appendChild(body);

    const articleDiv = document.createElement("DIV");
    articleDiv.setAttribute('class', 'article');
    articleDiv.appendChild(titleDiv);
    articleDiv.appendChild(bodyDiv);
    return articleDiv;
  })

  let content = document.getElementById('content');
  blogPostsElements.forEach((bpe) => content.appendChild(bpe));
}

getPosts();
