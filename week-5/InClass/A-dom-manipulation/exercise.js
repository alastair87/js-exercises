/*
Task 1
=======
Write JavaScript below that logs:
    1. all the 'p' element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the '.site-header' node

    3. the element with id 'jumbotron-text'
    --> should log the '#jumbotron-text' node

    4. all the 'p' elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelectorAll("p"));

console.log(document.querySelector(".site-header"));

console.log(document.querySelector("#jumbotron-text"));

console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text 'Thanks for visiting Bikes for Refugees!'
*/

document
  .querySelector("#alertBtn")
  .addEventListener("click", () =>
    alert("Thanks for visiting Bikes for Refugees!")
  );

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document
  .querySelector("#bgrChangeBtn")
  .addEventListener(
    "click",
    () => (document.body.style.backgroundColor = "red")
  );

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says 'Read more below.'
*/

const addText = () => {
  let paragraph = document.createElement("p");
  paragraph.innerText = "Read more below.";
  document.querySelector(".jumbotron").appendChild(paragraph);
};

document.querySelector("#addTextBtn").addEventListener("click", addText);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const enlargeLinks = () =>
  document
    .querySelectorAll("a")
    .forEach((link) => (link.style.fontSize = "2em"));

document
  .querySelector("#largerLinksBtn")
  .addEventListener("click", enlargeLinks);

/*
Task 6
======

Using JavaScript, create an unordered list under the 'Add' button.
When the 'Add' button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/

let ul = document.createElement("ul"),
  addArticleBtn = document.querySelector("#addArticleBtn"),
  inputDiv = document.querySelectorAll(".primary-content div")[3];

inputDiv.appendChild(ul);
console.log(document.querySelector(".addArticle"));

addArticleBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = document.querySelector(".addArticle").value;
  ul.appendChild(li);
});
