// ==UserScript==
// @name        BringBackGHXSS
// @namespace   hhh
// @match       https://github.com/*
// @grant       none
// @version     1.0.1
// @author      ElonGaties
// @description 6/8/2024, 2:08:36 PM
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect()
                resolve(document.querySelector(selector))
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}

async function getForProfileRM() {
  let elm = await waitForElm("#user-profile-frame > div")
  if (elm.firstElementChild.className != "Box mt-4 ") {
    return undefined;
  }
  return elm.firstElementChild
}

async function main() {
  // TODO: Check if the current page is a profile page
  let rmNode = await getForProfileRM()
  if (!rmNode) {
    console.log("Profile README !Exist")
    return
  }

  console.log("Profile README Exists")

  let mathRenderer = rmNode.querySelectorAll("math-renderer")
  if (mathRenderer.length == 0) {
    // TODO: Read file within git profile repo with css to inject (more custom stuff later)
    console.log("Math Renderer !Exist")
  }

  console.log("Math Renderer Exists")

  let username = document.URL.split("/").at(-1)
  let repoData = await fetch(`https://api.github.com/repos/${username}/${username}`).then(response => response.json())

  let raw = await fetch(`https://raw.githubusercontent.com/${username}/${username}/${repoData["default_branch"]}/README.md`).then(response => response.text())
  let style = raw.match(/\s*([a-z\-]+)\s*:\s*((?:[^;]*url\(.*?\)[^;]*|[^;]*)*)\s*(?:;|$)/gmi)

  let newElement = document.createElement("div") // TODO: Handle multiple elements
  newElement.style = style.join("")

  rmNode.appendChild(newElement);

  let test = rmNode.querySelectorAll(".flash.flash-error")
  console.log(test)
}

main()
