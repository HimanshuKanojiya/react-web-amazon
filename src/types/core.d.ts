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
  icon?: IconType;
  iconPosition?: "left" | "right";
  actionCTA: () => void;
  normalText: string;
  highlightText: string;
}

interface DefaultLanguagePopUpProps {
  callbackHandler: () => void;
}
