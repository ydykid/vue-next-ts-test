<template>
    <div>
        <h1>Home</h1>
        <button @click="inc">Clicked {{ count }} times.</button>

        <h1>const test</h1>
        contact(合同):
        <form>
            <table>
                <caption>
                    <h3>合同参数contract_parameter</h3>
                </caption>
                <tbody>
                    <tr>
                        <td>
                            <label for="stage_method">分账方式</label>
                        </td>
                        <td>
                            <select name="stage_method" id="select_statge_method"
                                    v-model="contract_data.contract_parameter.stage_method"
                            >
                                <option :value="0">合同月0</option>
                                <option :value="1">自然月1</option>
                            </select><br>
                        </td>
                        <td>
                            stage_method: 0合同月、1自然月
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="decimal_number">应收账结果取整</label>
                        </td>
                        <td>
                            <input type="number" max="6" min="0" 
                                   v-model="contract_data.contract_parameter.decimal_number">
                        </td>
                        <td>decimal_number: 应收账结果取整</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="deadline_number">付款截止天数</label>
                        </td>
                        <td>
                            <input type="number" min="0"
                                   v-model="contract_data.contract_parameter.deadline_number">
                        </td>
                        <td>deadline_number
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="date_number">合同结束前日期数</label>
                        </td>
                        <td>
                            <input type="number" min="0"
                                   v-model="contract_data.contract_parameter.date_number">
                        </td>
                        <td>date_number</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="date_unit">合同结束前单位</label>
                        </td>
                        <td>
                            <select name="date_unit" id="select_statge_method"
                                    v-model="contract_data.contract_parameter.date_unit"
                            >
                                <option :value="0">月0</option>
                                <option :value="1">日1</option>
                            </select><br>
                        </td>
                        <td>date_unit: 合同结束前单位，0月、1日，0</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="is_method">应收账去尾法</label>
                        </td>
                        <td>
                            <select name="is_method" id="select_is_method"
                                    v-model="contract_data.contract_parameter.is_method"
                            >
                                <option :value="0">不采用0</option>
                                <option :value="1">采用1</option>
                            </select><br>
                        </td>
                        <td>is_method: 应收账去尾法，0不采用、1采用</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>合同基本信息</caption>
                <tbody>
                    <tr>
                        <td>
                            <label for="start_date">开始日期</label>
                        </td>
                        <td>
                            <input type="date" 
                                   v-model="contract_data.start_date">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="end_date">结束日期</label>
                        </td>
                        <td>
                            <input type="date" 
                                   v-model="contract_data.end_date">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="deposit_period">押金周期</label>
                        </td>
                        <td>
                            <select name="deposit_period" id="select_deposit_period"
                                    v-model="contract_data.deposit_period"
                            >
                                <option :value="1">1</option>
                                <option :value="2">2</option>
                                <option :value="3">3</option>
                                <option :value="6">6</option>
                                <option :value="12">12</option>
                            </select><br>
                        </td>
                        <td>deposit_period:1,2,3,6,12</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="payment_period">付款周期</label>
                        </td>
                        <td>
                            <select name="payment_period" id="select_payment_period"
                                    v-model="contract_data.payment_period"
                            >
                                <option :value="1">1</option>
                                <option :value="2">2</option>
                                <option :value="3">3</option>
                                <option :value="6">6</option>
                                <option :value="12">12</option>
                            </select><br>
                        </td>
                        <td>payment_period:1,2,3,6,12</td>
                    </tr>

                </tbody>
            </table>

            <table>
                <caption>费用项目列表:<button>+</button></caption>
                <thead>
                    <th>费用类型</th>
                    <th>房间</th>
                    <th>工位</th>
                    <th>面积(area)</th>
                    <th>支付方式</th>
                    <th>开始日期(begin)</th>
                    <th>结束日期(end_date)</th>
                    <th>费用/单价(cost)</th>
                    <th>单位(cost_unit)</th>
                </thead>
                <tbody>
                    <tr v-for="(cost, index) in contract_data.costs" :key="index">
                        <td>
                            <select name="cost_type" id="select_cost_type"
                                    v-model="cost.cost_type"
                            >
                                <option :value="0">租金0</option>
                                <option :value="1">物业费1</option>
                            </select>
                        </td>
                        <td>
                            {{cost.room_position}}
                        </td>
                        <td>
                            {{cost.seat_position}}
                        </td>
                        <td>
                            <input type="number" step="0.001"
                                   v-model="cost.area"
                            >
                        </td>
                        <td>
                            <select name="pay_type" :id="'select_pay_type_'+cost.id"
                                    v-model="cost.pay_type"
                            >
                                <option :value="0">预付期0</option>
                                <option :value="1">免租期1</option>
                            </select>
                        </td>
                        <td>
                            <input type="date"
                                   v-model="cost.begin_date">
                        </td>
                        <td>
                            <input type="date"
                                   v-model="cost.end_date">
                        </td>
                        <td>
                            <input type="number" step="0.001"
                                   v-model="cost.cost"
                            >
                        </td>
                        <td>
                            <select name="cost_unit" :id="'select_cost_unit_'+cost.id"
                                    v-model="cost.pay_type"
                            >
                                <option :value="0">元0</option>
                                <option :value="1">元/天1</option>
                                <option :value="2">元/月2</option>
                                <option :value="3">元/季3</option>
                                <option :value="4">元/天/m²4</option>
                                <option :value="5">元/月/m²5</option>
                                <option :value="6">元/季/m²6</option>
                                <option :value="7">元/按天7</option>
                                <option :value="8">元/按天8</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

        </form>
        <h3>data:{{data}}</h3>
        <h3>contract_data:{{contract_data}}</h3>
        <button type="button" class="btn btn-primary" @click="handleContractToBills">handleContractToBills</button>
        <h2>bills:</h2>
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
        <!-- <h3>res_data:{{res_data}}</h3> -->
        <table class="bill-table">
            <caption>账单列表</caption>
            <thead>
                <th>s</th>
                <th>类型</th>
                <th>开始</th>
                <th>结束</th>
                <th>应收账</th>
                <th>备注</th>
            </thead>
            <tbody>
                <tr v-for="(bill, index) in res_data" :key="index">
                    <td>{{bill.state}}</td>
                    <td>{{bill.charging_subject}}</td>
                    <td>{{bill.start_date}}</td>
                    <td>{{bill.end_date}}</td>
                    <td>{{bill.receivable_amount}}</td>
                    <td>{{bill.remark}}</td>
                </tr>
            </tbody>
        </table>
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
    // const res_data = ref(Object())
    const res_data = ref([])
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
<style scoped>
table {
    margin: auto;
}
.bill-table{
    border: 1px solid gray;
}
.bill-table th{
    border: 1px solid lightgray;
}
.bill-table td {
    border: 1px solid lightgray;
}

</style>