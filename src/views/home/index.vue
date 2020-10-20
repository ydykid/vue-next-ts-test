<template>
    <div>
        <h1>Home</h1>
        <button @click="inc">Clicked {{ count }} times.</button>

        <h1>const test</h1>
        contract_parameter(合同参数): 
        <ul>
            <li>stage_method: 分账方式，0合同月、1自然月</li>
            <li>decimal_number: 应收账结果取整，0合同月、1自然月</li>
            <li>deadline_number: 付款截止天数，0</li>
            <li>date_number: 合同结束前日期数，1</li>
            <li>date_unit: 合同结束前单位，0月、1日，0</li>
            <li>is_method: 应收账去尾法，0不采用、1采用</li>
        </ul>
        contact(合同):
        <ul>
            <li>contract_parameter: 合同参数</li>
            <li>start_date(开始日期): {{contract_data.start_date}}</li>
            <li>end_date(结束日期): {{contract_data.end_date}}</li>
            <li>deposit_period: 押金期数</li>
            <li>payment_period: 付款期数
                <select name="payment_type" id="select_payment_type" v-model="contract_data.payment_period">
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                    <option :value="3">3</option>
                    <option :value="6">6</option>
                    <option :value="12">12</option>
                </select>
            </li>
            <li>costs: 费用项目列表
                <ul>
                    <li v-for="(cost, index) in contract_data.costs" :key="index">
                        cost_type:
                        <select :name="'cost_type_'+cost.id" :id="'select_cost_type'+cost.id"
                         v-model="cost.cost_type">
                            <option :value="0">租金</option>
                            <option :value="1">物业费</option>
                        </select>
                        start:{{cost.begin_date}},end:{{cost.end_date}},
                        cost:{{cost.cost}},
                        cost_unit:{{cos}}
                        <select :name="'cost_unit_'+cost.id" :id="'select_cost_unit'+cost.id"
                         v-model="cost.cost_unit">
                            # COST_UNIT_CHOICES = [
                            #     (0, '元'),
                            #     (1, '元/天'),
                            #     (2, '元/月'),
                            #     (3, '元/季度'),
                            #     (4, '元/天/㎡'),
                            #     (5, '元/月/㎡'),
                            #     (6, '元/季度/㎡'),
                            # ]
                            <option :value="0">元</option>
                            <option :value="1">元/天</option>
                            <option :value="2">元/月</option>
                            <option :value="3">元/季度</option>
                            <option :value="4">元/天/m²</option>
                            <option :value="5">元/月/m²</option>
                            <option :value="6">元/季度/m²</option>
                        </select>

                    </li>
                </ul>
            </li>
        </ul>
        costs(费用项目):
        <ul>
            <li>cost_type: 费用类型，0租金、1物业费</li>
            <li>room_position: 物业位置房间</li>
            <li>seat_position: 物业位置工位</li>
            <li>area: 面积 todo</li>
            <li>pay_type: 支付方式，0预付期、1免租期</li>
            <li>begin_date: 开始日期</li>
            <li>end_date: 结束日期</li>
            <li>cost: 费用/单价</li>
            <li>cost_unit: 费用单位，0元、1元/天、2元/月、3元/季度、4元/天/m²、5元/月/m²、6元/季度/m²</li>
        </ul>
        <h3>data:{{data}}</h3>
        <h3>contract_data:{{contract_data}}</h3>
        bills:
        <ul>
            <li>charging_subject: 收费科目，
                <ul>
                    <li>0: 租赁保证金</li>
                    <li>1: 租金</li>
                    <li>2: 物业费</li>
                </ul>
            </li>
            <li>start_date: 开始日期</li>
            <li>end_date: 结束日期</li>
            <li>receivable_amount: 应收账金额</li>
            <li>remark: 备注</li>
            <li>----</li>
            <li>usage: 用量，</li>
        </ul>
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
        contract_parameter: {
            stage_method: 1,
            decimal_number: 2,
            deadline_number: 0,
            date_number: 1,
            date_unit: 1,
            is_method: 1
        },
        start_date: '2020-09-21',
        end_date: '2020-11-21',
        deposit_period: 1,
        payment_period: 1,
        costs: [
            {
                cost_type: 0,
                room_position: [1, 2],
                seat_position: [3, 5],
                area: 123.3,
                pay_type: 1,
                begin_date: '2020-09-30',
                end_date: '2020-12-02',
                cost: 123.1,
                cost_unit: 1
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