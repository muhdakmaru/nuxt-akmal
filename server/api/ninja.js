export default defineEventHandler(async (event)=>{

    // const { name } = useQuery(event)

    // const { age } = await useBody(event)

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_SpB6huSArghto7298qO6ViJwMfPX2D1Wf8HnYmhS&currencies=EUR%2CUSD%2CCAD`)

    return data
})  