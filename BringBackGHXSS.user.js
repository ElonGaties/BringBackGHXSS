// ==UserScript==
// @name        BringBackGHXSS
// @namespace   hhh
// @match       https://github.com/*
// @grant       none
// @version     1.0
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
  let elm = await waitForElm(`#user-profile-frame > div`)
  if (elm.firstElementChild.className != "Box mt-4 ") {
    return undefined;
  }
  return elm.firstElementChild
}

async function main() {
  let rmNode = await getForProfileRM()
  if (!rmNode) {
    console.log("Profile README !Exist")
    return
  }

  console.log("Profile README Exists")

  let mathRenderer = rmNode.querySelectorAll("math-renderer")[0];
  if (!mathRenderer) {
    // TODO: Read file within git profile repo with css to inject (more custom stuff later)
    console.log("Math Renderer !Exist")
  }

  console.log("Math Renderer Exists")

  let raw = await fetch("https://raw.githubusercontent.com/ElonGaties/ElonGaties/main/README.md").then(response => response.text())
//   let raw = `
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 100; position: fixed; top: 0; left: 0; height: 100vh; object-fit: cover; background-size: cover; width: 130vw; background: url('https://github.com/LMNYX/LMNYX/blob/main/lobster.gif?raw=true');]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 101; position: fixed; top: 0; left: 0; height: 100vh; opacity: 0.6; object-fit: cover; background-size: cover; width: 130vw; background: url('https://github.com/LMNYX/LMNYX/blob/main/cooltext459899148431702.gif?raw=true');]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 101; position: fixed; top: 0; left: 0; height: 100vh; opacity: 0.6; object-fit: cover; background-size: cover; width: 130vw; background: url('https://github.com/LMNYX/LMNYX/blob/main/cooltext459899148431702.gif?raw=true');&#34; onerror='alert(1);']{x0000}$}
// \ce{$&#x5C;unicode[goombafont; scale: 1; image-rendering: pixelated; color:red; pointer-events: none; z-index: 1030; position: fixed; top: 0; left: 0; height: 100vh; object-fit: cover; background-size: cover; width: 100vw; opacity: 0; background: url('https://raw.githubusercontent.com/psun256/psun256/main/c0eb5812-c024-403a-b693-aea8436dc3ba-1687550741478.jpg'); animation: ease-in 5s fade-out 7s ]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; scale: 1; image-rendering: pixelated; color:red; pointer-events: none; z-index: 1030; position: fixed; top: 0; left: 0; height: 100%; width: 100%; opacity: 0; background: url('https://github.com/LMNYX/LMNYX/blob/main/sata.jpg?raw=true'); background-position: center; background-repeat: no-repeat; background-size: cover; animation: ease-in 9s fade-out 9s ]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; right: 0; bottom: 0; width: 380px; height: 420px; background-image: url('https://github.com/mishashto/.github/blob/main/sataandagi.gif?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; left: 0; bottom: 0; width: 280px; height: 500px; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/subway.gif?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; left: 0; top: 0; width: 220px; height: 285px; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/soap.gif?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; right: 0; top: 0; width: 440px; height: 248px; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/gta5.gif?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 320px; height: 180px; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/parkour.gif?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 103; position: fixed; left: 0; top: 0; animation: fade-in infinite linear 0.05s, Overlay--motion-scaleFade infinite 0.1s, fade-out infinite alternate 0.05s, Toast--spinner infinite linear 60s, Overlay--motion-slideInLeft infinite alternate 1.06s, Overlay--motion-slideUp infinite alternate 2.2s; width: 600px; height: 600px; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/omagah.webp?raw=true'); background-size: 100%; opacity: 1;]{x0000}$}
// \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: 102; position: fixed; left: 50dvi; top: 50dvb; width: 80dvmin; background-position: 0 0; height: 80dvmin; translate: -50% -50%; opacity: 1; background-repeat: no-repeat; background-size: 100% 100%; animation: 3.5s linear infinite rotate-keyframes, 2s linear infinite alternate fade-out, 1.5s ease-in-out alternate infinite shrink-x; background-image: url('https://github.com/LMNYX/LMNYX/blob/main/terry.jpg?raw=true');]{x0000}$}
//   `
  console.log(raw.matchAll(/unicode\[(.*)\]\{x0000\}\$\$/gmi))
}

main()
