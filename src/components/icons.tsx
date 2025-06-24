import type { SVGProps } from 'react';

export function IconLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <path d="M15.5 14.5a2.5 2.5 0 0 0-5 0V17a2.5 2.5 0 0 0 5 0V14.5z" />
    </svg>
  );
}

export function IconPolygon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M68.7,35.6c-2.3-2.3-5.2-3.6-8.3-3.6H39.6c-3.1,0-6,1.3-8.3,3.6S27.8,42,27.8,45.1v9.8c0,3.1,1.3,6,3.6,8.3  s5.2,3.6,8.3,3.6h9.8c3.1,0,6-1.3,8.3-3.6s3.6-5.2,3.6-8.3V45.1C72.2,42,71,37.9,68.7,35.6z M55.3,55.3c-0.4,0.4-1,0.7-1.5,0.7  H46.1c-0.6,0-1.1-0.2-1.5-0.7s-0.7-1-0.7-1.5V46.1c0-0.6,0.2-1.1,0.7-1.5s1-0.7,1.5-0.7h7.6c0.6,0,1.1,0.2,1.5,0.7  s0.7,1,0.7,1.5v7.6C56,54.3,55.7,54.9,55.3,55.3z" />
    </svg>
  );
}

export function IconIpfs(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M84.1,43.4l-12-20.8L61,43.4H84.1z M55.4,32.7L43.4,12L32.2,31.2l11.2,19.3L55.4,32.7z M38.4,22.6L15.9,63.3h22.5L38.4,22.6z   M50,88l12.5-21.7H37.5L50,88z M58.7,63.3h25.4L61.6,22.6L58.7,63.3z" />
    </svg>
  );
}

export function IconCeramic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M50,8.3C26.9,8.3,8.3,26.9,8.3,50c0,13.6,6.5,25.7,16.7,33.3V16.7C33.3,12.5,41.2,8.3,50,8.3z M50,91.7  C73.1,91.7,91.7,73.1,91.7,50c0-13.6-6.5-25.7-16.7-33.3v66.7C66.7,87.5,58.8,91.7,50,91.7z" />
    </svg>
  );
}
