import { useCallback, useEffect, useRef, useState } from "react";
import { ConversationRequest } from "../model/model";
import { Button } from "react-bootstrap";
import { useConversationStore } from "../store/ConversationStore";

export default function ConversationView() {
  const [question, setQuestion] = useState<string>("");
  const conversationData = useConversationStore(
    (state) => state.conversationData
  );
  const addConversation = useConversationStore(
    (state) => state.addConversation
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const conversationItems = conversationData.map((convObj, indx) => {
    return (
      <div className="ConversationItem" key={indx}>
        <div className="ConversationItemRole">{convObj.role}</div>
        <div className="ConversationItemContent">{convObj.content}</div>
      </div>
    );
  });

  const ask = async () => {
    console.log("ask");
    const payload: ConversationRequest = {
      question,
    };
    const decoder = new TextDecoder("utf-8");
    try {
      const response = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const reader = response.body?.getReader();
      if (!reader) return;
      let done, value;
      while (!done) {
        ({ value, done } = await reader.read());
        if (!done) {
          const chunk = decoder.decode(value);
          const json = JSON.parse(chunk);
          addConversation(json);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (divRef?.current) {
      console.log("scrolling");
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  console.log("Render::ConversationView");

  return (
    <div className="Conversation">
      {conversationItems}
      <div className="AskContainer">
        <input
          type="text"
          className="form-control AskInput"
          placeholder="Ask Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          ref={inputRef}
        />
        <Button onClick={ask}>Send</Button>
      </div>
      <div ref={divRef}>
        <br />
      </div>
    </div>
  );
}
