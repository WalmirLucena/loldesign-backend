"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePrice = void 0;
const planCoverageCheck = (plan, time) => {
    let timeDifference = time - plan;
    if (timeDifference <= 0)
        return { timeDifference: 0, excess: 1 };
    else {
        return { timeDifference, excess: 1.1 };
    }
};
const definePriceMin = (origin, destiny) => {
    let priceMin = 0;
    if (origin === 11 && destiny === 16) {
        priceMin = 1.90;
    }
    if (origin === 11 && destiny === 17) {
        priceMin = 1.70;
    }
    if (origin === 11 && destiny === 18) {
        priceMin = 0.90;
    }
    if (origin === 16) {
        priceMin = 2.90;
    }
    if (origin === 17) {
        priceMin = 2.70;
    }
    if (origin === 18) {
        priceMin = 1.90;
    }
    return priceMin;
};
const calculatePrice = (data) => {
    const { origin, destiny, plan, time } = data;
    const { timeDifference, excess } = planCoverageCheck(plan, time);
    const priceMin = definePriceMin(origin, destiny);
    const price = parseFloat((priceMin * timeDifference * excess).toFixed(2));
    const priceWithPlan = parseFloat((priceMin * time).toFixed(2));
    return { price, priceWithPlan };
};
exports.calculatePrice = calculatePrice;
//# sourceMappingURL=calculatePrice.js.map