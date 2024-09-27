import { TransparentBox } from "@/app/ui/components/transparent-box";
import { Basics } from "@/app/ui/components/basics";
import { Gestures } from "@/app/ui/components/gestures";
import { AnimationControls } from "@/app/ui/components/animation-controls";
import { ViewBasedAnimation } from "@/app/ui/components/view-based-animations";
import { ScrollBasedAnimation } from "@/app/ui/components/scroll-based-animation";
import { RotatoryBox } from "@/app/ui/components/rotatory-box";
import { DropBox } from "@/app/ui/components/drop-box";

export default function Home(): JSX.Element {
  return (
    <div className="website-wrapper flex w-full h-full max-w-screen-2xl items-center justify-center">
      <div className="contnets w-fit h-fit flex flex-col flex-wrap gap-20 p-4 items-center justify-center">
        <TransparentBox />
        <Basics />
        <Gestures />
        <AnimationControls />
        <ViewBasedAnimation />
        <ScrollBasedAnimation />
        <RotatoryBox />
        <DropBox />
      </div>
    </div>
  );
}
