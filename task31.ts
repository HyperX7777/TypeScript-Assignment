let users = ['Jamal', 'HyperX', 'Admin', 'Ali', 'Muhammad Ali'];

users.map((user) => {
    user == "Admin"
      ? console.log("Hello Admin, would you like to see a status report?")
      : console.log("Hi " + user + ", thank you for logging in again");
  });
  users = [];
  if (users.length === 0) {
    console.log('We need to find some users!');
  }