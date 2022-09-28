import { IconsProps } from "../../index";
const ArrowPrevIcon = (props: IconsProps): JSX.Element => {
  const { className } = props;
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="24px"
      height="24px"
      fill="none"
    >
      <path
        stroke="currentColor"
        stroke-width="1.5"
        d="M15.525 18.966L8.558 12l6.967-6.967"
      ></path>
    </svg>
  );
};

export { ArrowPrevIcon };
