import { useStoryProgress } from "@/story/state/useStoryProgress";
import { CluesBar } from "@/story/components/CluesBar";
import { CaseFileDrawer } from "@/story/components/CaseFileDrawer";
import { Scene1 } from "@/story/scenes/Scene1";
import { Scene2 } from "@/story/scenes/Scene2";
import { Scene3 } from "@/story/scenes/Scene3";
import { Scene4 } from "@/story/scenes/Scene4";
import { Scene5 } from "@/story/scenes/Scene5";
import { Scene6 } from "@/story/scenes/Scene6";
import { Scene7 } from "@/story/scenes/Scene7";
import { Scene8 } from "@/story/scenes/Scene8";
import { StoryCompletion } from "@/story/scenes/StoryCompletion";

export default function VanishingCartLesson({ onExit }: { onExit: () => void }) {
  const {
    progress,
    cluesFound,
    goToScene,
    clickChart,
    answerHypothesis,
    revealReceipt,
    answerRiya,
    revealCard,
    answerKabir,
    revealChatMessage,
    answerSneha,
    setMatch,
    answerRecommendation,
    answerFillIn,
    setReflection,
    revealReflectionExample,
    replay,
  } = useStoryProgress();

  if (progress.scene === 9) {
    return <StoryCompletion progress={progress} onReplay={replay} onExit={onExit} />;
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-6 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">The Mystery of the Vanishing Cart</p>
      <div className="mt-2">
        <CluesBar found={cluesFound} total={5} />
      </div>

      <div className="mt-5">
        {progress.scene === 1 && <Scene1 chartClicked={progress.chartClicked} onClickChart={clickChart} onContinue={() => goToScene(2)} />}
        {progress.scene === 2 && <Scene2 selected={progress.initialHypothesis} onSelect={answerHypothesis} onContinue={() => goToScene(3)} />}
        {progress.scene === 3 && (
          <Scene3
            revealed={progress.receiptRevealed}
            onReveal={revealReceipt}
            selected={progress.riyaAnswer}
            onSelect={answerRiya}
            onContinue={() => goToScene(4)}
          />
        )}
        {progress.scene === 4 && (
          <Scene4
            cardsRevealed={progress.cardsRevealed}
            onRevealCard={revealCard}
            selected={progress.kabirAnswer}
            onSelect={answerKabir}
            onContinue={() => goToScene(5)}
          />
        )}
        {progress.scene === 5 && (
          <Scene5
            chatRevealed={progress.chatRevealed}
            onRevealMessage={revealChatMessage}
            selected={progress.snehaAnswer}
            onSelect={answerSneha}
            onContinue={() => goToScene(6)}
          />
        )}
        {progress.scene === 6 && <Scene6 matches={progress.matches} onMatch={setMatch} onContinue={() => goToScene(7)} />}
        {progress.scene === 7 && (
          <Scene7
            initialHypothesis={progress.initialHypothesis}
            selected={progress.recommendation}
            onSelect={answerRecommendation}
            onContinue={() => goToScene(8)}
          />
        )}
        {progress.scene === 8 && (
          <Scene8
            fillIn={progress.fillIn}
            onSelectFillIn={answerFillIn}
            reflection={progress.reflection}
            onReflectionChange={setReflection}
            reflectionExampleRevealed={progress.reflectionExampleRevealed}
            onRevealExample={revealReflectionExample}
            onFinish={() => goToScene(9)}
          />
        )}
      </div>

      <CaseFileDrawer foundCount={cluesFound} />
    </div>
  );
}
