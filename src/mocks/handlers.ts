import { chatHandlers } from "./chat";
import { couponHandlers } from "./coupon";
import { storeHandlers } from "./store";

export const handlers = [...chatHandlers, ...couponHandlers, ...storeHandlers];
