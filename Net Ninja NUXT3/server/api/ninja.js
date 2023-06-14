

export default defineEventHandler(async (event)=>
{

    const {data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=e2aimCf2BkAX94tqp6jctAebkgyTmJjN4tTxWpBT&currencies=EUR%2CUSD%2CCAD')

    return data;

})