import { chatHandlers } from "./chat";
import { couponHandlers } from "./coupon";

export const handlers = [...chatHandlers, ...couponHandlers];
