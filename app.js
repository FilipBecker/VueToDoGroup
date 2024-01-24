const app = Vue.createApp({
    data() {
        return {
            title: "My CheckList",
            tasks: [],
            newTask: ""
        }
    },
    methods: {
        addTask() {
            if (this.newTask != "") {
                this.tasks.push(this.newTask);
                this.newTask = "";
            }
        },
        deleteTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
}).mount('#app')