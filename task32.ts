let current_users = ['Ali', 'Shahmeer', 'Ahmed', 'Ibrahim', 'Muhammad'];
let new_users = ['Ali', 'Bhatti', 'Ijaz', 'Ibrahim', 'Rehman'];


new_users.map((name: string) => {
    if (current_users.includes(name)) {
        console.log(`Username ${name} is already in use. Please choose another username.`)
    } else {
        console.log(`Username ${name} is available.`)
    }
});