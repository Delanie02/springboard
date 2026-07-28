// Task 1

const task1 = document.getElementById("task1");

task1.innerText = "It's changed!";

// Task 2

const task2 = document.getElementById("task2");

task2.innerHTML = "<button>Submit</button>";

// Task 3

const body = document.querySelector("body");

body.style.backgroundColor = "#232323";

// Task 4

const items = document.getElementsByClassName("item");

for (let item of items) {
  item.style.border = "2px solid #ffffff";
}

// Task 5

const task5 = document.querySelector("a");

task5.href = "https://www.springboard.com/";

// Task 6

const task6 = document.querySelector("input");

task6.value = "DOM Master";

// Task 7

const task7 = document.getElementById("task7");

task7.classList.add("new-class");

// Task 8

const newButton = document.createElement("button");

const task8 = document.getElementById("task8");

task8.append(newButton);

// Task 9

const task9 = document.getElementById("task9");

task9.remove();
