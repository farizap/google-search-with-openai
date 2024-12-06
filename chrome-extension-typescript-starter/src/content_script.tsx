console.log("Extension is running!")

if (document.readyState === "loading") {
  // DOM is still loading, wait for it to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded.")
    handleForm()
    displayReplyBelowForm()
  })
} else {
  // DOM is already loaded, handle the form
  handleForm()
  displayReplyBelowForm()
}

// Function to handle form modification and submission prevention
function handleForm() {
  const form = document.querySelector("body form")

  if (form) {
    // Remove the 'action' and 'method' attributes from the form
    form.removeAttribute("action")

    form.setAttribute("action", "http://localhost:3000/api/completion")
    form.setAttribute("method", "GET")

    console.log("Injected 'onsubmit' attribute into the form.")
  } else {
    console.log("Form not found.")
  }
}

function displayReplyBelowForm() {
  // Parse the URL to get the 'reply' query parameter
  const urlParams = new URLSearchParams(window.location.search)
  const reply = urlParams.get("reply")

  if (reply) {
    // Decode the reply parameter
    const decodedReply = decodeURIComponent(reply)
    console.log("Reply parameter:", decodedReply)

    // Find the form in the document
    const form = document.querySelector("body form")

    if (form) {
      // Create a new element to display the reply
      const replyDiv = document.createElement("div")
      replyDiv.id = "reply-container" // Add an ID for styling or reference
      replyDiv.style.marginTop = "20px"
      replyDiv.style.padding = "10px"
      replyDiv.style.border = "1px solid #ccc"
      replyDiv.style.borderRadius = "5px"
      replyDiv.style.backgroundColor = "#f9f9f9"
      replyDiv.style.color = "#333"
      replyDiv.style.fontSize = "14px"
      replyDiv.style.lineHeight = "1.5"

      // Set the reply text as the content of the new element
      replyDiv.textContent = `Reply: ${decodedReply}`

      // Insert the new element below the form
      form.parentNode?.insertBefore(replyDiv, form.nextSibling)

      console.log("Reply element added below the form.")
    } else {
      console.log("Form not found. Cannot display the reply.")
    }
  } else {
    console.log("No 'reply' parameter found in the URL.")
  }
}
