import { CallData } from "../interfaces/callInterface";

const planCoverageCheck = ( plan:number, time:number) => {
    let timeDifference = time - plan;
    if(timeDifference <= 0) return { timeDifference: 0, excess: 1}
    else {
    return {timeDifference, excess: 1.1}
    } 
}


export const calculatePrice = (data: CallData) => {
    const {origin, destiny, plan, time} = data;

    let priceMin;

    const {timeDifference, excess}= planCoverageCheck(plan, time);

    if(origin === 11 && destiny === 16){
        priceMin = 1.90;
    }
    if(origin === 11 && destiny === 17){
        priceMin = 1.70;
    }
    if(origin === 11 && destiny === 18){
        priceMin = 0.90;
    }
    if(origin === 16){
        priceMin = 2.90;
    }
    if(origin === 17){
        priceMin = 2.70;
    }
    else{
        priceMin = 1.90;
    }

    const price = priceMin*timeDifference*excess;
    const priceWithPlan = priceMin*time;
    return {price, priceWithPlan};
}