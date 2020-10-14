<template>
    <div>
        <h1>Home</h1>
        <button @click="inc">Clicked {{ count }} times.</button>

        <h1>const test</h1>
        <h3>data:{{data}}</h3>
        <h3>contract_data:{{contract_data}}</h3>
        <h3>res_data:{{res_data}}</h3>
        <button type="button" class="btn btn-primary" @click="handleContractToBills">handleContractToBills</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { test } from './test'

import {
    contractToBillsApi
} from '@/api/test_cost'

function cost_setup() {
    const data = {
        start_date: '2020-09-21',
        end_date: '2020-11-21',
        deposit_period: 1,
        payment_period: 1,
        costs: [
            {
                cost_type: 1,
                room_position: [1, 2],
                seat_position: [3, 5],
                area: 123.3,
                pay_type: 1,
                begin_date: '2020-09-30',
                end_date: '2020-12-02',
                cost: 123.1,
                cost_unit: 2
            }
        ]
    }
    const contract_data = ref(Object(data))
    const res_data = ref(Object())
    const handleContractToBills = () => {
        contractToBillsApi(contract_data.value)
            .then((res) => {
                res_data.value = res.data
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return {
        data, contract_data, res_data,
        handleContractToBills
    }
}
export default defineComponent({
    name: 'Home',
    setup() {
    // const count = ref(0)
    // const inc = () => {
    //   count.value++
    // }
        const { count, inc } = test({count: 3})
        // test_cost
        const {
            data, contract_data, res_data,
            handleContractToBills
        } = cost_setup()

        return {
            count, inc,
            data, contract_data, res_data,
            handleContractToBills
        }
    }
})
</script>