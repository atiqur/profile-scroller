const data = [
  {
    name: "Atiqur Rahman",
    age: 41,
    gender: "male",
    lookingFor: "female",
    location: "Guwahati",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "John Doe",
    age: 45,
    gender: "male",
    lookingFor: "female",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Jane Doe",
    age: 35,
    gender: "female",
    lookingFor: "male",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
]

document.getElementById("next").addEventListener("click", nextProfile)

function profileIterator(profiles) {
  let nextIndex = 0
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true }
    },
  }
}

const profiles = profileIterator(data)

// Call first profile
nextProfile()

function nextProfile() {
  const currentProfile = profiles.next().value

  if (currentProfile !== undefined) {
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}" >`

    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Interested In: ${currentProfile.lookingFor}</li>
    </ul>`
  } else {
    window.location.reload()
  }
}
