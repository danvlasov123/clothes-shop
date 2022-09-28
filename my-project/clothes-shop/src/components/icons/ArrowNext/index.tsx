import { IconsProps } from "../../index";
const ArrowNextIcon = (props: IconsProps): JSX.Element => {
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
        d="M8.474 18.966L15.44 12 8.474 5.033"
      ></path>
    </svg>
  );
};

export { ArrowNextIcon };
