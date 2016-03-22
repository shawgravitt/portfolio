var consoleMessage, isScrolledIntoView, projects;

consoleMessage = "Well hello there! Thanks for taking a look under the hood! If you haven't noticed yet, this site is running on a node.js cms and app framework called KeystoneJS. You might be thinking 'Thats a little over kill for a portfolio site.' And yes it probably is overkill for a portfolio site but it was a fun challenge to learn a little mongodb, express and node. So I hope you enjoy my site and if you have any feedback, want to hire me or just want to talk please let me know http://www.shawgravitt.com/contact";

projects = document.getElementsByClassName("project");

isScrolledIntoView = function(elem) {
  var elemBottom, elemTop, isVisible;
  elemTop = elem.getBoundingClientRect().top + 400;
  elemBottom = elem.getBoundingClientRect().bottom - 300;
  isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  if (isVisible && !elem.classList.contains('bring-in')) {
    elem.className += " bring-in";
  } else if (!isVisible && elem.classList.contains('bring-in')) {
    elem.classList.remove('bring-in');
  }
};

window.onscroll = function() {
  var i, len, project;
  for (i = 0, len = projects.length; i < len; i++) {
    project = projects[i];
    isScrolledIntoView(project);
  }
};

document.onreadystatechange = function() {
  var i, len, project, state;
  state = document.readyState;
  if (state === 'complete') {
    console.log(consoleMessage);
    for (i = 0, len = projects.length; i < len; i++) {
      project = projects[i];
      isScrolledIntoView(project);
    }
  }
};
