const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = 'users.json';

//a function to load user data from json
function loadUsers(){
    try{
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err){
        return []; // returns empty array if the file doesn't exist
    }
}

// function to save user data to json
function saveUsers(users){
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
}

function registerUser(){
    readline.question("Enter your name: ", (name) => {
        readline.question("Enter your email: ", (email) => {
            readline.question("Enter your password: ", (password) => {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);

                const user = loadUsers();
                // check if email exists
                if (user.find(user => user.email === email)) {
                    console.log("Email already exists.");
                    showMainMenu();
                    return;
                }
                users.push({name, email, password: hashedPassword });
                saveUsers(users);
                console.log("Welcome, registration successful!");
            });
        });
    });
    function loginUser(){
        readline.question("Enter your email: ", (email) =>{
            readline.question("Enter your password: ", (password) => {
                const users = loadUsers();
                const user = users.find(user => user.email === email);

                if (user && bcrypt.compareSync(password, user.password)) {
                    console.log("Login successful!");
                    showMainMenu(user);
                }else {
                    console.log("Invalid credentials.");
                    loginUser();
                }
            });
        });
    }
    function showMainMenu(user){
        console.log("\nMain Menu:");
        console.log("1.View Profile");
        console.log("2. Logout");
        console.log("3.Exit");

        readline.question("Enter your choice: ", (choice) => {
            switch (choice) {
                case '1':
                    console.log(`\nPrfile: \nName: ${user.name} \nEmail: ${user.email}`);
                    showMainMenu(user);
            
                    break;
                case '2':
                    console.log("Logged out.");
                    showInitialMenu();

                    break;
                case '3':
                    readline.close();
                    break;
                default:
                    console.log("Invalid input.");
                    showMainMenu(user);

            }
        });
    }
    function showInitialMenu(){
        console.log("\nWelcome!");
        console.log("1.Register");
        console.log("2.Login");

        readline.question("Please enter your choice: ", (choice) => {
            switch (choice){
                case '1':
                    registerUser();
                    break;
                default:
                    console.log("Invalid choice.");
                    showInitialMenu();
            }
        });
    }
}