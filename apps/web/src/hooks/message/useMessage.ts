import { messageState } from "@recoil/messageState";
import { useRecoilState } from "recoil";

export const useMessage = () => {
  const [messages, setMessages] = useRecoilState(messageState);

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
