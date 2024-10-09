import { useState } from "react";
import { Battle01, Battle02 } from "@/public/lyrics/battle";
import LyricContainer from "@/components/LyricContainer";

export default function Result() {
  const [play, setPlay] = useState<boolean>(false);
  const battle = Battle01;
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const handleComplete = () => {
    setCurrentLyricIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <main>
        <div>
          {!play ? (
            <button
              onClick={() => {
                setPlay(true);
              }}
            >
              Show Result
            </button>
          ) : (
            <>
              <div className="battle-wrapper">
                {battle.lyric.map((lyric, index) =>
                  index <= currentLyricIndex ? (
                    <LyricContainer
                      key={index}
                      lyricA={lyric.playerA}
                      lyricB={lyric.playerB}
                      onComplete={handleComplete}
                    />
                  ) : null
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          background: var(--main-bg-color);
          overflow: hidden;
        }

        button {
          font-size: 2rem;
          width: 300px;
          height: 4rem;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: none;
          border-radius: 2rem;
        }

        .battle-wrapper {
          cursor: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 34rem;
        }
      `}</style>
    </>
  );
}
