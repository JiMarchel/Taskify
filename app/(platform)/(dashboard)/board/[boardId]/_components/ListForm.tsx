"use client";

import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ElementRef, KeyboardEvent, useRef, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { ListWrapper } from "./ListWrapper";
import { FormSubmit } from "@/components/form/FormSubmit";
import { FormInput } from "@/components/form/FormInput";
import { useAction } from "@/hooks/useAction";
import { createList } from "@/actions/create-list";
import { toast } from "sonner";

export const ListForm = () => {
  const router = useRouter();
  const params = useParams();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const { execute, fieldErrors } = useAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" Created.`);
      disableEditing();
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onKeyDown = (e: any) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;

    execute({ title, boardId });
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className="w-full p-3 rounded-md bg-[#020817] space-y-4 shadow-md"
        >
          <FormInput
            ref={inputRef}
            errors={fieldErrors}
            id="title"
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
            placeholder="Enter list title..."
          />
          <input hidden value={params.boardId} name="boardId" />
          <div className="flex items-center gap-x-1">
            <FormSubmit variant="outline">Add list</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="outline">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <Button size="lg" onClick={enableEditing} variant="outline">
        <Plus className="h-4 w-4" /> <span>Add a List</span>
      </Button>
    </ListWrapper>
  );
};
