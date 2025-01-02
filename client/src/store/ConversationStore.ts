import { create } from "zustand";
import { Conversation } from "../model/model";

export type ConversationState = {
  conversationData: Conversation[];
};

export type ConversationActions = {
  addConversation: (val: Conversation) => void;
};

export const useConversationStore = create<
  ConversationState & ConversationActions
>((set) => ({
  conversationData: [],
  addConversation: (newConversation: Conversation) =>
    set((state) => ({
      conversationData: [...state.conversationData, newConversation],
    })),
}));
