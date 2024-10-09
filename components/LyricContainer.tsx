import { useEffect, useState, Fragment } from "react";

export default function LyricContainer({
  lyricA,
  lyricB,
  onComplete,
}: {
  lyricA: string;
  lyricB: string;
  onComplete: () => void;
}) {
  const [displayedLyricA, setDisplayedLyricA] = useState("");
  const [displayedLyricB, setDisplayedLyricB] = useState("");
  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const intervalA = setInterval(() => {
      if (indexA < lyricA.length) {
        setDisplayedLyricA((prev) => prev + lyricA[indexA]);
        setIndexA((prev) => prev + 1);
      } else {
        clearInterval(intervalA);
      }
    }, 10);

    return () => clearInterval(intervalA);
  }, [indexA, lyricA]);

  useEffect(() => {
    const intervalB = setInterval(() => {
      if (indexB < lyricB.length) {
        setDisplayedLyricB((prev) => prev + lyricB[indexB]);
        setIndexB((prev) => prev + 1);
      } else {
        clearInterval(intervalB);
        if (!isCompleted) {
          setIsCompleted(true);
          onComplete(); // 表示が完了したことを通知
        }
      }
    }, 10);

    return () => clearInterval(intervalB);
  }, [indexB, lyricB, isCompleted, onComplete]);

  return (
    <>
      <div className="text-container">
        <div className="text-wrapper">
          <p>
            {displayedLyricA.split("$").map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
        <div className="text-wrapper">
          <p>
            {displayedLyricB.split("$").map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <style jsx>{`
        .text-container {
          color: white;
          line-height: 1.8rem;
          display: flex;
          justify-content: space-between;
          width: 45vw;
          margin-bottom: 2rem;
        }

        .text-wrapper {
          width: 20vw;
        }
      `}</style>
    </>
  );
}
