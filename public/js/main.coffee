consoleMessage = "Well hello there! Thanks for taking a look under the hood! If you haven't noticed yet, this site is running on a node.js cms and app framework called KeystoneJS. You might be thinking 'Thats a little over kill for a portfolio site.' And yes it probably is overkill for a portfolio site but it was a fun challenge to learn a little mongodb, express and node. So I hope you enjoy my site and if you have any feedback, want to hire me or just want to talk please let me know http://www.shawgravitt.com/contact"

projects = document.getElementsByClassName("project")

isScrolledIntoView = (elem) ->
	
	# finds the top of the .project element and adds size
	# to help with scrolling effects
	elemTop = elem.getBoundingClientRect().top + 400

	# finds the bottom of the .project element and adds size
	# to help with scrolling effects
	elemBottom = elem.getBoundingClientRect().bottom - 300

	# variable to show element is visible within view port
	isVisible = elemTop >= 0 && elemBottom <= window.innerHeight

	# fades elements in by checking visibility of .project 
	# element and checks for animation class name
	# to not add class name on each scroll movement
	if isVisible && !elem.classList.contains('bring-in')
		elem.className += " bring-in"

	# fades elements out by checking visibility of .project 
	# element and checks for animation class name
	# to remove
	else if !isVisible && elem.classList.contains('bring-in')
		elem.classList.remove('bring-in') 
	return

window.onscroll = ->
	for project in projects
		isScrolledIntoView(project)
	return

document.onreadystatechange = ->
	state = document.readyState
	if state == 'complete'
		console.log(consoleMessage)
		for project in projects
			isScrolledIntoView(project)
		return