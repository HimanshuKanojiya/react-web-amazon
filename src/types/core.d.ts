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

interface DefaultLanguagePopUpProps {
  callbackHandler: () => void;
}

interface DefaultListAccountMenuProps {
  callbackHandler?: () => void;
}

interface DefaultDualTextItemProps {
  withIcon: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
  actionCTA?: () => void;
  normalText: string;
  highlightText: string;
  PopUpComponent?: JSX.Element;
}

interface DefaultCartItemProps {
  itemsInCart: string;
  actionCTA: () => void;
}

interface DefaultMenuItemProps {
  displayTitle: string;
  link: string;
}

interface DefaultHorizontalItemsProp {
  menuTitle: string;
  menuItems: DefaultMenuItemProps[];
}

interface DefaultVerticalListItemsProp {
  menuItems: DefaultMenuItemProps[];
}

interface DefaultVerticalSingleListItemsProp {
  menuTitle: string;
  menuItem: DefaultMenuItemProps;
}

interface DefaultOneImageProductCardProps {
  title: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface DefaultMultiImageProductCardProps {
  title: string;
  subProductImage: {
    image: string;
    title: string;
    ctaLink: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

interface DefaultImageProductCardProps {
  productName: string;
  productResouceLink: string;
  contentType?: "image" | "video";
  ctaLink: string;
}

interface DefaultVideoProductCardProps {
  productName: string;
  productResouceLink: string;
  ctaLink?: string;
}

interface DefaultCarouselBarProps {
  title: string;
  ctaText: string;
  ctaLink: string;
  productItems: DefaultImageProductCardProps[];
}
