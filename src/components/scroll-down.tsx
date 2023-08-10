import { useTheme } from 'next-themes';

type ScrollDownProps = {
  size?: number;
};
export const ScrollDown = ({ size = 64 }: ScrollDownProps) => {
  const { theme } = useTheme();
  const color = theme === 'dark' ? '#fff' : '#000';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 128 128"
    >
      <rect
        width="40"
        height="76"
        x="43.5"
        y="11.5"
        stroke={color}
        rx="19.5"
      ></rect>
      <circle cx="63.5" cy="28.5" r="4.5" fill={color}></circle>
      <path stroke={color} d="M37.354 92.646L63.858 119.151"></path>
      <path stroke={color} d="M63.399 119.404L89.903 92.899"></path>
      <path stroke={color} d="M37.354 84.646L63.858 111.151"></path>
      <path stroke={color} d="M63.399 111.404L89.903 84.899"></path>
    </svg>
  );
};
