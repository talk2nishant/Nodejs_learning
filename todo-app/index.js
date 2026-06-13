import fs from 'fs';
import readline from 'readline';

const TODO_FILE = 'todos.json';

if(!fs.existsSync(TODO_FILE)) {
    fs.writeFileSync(TODO_FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const loadTask = () => {
   const data = fs.readFileSync(TODO_FILE);
   return JSON.parse(data);
}

const saveTask = async (tasks) => {
   const createTask = fs.writeFileSync(TODO_FILE, JSON.stringify(tasks, null, 2));
   return createTask; 
} 

const showMenu  = async () => {
    console.log('\n========= To-Do List Menu =========\n');
    console.log('1. Add Task');
    console.log('2. View Tasks');
    console.log('3. Delete Task');
    console.log('4. Exit');

    rl.question('\nSelect an option:', handleMenu)
}

const handleMenu = async (option) => { 
    switch(option) {
        case '1':
            rl.question('Enter task', (task) => { 
                const tasks = loadTask();
                tasks.push({task, completed: false});
                saveTask(tasks);
                console.log(`Added task: ${task}`)
                showMenu();
            })
            break;
        case '2':
            const tasks = loadTask();
            if(tasks.length === 0) {
                console.log('No tasks found.');
            } else {
                console.log('\nYour Tasks:');
                tasks.forEach((t, index) => {
                    console.log(`${index + 1} ${t.task}`); 
                })
            } 
            showMenu();
            break;
        case '3':
            const allTasks = loadTask();
            if(allTasks.length === 0) {
                console.log('No tasks to delete.');
                showMenu();
                return;
            } else {
                console.log('\nYour Tasks:');
                allTasks.forEach((t, index) => {
                    console.log(`${index + 1} ${t.task}`); 
                })
                rl.question('Enter task number to delete:', (num) => {
                    const index = parseInt(num) - 1;

                    if(index >=0 && index < allTasks.length){
                        allTasks.splice(index, 1);
                        saveTask(allTasks);
                        console.log('Task deleted successfully.');
                    } else {
                        console.log('Invalid task number.');
                    }
                    showMenu();
                })   
            }
            break;
        case '4': 
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
    }
}

handleMenu();