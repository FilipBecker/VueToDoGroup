//window.addEventListener('beforeunload', this.beforeUnload);

const app = Vue.createApp({
    data() {
        return {
            message: "Hello World",
            tasks: [],
            newTask: ""
        }
    },

    created() {
        console.log("hej");
        const localStorageArray = localStorage.getItem('tasksArray');
        this.tasks = localStorageArray ? JSON.parse(localStorageArray) : [];
    },

    methods: {
        addTask() {
            if (this.newTask != "") {
                this.tasks.push(this.newTask);
                this.newTask = "";
                console.log("hejdå");
                localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
            }
        },
        deleteTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            localStorage.setItem('tasksArray', JSON.stringify(this.tasks));
        }
    }
}).mount('#app')