const app = Vue.createApp({
    data() {
        return {
            message: "Hello World",
            tasks: [
                "kok"
            ],
            newTask: ""
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = "";
        },
        deleteTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
}).mount('#app')