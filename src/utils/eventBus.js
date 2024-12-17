import {reactive} from "vue";

export const eventBus = reactive({
    message:'',
    setMessage(newMessage) {
    this.message = newMessage;
    }
})