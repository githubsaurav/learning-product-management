import { useQuizProgress } from "@/state/useQuizProgress";
import { WelcomeScreen } from "@/screens/WelcomeScreen";
import { QuizScreen } from "@/screens/QuizScreen";
import { CompletionScreen } from "@/screens/CompletionScreen";
import { ReviewScreen } from "@/screens/ReviewScreen";
import { SummaryScreen } from "@/screens/SummaryScreen";

export default function Day1Lesson() {
  const { progress, currentScore, start, selectAnswer, goNext, reviewMistakes, exitReview, retryAll, finishForToday, resetAll } =
    useQuizProgress();

  switch (progress.screen) {
    case "quiz":
      return <QuizScreen progress={progress} onSelect={selectAnswer} onNext={goNext} />;
    case "completion":
      return (
        <CompletionScreen
          progress={progress}
          score={currentScore}
          onReviewMistakes={reviewMistakes}
          onRetryAll={retryAll}
          onFinish={finishForToday}
        />
      );
    case "review":
      return <ReviewScreen progress={progress} onBack={exitReview} />;
    case "summary":
      return <SummaryScreen onRestart={resetAll} />;
    case "welcome":
    default:
      return <WelcomeScreen onStart={start} />;
  }
}
