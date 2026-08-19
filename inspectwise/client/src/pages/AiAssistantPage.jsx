import axios from "axios";

import { useState } from "react";

import PageHeader from "../components/common/PageHeader";

import "../pages/AiAssistantPage.css";

// ---------------------------------- //

const suggestedQuestions = ["What is a bottom plate?", "What spacing do M12 anchor bolts need?", "Explain wall bracing.", "When is framing inspected?"];

// ------------------------------

function AiAssistantPage() {
  //  State
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Functions
  function handleSuggestedQuestion(suggestedQuestion) {
    setQuestion(suggestedQuestion);
  }

  async function handleSendQuestion() {
    const trimmedQuestion = question.trim();

    if (trimmedQuestion === "") {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3000/api/ai", {
        question: trimmedQuestion,
      });

      const newMessage = {
        id: Date.now(),
        question: trimmedQuestion,
        answer: response.data.answer,
      };

      setChatHistory((currentHistory) => [...currentHistory, newMessage]);

      setQuestion("");
    } catch (error) {
      console.error(error);

      setErrorMessage("The AI Assistant could not respond. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleQuestionKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendQuestion();
    }
  }

  // ---------------------------------- //

  return (
    <section className="ai-assistant-page">
      <PageHeader
        title="AI Assistant"
        breadcrumbs={[
          {
            label: "AI Assistant",
          },
        ]}
      />

      <div className="ai-assistant-content">
        {/* ⁡⁣⁢⁢--- Suggested Questions ---⁡ */}
        <section className="ai-assistant-card">
          <h2>Suggested Questions</h2>

          <div className="suggested-question-list">
            {suggestedQuestions.map((suggestedQuestion) => (
              <button key={suggestedQuestion} className="suggested-question-button" type="button" onClick={() => handleSuggestedQuestion(suggestedQuestion)}>
                {suggestedQuestion}
              </button>
            ))}
          </div>
        </section>

        {/* ⁡⁣⁢⁢--- Chat History ---⁡ */}
        <section className="ai-assistant-card">
          <h2>Chat History</h2>

          {chatHistory.length > 0 ? (
            <div className="chat-history">
              {chatHistory.map((chat) => (
                <div className="chat-history-item" key={chat.id}>
                  <div className="chat-message chat-message--user">
                    <i className="bi bi-person-fill" aria-hidden="true"></i>

                    <div>
                      <strong>You</strong>
                      <p>{chat.question}</p>
                    </div>
                  </div>

                  <div className="chat-message chat-message--ai">
                    <i className="bi bi-stars" aria-hidden="true"></i>

                    <div>
                      <strong>InspectWise AI</strong>
                      <p>{chat.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="chat-history-empty">No conversation yet. Ask a question to get started.</p>
          )}
        </section>

        {/* Loading State */}

        {isLoading && (
          <div className="chat-message chat-message--ai">
            <i className="bi bi-stars" aria-hidden="true"></i>

            <div>
              <strong>InspectWise AI</strong>
              <p className="ai-loading-message">Generating a response...</p>
            </div>
          </div>
        )}

        {/* Error Message */}

        {errorMessage && (
          <p className="ai-assistant-error" role="alert">
            {errorMessage}
          </p>
        )}

        {/* ⁡⁣⁢⁢--- Ask a Question ---⁡ */}
        <section className="ai-assistant-card ai-question-card">
          <h2>Ask a question...</h2>

          <label className="visually-hidden" htmlFor="aiQuestion">
            Ask the AI assistant a question
          </label>
          <textarea id="aiQuestion" name="aiQuestion" value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={handleQuestionKeyDown} placeholder="Ask about building components, inspections or NZ building Standards..."></textarea>
        </section>

        <div className="ai-assistant-actions">
          <button className="button button--primary button--medium" type="button" onClick={handleSendQuestion} disabled={question.trim() === "" || isLoading}>
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span>Generating...</span>
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------- //

export default AiAssistantPage;
