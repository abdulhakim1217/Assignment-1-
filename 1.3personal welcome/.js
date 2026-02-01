function welcomeUser(name = "Guest", isMember) {
  if (isMember === true && name === "Guest") {
    console.log("Welcome back, VIP Guest!");
  } else if (isMember === true) {
    console.log(`Welcome back, VIP ${name}!`);
  } else {
    console.log(`Hello and welcome, ${name}!`);
  }
}

// Function Calls (showing ALL possible outputs)

welcomeUser("Abdul", true);
// Welcome back, VIP Abdul!

welcomeUser("Abdul", false);
// Hello and welcome, Abdul!

welcomeUser(undefined, true);
// Welcome back, VIP Guest!

welcomeUser();
// Hello and welcome, Guest!
