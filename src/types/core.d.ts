import { IconType } from "react-icons";

interface DefaultButtonProps {
  ctaText: string;
  ctaLink: string;
}

interface DefaultActionBasedButtonProps {
  ctaText: string;
  ctaAction?: () => void;
  type: "submit" | "button";
  isDisabled: boolean;
}

interface DefaultErrorProps {
  title: string;
  issueText: string;
}

interface DefaultDualTextItemProps {
  withIcon: boolean;
  icon: IconType | string;
  actionCTA: React.MouseEventHandler<HTMLButtonElement>;
  normalText: string;
  highlightText: string;
}
