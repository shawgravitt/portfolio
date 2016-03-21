consoleMessage = "Well hello there! Thanks for taking a look under the hood! If you haven't noticed yet this site is running on node and express. You might be thinking 'Thats a little over kill for a portfolio site, this guy is not very smart with choosing tools.' And yes it probably is overkill for a portfolio site but it was a fun challenge to learn a little express and node and to test out the keystone.js CMS. So I hope you enjoy my site and if you have any feedback please let me know by clicking the contact tab."

isScrolledIntoView = (elem) ->
	docViewTop = window.scrollY
	docViewBottom = docViewTop + window.offsetHeight
	elemTop = getBoundingClientRect().top + 400
	elemBottom = elem.getBoundingClientRect().bottom - 600

	console.log(docViewTop)

	if elemBottom <= docViewBottom and elemTop >= docViewTop
		elem.className += " bring-in"
	else
		elem.className = elem.className.replace( /(?:^|\s)bring-in(?!\S)/g , "")
		# possible option:
		# elem.classList.remove(bring-in) 
	return

window.onscroll = ->
	projects = document.getElementsByClassName("project")
	for project in projects
		isScrolledIntoView(project)
	return

document.onreadystatechange = ->
	state = document.readyState
	if state == 'complete'
		console.log(consoleMessage)