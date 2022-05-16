import mergeTwoLists from "./question1/index.js";

if (process.env.npm_lifecycle_event === "question1") {
  const list1 = [];
  const list2 = [];

  mergeTwoLists(list1, list2);
}

if (process.env.npm_lifecycle_event === "question2") {
  console.log("here");
}