import { ActionState } from "@/lib/createSafeAction";
import { Board } from "@prisma/client";
import { z } from "zod";

import { CreateBoard } from "./schema";

export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
