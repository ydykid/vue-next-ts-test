import { ref } from 'vue'
interface param {
    count: number;
}

export const test = (param: param) => {
    const count = ref(param.count)
    const inc = () => {
        count.value++
    }
    return { count, inc }
}