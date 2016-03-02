var consoleMessage, isScrolledIntoView;

consoleMessage = "Well hello there! Thanks for taking a look under the hood! If you haven't noticed yet this site is running on node and express. You might be thinking 'Thats a little over kill for a portfolio site, this guy is not very smart with choosing tools.' And yes it probably is overkill for a portfolio site but it was a fun challenge to learn a little express and node and to test out the keystone.js CMS. So I hope you enjoy my site and if you have any feedback please let me know by clicking the contact tab.";

isScrolledIntoView = function(elem) {
  var docViewBottom, docViewTop, elemBottom, elemTop;
  docViewTop = window.scrollY;
  docViewBottom = docViewTop + window.offsetHeight;
  elemTop = elem.offsetTop + 400;
  elemBottom = elemTop + elem.offsetHeight - 600;
  console.log(docViewTop);
  if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
    elem.className += " bring-in";
  } else {
    elem.className = elem.className.replace(/(?:^|\s)bring-in(?!\S)/g, "");
  }
};

window.onscroll = function() {
  var i, len, project, projects;
  projects = document.getElementsByClassName("project");
  for (i = 0, len = projects.length; i < len; i++) {
    project = projects[i];
    isScrolledIntoView(project);
  }
};

document.onreadystatechange = function() {
  var state;
  state = document.readyState;
  if (state === 'complete') {
    return console.log(consoleMessage);
  }
};
