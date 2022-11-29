console.log('Scripts.js is now connected')

function addParagraphElement() {
  const targetElement = document.getElementById("container")

  for (let index = 0; index < 10; index++) {

    // Skapa ett en p-html-tag
    const p = document.createElement("p")

    // const p som target - sätter innerHTML till nedan
    p.innerHTML = "New paragraph " + index
    p.id = "p-" + index

    if (index % 2) {
      p.classList.add("my-paragraph-style-1")
    } else {
      p.classList.add("my-paragraph-style-2")
    }

    // här lägger vi till en event-listener
    // den lyssnar på en "händelse" (event)
    // i detta fallet ett "click"
    p.addEventListener("click", function () {
      alert("Clicked on P - " + index)
    })

    // const targetElement (vår div med id="container")
    // lägger vi till barn, alltså const p
    targetElement.appendChild(p)
  }

}