//window.addEventListener('beforeunload', this.beforeUnload);

const app = Vue.createApp({
    data() {
        return {
            title: "My CheckList",
            tasks: [],
            newTask: ""
        }
    },

    created() {
        const localStorageArray = localStorage.getItem('tasksArray');
        this.tasks = localStorageArray ? JSON.parse(localStorageArray) : [];
    },

    methods: {
        addTask() {
            if (this.newTask != "") {
                this.tasks.push(this.newTask);
                this.newTask = "";
                localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
            }
        },
        deleteTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
        },
        editTask(task) {
            const newTask = prompt("Enter new task");
            if (newTask != "") {
                this.tasks[this.tasks.indexOf(task)] = newTask;
                localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
            }
            
        }
    }
}).mount('#app')