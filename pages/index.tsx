import Head from "next/head";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { SendIcon } from "@/components/icon/SendIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputTextVisibility, setInputTextVisibility] =
    useState<boolean>(false);
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isComposing, setIsComposing] = useState<boolean>(false); // IMEの状態を管理

  useEffect(() => {
    if (inputText.length > 0) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [inputText]);

  const clickEvent = useCallback(() => {
    if (buttonEnabled)
      setInputTextVisibility((prev) => {
        return !prev;
      });
  }, [buttonEnabled]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !isComposing) {
        // 大文字小文字両方に対応
        clickEvent();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clickEvent, isComposing]);

  return (
    <>
      <Head>
        <title>Siggraph Simple Interface</title>
        <meta name="description" content="for demo movie 241008" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="center-content">
            <div className={`input-text ${inputTextVisibility && "visible"}`}>
              <p>{inputText}</p>
            </div>
            <div
              className={`text-field-container ${
                inputTextVisibility ? "hidden" : ""
              }`}
            >
              <input
                className="text-field"
                type="text"
                defaultValue={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onCompositionStart={() => setIsComposing(true)} // IME変換の開始
                onCompositionEnd={() => setIsComposing(false)} // IME変換の終了
              />
              <button
                onClick={clickEvent}
                className={`${buttonEnabled && "button-enabled"}`}
              >
                <SendIcon
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    transform: "translate(5%, 5%)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          main {
            width: 100vw;
            height: 100vh;
            background: rgb(30, 30, 30);
          }

          .center-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .input-text {
            text-align: center;
            color: white;
            font-size: 3rem;
            height: 9rem;
            overflow-y: hidden;
            margin-bottom: 1rem;
            width: 40vw;
            p {
              transition: all 1s ease;
              transform: translate(0%, 200%);
            }
          }

          button {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: none;
            opacity: 0.5;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .button-enabled {
            opacity: 1;
            pointer-events: auto;
          }

          .visible {
            p {
              transform: translate(0%, 0%);
            }
          }

          .text-field-container {
            display: flex;
            gap: 0.5rem;
            transition: all 500ms ease;
          }

          .hidden {
            opacity: 0;
          }

          .text-field {
            border: none;
            height: 3rem;
            width: 40vw;
            border-radius: 1.5rem;
            background: rgb(255, 255, 255, 0.3);
            padding: 0.5rem 2rem;
            font-size: 1.5rem;
            color: white;
          }

          input:focus,
          textarea:focus {
            outline: none;
          }
        `}</style>
      </main>
    </>
  );
}
