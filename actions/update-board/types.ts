import { ActionState } from "@/lib/createSafeAction";
import { Board } from "@prisma/client";
import { z } from "zod";
import { UpdateBoard } from "./schema";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
