interface ICall {
    userId: number,
    origin: number,
    destiny: number,
    time: number,
    price: number,
    plan: number,
    priceWithPlan: number
}

interface CallData {
    origin: number,
    destiny: number,
    time: number,
    plan: number,
    name: string
}

export { ICall, CallData }