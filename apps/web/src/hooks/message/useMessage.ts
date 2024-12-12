import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useMessage = () => {
  const { messages, setMessages } = useStateMessages();

  const setMessage = (message: string) => {
    setMessages([message]);
  };

  const append = (_message: string) => {
    setMessages([...messages, _message]);
  };

  const clear = () => {
    setMessages([]);
  };

  return {
    first: messages[0],
    messages,
    setMessage,
    append,
    clear,
  };
};

type State = {
  messages: string[];
};

type Actions = {
  setMessages: (value: string[]) => void;
};

const useStateMessages = create<State & Actions>()(
  immer((set) => ({
    messages: [],
    setMessages: (value) =>
      set((state) => {
        state.messages = value;
      }),
  })),
);
