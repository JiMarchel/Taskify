import { ActionState } from "@/lib/createSafeAction";
import { Card } from "@prisma/client";
import { z } from "zod";
import { UpdateCard } from "./schema";

export type InputType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputType, Card>;
