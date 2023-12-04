import { ActionState } from "@/lib/createSafeAction";
import { Board } from "@prisma/client";
import { z } from "zod";
import { DeleteBoard } from "./schema";

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;
