interface OctoIconProps {
  width?: string;
  height?: string;
  fill?: string;
  fillHeight: number;
  fillOpacity?: string;
  stroke?: string;
}

const OctopusIcon: React.FC<OctoIconProps> = ({
  width,
  height,
  fill,
  fillHeight,
  fillOpacity,
  stroke,
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 283.5 284.5"
    >
      <defs>
        <mask id="mask">
          <rect x="0" y="0" width="1000" height="1000" fill="white" />
          <rect x="0" y="0" width="1000" height={fillHeight} fill="black" />
        </mask>
      </defs>
      <g>
        <path
          fill={fill ?? "#3c607d"}
          fillOpacity={fillOpacity ?? "0.3"}
          stroke={stroke ?? "#333"}
          strokeWidth="5"
          d="M132.1,6.6L131.7,7h-1.8l-0.4,0.4h-1.7l-0.3,0.3h-1.4L125.8,8h-1.1l-0.3,0.4H123l-0.3,0.3h-1.1l-0.3,0.4h-1.1
		l-0.3,0.3h-0.7l-0.3,0.4h-1.1l-0.3,0.4h-0.7l-0.3,0.3h-0.7l-0.3,0.4h-0.7l-0.3,0.3h-0.7l-0.4,0.4h-0.3l-0.3,0.4h-0.7l-0.4,0.3H111
		l-0.3,0.4H110l-0.4,0.3h-0.3l-0.3,0.4h-0.3l-0.3,0.4h-0.7l-0.3,0.3h-0.3l-0.3,0.4h-0.4l-0.3,0.3h-0.3l-0.3,0.4h-0.3l-0.4,0.4H104
		l-0.7,0.7H103l-0.4,0.4h-0.3l-0.3,0.4h-0.3l-0.7,0.7h-0.3l-0.3,0.3h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3L97,19.9h-0.3l-1,1.1h-0.4
		l-1,1H94l-1.4,1.4h-0.3l-1.1,1h-0.3l-4.2,4.2h-0.3L85.8,29v0.4L83,32.2v0.4l-1.8,1.8v0.3L79.9,36v0.3l-1.1,1v0.4l-0.7,0.7v0.3
		l-0.7,0.7v0.3l-0.7,0.7v0.3L76,41.6V42l-0.7,0.7V43L75,43.4v0.4l-0.3,0.3v0.3L74,45.1v0.4l-0.3,0.3v0.3l-0.3,0.4v0.3l-0.3,0.4v0.3
		l-0.4,0.3v0.4l-0.3,0.3V49l-0.3,0.3v0.3L71.5,50v0.3l-0.3,0.4V51l-0.4,0.3V52l-0.3,0.4v0.3L70.2,53v0.4l-0.3,0.3v0.7l-0.3,0.3v0.7
		L69,56v0.3l-0.3,0.3v0.7l-0.3,0.4v0.7L68,58.8v0.7l-0.3,0.3v1l-0.4,0.4v1L67,62.5v1L66.6,64v1.1l-0.3,0.3v1.4L66,67.1v1.4l-0.4,0.3
		l0.4,0.3l-0.4,0.4v2.1l-0.3,0.3v3.2L65,75.4V84l0.3,0.3v4.9l0.3,0.3v2.8l0.4,0.3V94l0.3,0.3v1.4l0.3,0.3v1l0.3,0.4v1l0.3,0.3v1.1
		l0.4,0.3v0.7l0.3,0.4v0.7l0.3,0.3v1.1l0.3,0.3v0.3l0.3,0.3v0.7l0.4,0.3v0.3l0.3,0.3v0.7l0.3,0.3v0.3l0.3,0.3v0.4l0.3,0.3v0.7
		l0.4,0.3v0.4l0.3,0.3v0.3l0.3,0.3v0.3l0.3,0.4v0.3l0.3,0.3v0.3l0.4,0.3v0.4l0.3,0.3v0.3l0.3,0.3v0.3l0.7,0.7v0.3l0.4,0.3v0.3
		l0.3,0.4v0.3l0.3,0.3v0.3L76,119v0.3l0.4,0.3v0.3l0.3,0.3v0.4l0.7,0.7v0.3l0.7,0.7v0.3l0.3,0.3v0.3l0.7,0.7v0.3l0.3,0.3v0.3
		l0.7,0.7v0.3l0.7,0.7v0.3l0.3,0.4v0.3l0.7,0.7v0.3l0.3,0.4v0.3l0.3,0.4v0.4l0.3,0.3v0.4l0.4,0.3v0.7l0.3,0.3v0.7l0.3,0.4v1.1
		l0.3,0.3v3.2l-0.3,0.3v1.4l-0.3,0.3v0.7l-0.3,0.3v0.4l-0.4,0.3v0.7l-0.7,0.7v0.3l-0.3,0.4v0.4l-0.7,0.7v0.3l-0.7,0.7v0.3l-1.1,1.1
		v0.4l-3.5,3.5v0.3l-0.7,0.7h0l-1.4,1.4h-0.3l-1.4,1.4h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3l-0.3,0.3H68l-0.4,0.4h-0.3
		l-0.3,0.4h-0.3l-0.3,0.3H66l-0.3,0.4H65l-0.3,0.3h-0.4l-0.4,0.4h-0.7l-0.4,0.4h-0.7l-0.3,0.3h-1l-0.4,0.4h-1l-0.3,0.3h-1.4
		l-0.3,0.4h-2.1l-0.3,0.4h-8.8l-0.3-0.4h-2.1l-0.3-0.4h-0.7l-0.3-0.3H41l-0.4-0.4H40l-0.4-0.3h-0.3l-0.4-0.4h-0.3l-0.3-0.4h-0.4
		l-0.7-0.7h-0.3l-0.7-0.7h-0.3l-1.4-1.4v-0.4l-1-1.1v-0.3l-0.7-0.7v0.4l-0.3-0.4v-0.3l-0.4-0.4v-0.4l-0.4-0.3v-0.7l-0.4-0.4V147
		l0.4-0.4v-0.7l0.4-0.4v-0.7l0.7-0.7v-0.4l0.4-0.3V143l2.1-2.1h0.3l0.7-0.7h0.4l0.3-0.3h0.3l0.4-0.4H38l0.4-0.3h0.7l0.4-0.4H40
		l0.3-0.4h1.8l0.3-0.3h1.4l0.3-0.4h0.7l0.4-0.3h0.3l0.3-0.4h0.4l1.8-1.8v-0.4l0.3-0.3v-0.4l0.4-0.3V133l0.3-0.4v-1.8l-0.3-0.3v-0.7
		l-0.4-0.3v-0.7l-0.3-0.4V128l-0.7-0.7V127l-2.1-2.1h-0.4l-0.7-0.7h-0.3l-0.3-0.4h-0.7l-0.4-0.3h-0.3l-0.3-0.3H41l-0.4-0.3h-1.4
		l-0.4-0.3h-8.4l-0.4,0.3h-1.8l-0.4,0.3h-0.7l-0.4,0.3H26l-0.4,0.3h-0.7l-0.4,0.4h-0.7l-0.3,0.3h-0.4l-0.4,0.3h-0.4l-0.4,0.3h-0.3
		l-0.4,0.3h-0.4l-0.7,0.7h-0.3l-0.4,0.3H19l-0.7,0.7h-0.4l-1.1,1.1h-0.3v0.4l-0.4,0.3h-0.4l-3.5,3.5v0.4l-1.1,1.1v0.3l-0.7,0.7v0.4
		L9.7,136v0.4l-0.4,0.3v0.4L9,137.5v0.3l-0.7,0.7v0.7L8,139.5v0.4l-0.4,0.3v0.7l-0.3,0.3v0.4l-0.4,0.3v0.7l-0.3,0.3v1.1l-0.3,0.4
		v1.4l-0.4,0.4v1.4L5.6,148v4.9l0.3,0.4v2.4l0.4,0.3v2.1l0.3,0.4v1l0.3,0.4v0.7l0.4,0.4v0.7l0.3,0.4v1l0.4,0.4v0.4l0.3,0.3v0.4
		l0.4,0.3v0.7l0.4,0.3v0.4l0.3,0.3v0.4l0.4,0.4v0.3l0.3,0.4v0.3l0.7,0.7v0.3l0.7,0.7v0.4l0.3,0.4v0.3l0.7,0.7v0.4l1.4,1.4v0.4
		l3.1,3.1v0.4l1.1,1.1h0.3l1.4,1.4h0.4l1.4,1.4H22l0.4,0.3h0.4l0.7,0.7h0.4l0.7,0.7H25l0.3,0.3h0.4l0.7,0.7h0.4l0.3,0.4h0.4l0.4,0.4
		h0.4l0.4,0.3h0.7l0.4,0.4h0.4l0.4,0.3h0.3l0.4,0.4H32l0.3,0.4H33l0.3,0.3H34l0.3,0.4h1l0.4,0.3h1l0.3,0.4h0.7l0.4,0.4h1.4l0.4,0.3
		h1.8l0.3,0.4h2.5l0.3,0.3h3.5l0.4,0.4H55l0.3-0.4h1l0.4,0.4l0.3-0.4h1.4l0.3-0.3h0.4l0.3,0.3h0.3l0.4-0.3h2.1l0.4-0.4H64l0.3-0.3
		h1.4l0.3-0.4h1l0.4-0.4h1l0.3-0.3h1.1l0.3-0.4h0.7l0.3-0.3h1l0.4-0.4h0.7l0.3-0.4h0.3l0.4-0.3h0.7l0.3-0.4h0.7l0.3-0.3h0.3l0.3-0.4
		h0.7l0.3-0.4h0.3l0.3-0.3h0.3l0.4-0.4h0.3l0.3-0.3H80l0.3-0.4h0.4l0.3-0.4l0.3,0.4v0.4l-0.3,0.3h-0.3v0.4l-1.1,1.1v0.3l-1.1,1.1
		v0.4l-1,1v0.4l-1.4,1.4v0.4l-1.4,1.4v0.4l-1,1.1v0.3l-1.1,1.1v0.4l-1.1,1.1v0.3l-0.7,0.7v0.4l-0.7,0.7v0.4l-1.1,1.1v0.3l-1.1,1.1
		v0.4l-1,1v0.4l-1.1,1.1v0.3l-1,1.1v0.4l-1.1,1.1v0.3l-1.4,1.4v0.3l-1.4,1.4v0.3l-1,1.1v0.4l-0.4,0.3h-0.3v0.4l-4.9,4.9H55l-0.7,0.7
		H54l-0.7,0.7h-0.4l-0.3,0.3h-0.3l-0.4,0.4h-0.3l-0.7,0.7h-0.3l-0.4,0.4h-0.3l-0.4,0.3h-0.7l-0.4,0.4H48l-0.4,0.3h-0.3L47,222h-0.7
		l-0.4,0.4h-1l-0.3,0.3h-1.4l-0.3,0.4h-5.3l-0.4-0.4h-0.7l-0.4-0.3h-1l-0.3-0.4h-0.4l-0.3-0.4h-0.4l-0.3-0.3H33l-0.7-0.7h-0.4
		l-1-1.1v-0.4l-0.7-0.7V218l-0.4-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3v-3.2l0.3-0.3V210l0.4-0.4v-1.1l0.4-0.3v-1.1l0.4-0.4v-1l0.4-0.4
		v-3.5l-0.4-0.4v-0.3l-0.4-0.4v-0.3l-1.8-1.8h-1l-0.4-0.4h-2.1l-0.4,0.4h-0.7l-0.4,0.3h-0.7l-0.4,0.4H22l-0.4,0.3h-0.4l-0.4,0.4
		h-0.4l-0.7,0.7h-0.4l-2.4,2.4h-0.4v0.4l-1.4,1.4v0.4l-0.7,0.7v0.4l-0.7,0.7v0.4l-0.4,0.3v0.4l-0.3,0.3v0.4l-0.4,0.4v0.3l-0.4,0.4
		v0.7l-0.3,0.4v0.3l-0.4,0.4v1.1l-0.3,0.3v0.7l-0.4,0.4v1.4l-0.4,0.4l0.4,0.4l-0.4,0.3v5.6l0.4,0.3l-0.4,0.4l0.4,0.4v1l0.4,0.4v1.1
		l0.3,0.3v0.7l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.7l0.4,0.4v0.4l0.3,0.3v0.4L14,232v0.4l0.4,0.3v0.4l0.7,0.7v0.3l1.1,1.1v0.4
		l4.5,4.6h0.4l0.7,0.7h0.3l0.7,0.7h0.4l0.7,0.7h0.4L25,243h0.4l0.3,0.4h0.4l0.4,0.4H27l0.4,0.3h0.3l0.4,0.4h0.7l0.4,0.3h0.3l0.4,0.4
		h0.7l0.4,0.4h0.7l0.4,0.3h0.7l0.4,0.4h1.4l0.4,0.3h1l0.3,0.4h3.2l0.3,0.4H47l0.3-0.4h2.5l0.3-0.4h1.8l0.4-0.3h1.4l0.4-0.4h1.4
		l0.4-0.3h1l0.3-0.4h0.7l0.3-0.4h0.7l0.4-0.3H60l0.4-0.4h0.3l0.4-0.3h0.7l0.4-0.4h0.3l0.4-0.4h0.7l0.4-0.3h0.4l0.3-0.4H65l0.3-0.3
		h0.3l0.4-0.4h0.3l0.3-0.4h0.3l0.7-0.7H68l0.3-0.3h0.3l0.7-0.7h0.3l0.7-0.7h0.3l0.7-0.7h0.3l0.7-0.7h0.4l1-1.1H74l1.4-1.4H76
		l7.4-7.4v-0.3l1.4-1.4v-0.3l1.4-1.4v-0.3L88,222v-0.4l1.4-1.4v-0.4l2.1-2.1V217l1.8-1.8v-0.4l1.4-1.4V213l1.1-1.1v-0.3l1.4-1.4V210
		l1.4-1.4v-0.3l1.4-1.4v-0.3l1.4-1.4v-0.3l1.4-1.4V203l1.4-1.4v-0.3l1.4-1.4v-0.3l1.1-1.1v-0.4l1-1v-0.4l0.7-0.7v-0.4l0.7-0.7
		l0.3,0.4v0.3l-0.3,0.4v2.1l-0.3,0.4v2.1l-0.3,0.3v1.4l-0.4,0.3v1.8l-0.3,0.4v1.8l-0.3,0.3v1.4l-0.3,0.3v1.8l-0.3,0.4v1.1l-0.4,0.3
		v1.4l-0.3,0.3v1.1l-0.3,0.4v1.4l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.4,0.4v1.4l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.3,0.3v1.1l-0.3,0.4v1
		l-0.4,0.4v0.7l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.3,0.4v0.7l-0.3,0.4v0.7l-0.4,0.4v0.7l-0.3,0.3v0.7l-0.3,0.4v0.7l-0.3,0.4v0.7l-0.3,0.4
		v0.3l-0.4,0.4v0.7l-0.3,0.4v0.7l-0.3,0.3v0.4l-0.3,0.4v0.3l-0.3,0.4v0.7l-0.4,0.4v0.3l-0.3,0.4v0.3l-0.3,0.4v0.4l-0.3,0.3v0.4
		l-0.3,0.3v0.4l-0.3,0.4v0.3l-0.4,0.4v0.3l-0.7,0.7v0.3l-0.3,0.4v0.3l-0.7,0.7v0.3l-1,1.1v0.4l-4.6,4.5H89l-0.7,0.7h-0.4l-0.7,0.7
		h-0.3l-0.3,0.4h-0.4l-0.3,0.4h-1l-0.4,0.4h-1l-0.3,0.4H79l-0.3-0.4H78l-0.4-0.4h-0.7l-0.3-0.4h-0.3l-0.4-0.4h-0.3l-0.3-0.3H75
		l-2.1-2.1h-0.4l-0.3-0.4h-0.3l-0.3-0.4h-0.3l-0.4-0.3h-4.5l-0.3,0.3h-0.4l-0.4,0.4H65l-1.4,1.4v0.4l-0.3,0.4v0.3L63,257v1.1
		l-0.4,0.4v4.5l0.4,0.4v1l0.3,0.4v0.7l0.3,0.3v0.4l0.4,0.4v0.7l0.7,0.7v0.4l0.3,0.4v0.4l0.7,0.7v0.4l1.4,1.4v0.4h0.3l2.5,2.5h0.3
		L69,274h0.4l0.7,0.7h0.3l0.3,0.4h0.4l0.3,0.3h0.3l0.3,0.4h0.3l0.4,0.4h0.7l0.3,0.4H74l0.4,0.4h0.7l0.3,0.3h0.7l0.3,0.4h1l0.4,0.4
		h1.8l0.3,0.4H82l0.3,0.4h3.8l0.4-0.4h3.8l0.3-0.4H92l0.3-0.4h1.4l0.3-0.4h0.7l0.4-0.3h1l0.3-0.4h0.3l0.4-0.4h0.7l0.3-0.4h0.3
		l0.4-0.4h0.3l0.3-0.3h0.3l0.3-0.4h0.4l0.3-0.4h0.3l0.3-0.4h0.3l0.7-0.7h0.3l0.3-0.4h0.3l0.7-0.7h0.3l0.7-0.7h0.4l0.7-0.7h0.3l1.1-1
		h0.3l5.9-6v-0.4l1.1-1v-0.4l1.1-1v-0.4l1-1.1v-0.3l0.3-0.4v-0.4l0.7-0.7v-0.3l0.3-0.4v-0.4l0.7-0.7v-0.3l0.4-0.3v-0.4l0.3-0.4v-0.3
		l0.7-0.7V253l0.3-0.4v-0.3l0.4-0.4v0.1l0.3-0.4v-0.4l0.3-0.3v-0.4l0.3-0.3v-0.4l0.3-0.4v-0.3l0.4-0.4v-0.3l0.3-0.4v-0.4l0.3-0.3
		v-0.7l0.3-0.4V246l0.3-0.3v-0.4l0.4-0.3v-0.4l0.3-0.4v-0.7l0.3-0.3v-0.4l0.3-0.4v-0.7l0.3-0.3v-0.7l0.4-0.3V240l0.3-0.3V239
		l0.3-0.3V238l0.4-0.4v-0.4l0.3-0.3v-1.1l0.4-0.4v-0.7l0.3-0.3v-0.7l0.4-0.3v-1.1l0.4-0.3v-0.7l0.3-0.3v-0.7l0.4-0.4v-0.7l0.3-0.4
		v-1.1l0.4-0.3v-0.7l0.4-0.4v-1.1l0.3-0.3v-0.7l0.4-0.3v-1.1l0.3-0.4v-1l0.4-0.4v-0.7l0.4-0.4v-1.1l0.3-0.3v-1.1l0.4-0.4v-1l0.3-0.4
		v-0.7l0.4-0.4v-1.1l0.4-0.3V212l0.3-0.4v-1l0.4-0.4v-1.4l0.3-0.4v-1.1l0.4-0.3v-1.1l0.4-0.4v-0.7l0.3-0.4V203l0.4-0.4v-1l0.3-0.4
		v-1.1l0.4-0.3v-1.1l0.4-0.4v-1.4l0.3-0.4v-1.1l0.4-0.3V194l0.3-0.4v-1.4l0.4-0.4v-1l0.4-0.4v-1.1l0.3-0.3v-1.4l0.4-0.3v-0.4
		l0.3-0.4l0.4,0.4v1.4l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1.1l0.4,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.3,0.3v1.4
		l0.4,0.3v1.1l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.4,0.3v0.7l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3
		v1.1l0.4,0.4v1.1l0.3,0.3v1.1l0.4,0.4v1l0.3,0.4v0.7l0.4,0.4v1.1l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.4v0.7
		l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3v0.7l0.3,0.3v0.7l0.4,0.4v1.1l0.4,0.3v0.4l0.3,0.4v0.7l0.4,0.3v0.7l0.3,0.3v0.7l0.4,0.4v0.4
		l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.4l0.4,0.3v0.7l0.3,0.3v0.4l0.4,0.3v0.4l0.3,0.4v0.3l0.4,0.4v0.3
		l0.4,0.4v0.7l0.7,0.7v0.4l0.3,0.4v0.3l0.4,0.4v0.3l0.4,0.4v0.4l0.3,0.3v0.4l0.7,0.7v0.4l0.4,0.3v0.3l0.7,0.7v0.4l0.4,0.4v0.3
		l0.7,0.7v0.4l0.7,0.7v0.4l1.1,1.1v0.3l0.7,0.7v0.4l1.4,1.4v0.4h0.3l0.4,0.4v0.3l4.6,4.6h0.3l1.1,1h0.4l1,1.1h0.4l0.7,0.7h0.4
		l0.3,0.4h0.4l0.7,0.7h0.4l0.3,0.3h0.4l0.7,0.7h0.4l0.3,0.4h0.4l0.4,0.4h0.3l0.4,0.3h0.3l0.4,0.4h0.7l0.4,0.4h0.3l0.4,0.4h0.4
		l0.3,0.4h0.7l0.4,0.3h1.1l0.3,0.4h1.4l0.3,0.4h1.4l0.3,0.4h2.5l0.3,0.4h5.9l0.4-0.4h1.8l0.4-0.4h1.4l0.4-0.4h1.4l0.4-0.4h0.7
		l0.3-0.3h0.7l0.3-0.4h0.7l0.4-0.4h0.4l0.3-0.4h0.4l0.3-0.4h0.4l0.4-0.3h0.3l0.4-0.4h0.3l0.4-0.4h0.4l1-1h0.4l1.4-1.4h0.4l1.4-1.4
		v-0.4l1.1-1V269l1.1-1v-0.4l0.4-0.4v-0.4l0.3-0.3V266l0.4-0.4v-0.7l0.3-0.3v-0.4l0.4-0.4v-1.4l0.4-0.4v-4.9l-0.4-0.4V256l-0.4-0.3
		v-0.3L222,255v-0.4l-1.4-1.4h-0.3l-0.4-0.4h-0.3l-0.4-0.3H215l-0.4,0.3h-0.7l-0.4,0.4h-0.3l-0.7,0.7h-0.4l-1.8,1.8h-0.4l-0.3,0.3
		h-0.4l-0.3,0.4h-0.4l-0.4,0.4h-0.7l-0.3,0.4H206l-0.4,0.4h-4.2l-0.4-0.4h-0.7l-0.3-0.4h-0.7l-0.3-0.4h-0.7l-0.4-0.4h-0.4l-0.7-0.7
		h-0.3l-0.4-0.4h-0.4l-1.4-1.4h-0.4l-1-1.1V252l-1.8-1.8v-0.3l-1.4-1.4v-0.3l-0.3-0.4v-0.4l-0.7-0.7v-0.3l-0.3-0.4v0l-0.4-0.3v-0.4
		l-0.3-0.3v-0.4l-0.7-0.7v-0.4l-0.3-0.3v-0.7l-0.4-0.3v-0.4l-0.3-0.3v-0.4l-0.4-0.4v-0.3l-0.4-0.4v-0.3l-0.3-0.4v-0.7l-0.4-0.4V238
		l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.4-0.4v-0.3l-0.3-0.4V234l-0.4-0.4v-0.7l-0.3-0.3v-0.7l-0.4-0.4V231l-0.4-0.4v-0.7l-0.3-0.4v-1
		l-0.4-0.4v-0.7l-0.3-0.4v-1.1l-0.4-0.3v-0.7l-0.4-0.4v-1.1l-0.3-0.3V222l-0.4-0.4v-1.1l-0.3-0.3v-1.1l-0.4-0.4V218l-0.4-0.3V217
		l-0.3-0.4v-1.1l-0.4-0.3v-1.4l-0.3-0.3v-1.1l-0.4-0.4v-1.4l-0.4-0.4v-2.1l-0.3-0.4v-1.8l-0.4-0.3v-1.8l-0.3-0.4v-1.8l-0.4-0.4v-1.8
		l-0.4-0.3V197l-0.3-0.3v-1.4l0.3-0.3l1.1,1v0.4l1.4,1.4v0.4l1,1.1v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.8,1.8
		v0.4l1.1,1.1v0.3l1.4,1.4v0.3l1.1,1.1v0.4l1.1,1.1v0.3l1.4,1.4v0.3l1.8,1.8v0.4l2.1,2.1v0.4l1.4,1.4v0.4l1.8,1.8v0.4l1.8,1.8v0.3
		l5.9,5.9h0.4l0.4,0.4v0.3h0.3l1.8,1.8h0.4l1.1,1.1h0.3l0.7,0.7h0.4l0.7,0.7h0.4l0.7,0.7h0.4l0.7,0.7h0.3l0.7,0.7h0.3l0.4,0.4h0.3
		l0.4,0.3h0.4l0.3,0.4h0.4l0.3,0.4h0.4l0.4,0.3h0.3l0.4,0.4h0.3l0.4,0.3h0.4l0.3,0.4h0.7l0.4,0.4h0.4l0.3,0.3h0.7l0.4,0.4h0.7
		l0.4,0.3h0.7l0.4,0.4h0.3l0.4,0.4h1.1l0.3,0.3h1.1l0.4,0.4h1.4l0.3,0.3h1.8l0.4,0.4h2.1l0.3,0.4l0.4-0.4h0.7l0.4,0.4h6.6l0.4-0.4
		h3.1l0.4-0.4h1.4l0.4-0.3h1l0.4-0.4h1.1l0.3-0.3h0.4l0.4-0.4h0.7l0.3-0.4h0.7l0.3-0.3h0.4l0.3-0.4h0.4l0.4-0.3h0.4l0.3-0.4h0.4
		l0.4-0.4h0.4l0.7-0.7h0.4l0.7-0.7h0.4l0.7-0.7h0.4l0.7-0.7h0.3v-0.4l0.4-0.4h0.4l3.5-3.5v-0.3l1-1.1v-0.4l1.1-1v-0.4l0.4-0.3v-0.4
		l0.3-0.4V231l0.4-0.4v-0.3l0.7-0.7v-0.7l0.4-0.3v-0.4l0.3-0.4v-0.7l0.4-0.3v-0.7l0.4-0.3v-1.1l0.4-0.4v-1l0.4-0.4v-3.1l0.3-0.4V219
		l-0.3-0.3v-2.8l-0.4-0.4v-1.4l-0.4-0.4v-1l-0.4-0.4v-0.7l-0.4-0.4v-0.7l-0.3-0.4V210l-0.4-0.4v-0.3l-0.4-0.4v-0.4l-0.4-0.3v-0.4
		l-0.4-0.3v-0.4l-0.7-0.7V206l-0.7-0.7v-0.4l-1.4-1.4v-0.4h-0.4l-2.1-2.1h-0.3l-1.1-1.1h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.4l-0.4-0.4
		h-0.3l-0.4-0.3h-1.1l-0.3-0.4h-2.5l-0.4,0.4H256l-0.3,0.3h-0.4l-0.7,0.7v0.4l-0.7,0.7v0.7l-0.4,0.4v1.4l-0.4,0.4v0.7l0.4,0.4v1.1
		l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v2.5l-0.4,0.3l0.4,0.4l-0.4,0.3v0.7l-0.3,0.3v0.7l-0.4,0.4v0.4l-0.3,0.3
		h-0.4v0.4l-1.4,1.4h-0.4l-0.7,0.7h-1l-0.4,0.4h-0.4l-0.3,0.4h-0.4l-0.3,0.3h-1.4l-0.3,0.4h-4.6l-0.4-0.4h-1.4l-0.4-0.3h-1.1
		l-0.3-0.4h-0.7l-0.4-0.4H237l-0.3-0.3H236l-0.4-0.4h-0.4l-0.3-0.3h-0.4l-0.3-0.4h-0.4l-0.7-0.7h-0.4l-0.3-0.4H232l-0.4-0.3h-0.3
		l-0.7-0.7h-0.4l-0.7-0.7h-0.4l-1.8-1.8H227l-4.2-4.2v-0.4l-1.8-1.8v-0.3l-1.1-1.1v-0.4l-1.1-1v-0.4l-1.1-1.1v-0.3l-1.1-1.1v-0.4
		l-1-1.1v-0.3l-1.1-1.1v-0.4l-0.7-0.7v-0.3l-1.1-1.1v-0.4l-1.1-1.1v0.2l-0.7-0.7v-0.4l-1.1-1.1v-0.3l-1.4-1.4v-0.3l-1.1-1.1v-0.4
		l-1.4-1.4v-0.4l-1.4-1.4v-0.4l-1.1-1.1v-0.3l-1.1-1.1v-0.4l-1-1v-0.4l0.3-0.4l0.7,0.7h0.4l0.4,0.3h0.7l0.3,0.4h0.4l0.4,0.3h0.3
		l0.4,0.4h0.7l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h0.7l0.3,0.4h0.7l0.3,0.3h1.1l0.4,0.4h1l0.4,0.3h1.1l0.3,0.4
		h0.7l0.3,0.4h1.8l0.4,0.3h1.4l0.4,0.4h1.8l0.3,0.3h4.6l0.4,0.4h6.3l0.4-0.4h4.6l0.3-0.3h1.4l0.3-0.4l0.4,0.4l0.4-0.4h0.7l0.3-0.3
		l0.4,0.3l0.4-0.3h0.7l0.3-0.4h1.4l0.3-0.4h1.1l0.4-0.3h0.7l0.4-0.4h0.7l0.3-0.3h0.4l0.4-0.4h0.7l0.3-0.4h0.4l0.4-0.3h0.3l0.4-0.4
		h0.7l0.4-0.3h0.3l0.4-0.4h0.3l0.4-0.4h0.4l0.7-0.7h0.4l0.4-0.3h0.4l0.4-0.4h0.3l0.7-0.7h0.4l1-1.1h0.4l1-1.1h0.4l2.1-2.1h0.4
		l0.4-0.4v-0.4l3.1-3.1V173l1-1v-0.4l0.7-0.7v-0.4l0.7-0.7v-0.4l0.7-0.7v-0.3l0.4-0.4v-0.4l0.4-0.3v-0.4l0.3-0.3v-0.4l0.7-0.7v-0.7
		l0.4-0.4V164l0.4-0.3V163l0.3-0.4v-0.4l0.4-0.3v-0.7l0.4-0.4v0.2l0.4-0.4v-1.1l0.4-0.3v-1.4l0.3-0.3v-1.4l0.4-0.3v-2.4l0.4-0.4
		v-4.9l-0.4-0.4v-1.8l-0.4-0.4v-1.4l-0.3-0.4v-1l-0.4-0.4v-0.4l-0.4-0.3v-0.7l-0.4-0.4V140l-0.4-0.4v-0.3l-0.3-0.4v-0.4l-0.4-0.3
		v-0.4l-0.4-0.3v-0.4l-0.4-0.4v-0.3l-0.7-0.7v-0.4l-0.7-0.7v-0.4l-1-1.1V133l-1.4-1.4v-0.3l-1-1.1h-0.4l-1.8-1.8h-0.4l-1-1.1H265
		l-0.7-0.7H264l-0.4-0.3h-0.4l-0.7-0.7h-0.4l-0.4-0.3h-0.4l-0.4-0.3h-0.3l-0.4-0.3h-0.4l-0.4-0.3h-0.7l-0.4-0.4h-0.4l-0.4-0.3h-0.7
		l-0.4-0.3H255l-0.3-0.3H254l-0.3-0.3h-9.1l-0.3,0.3h-1.1l-0.4,0.3h-0.7l-0.4,0.3H241l-0.3,0.3h-0.4l-0.4,0.4h-0.3l-0.4,0.3h-0.3
		l-0.4,0.3h-0.4l-2.1,2.1v0.3l-0.7,0.7v0.4l-0.4,0.4v0.3l-0.4,0.4v1.1l-0.3,0.3v1.8l0.3,0.4v1.1l0.4,0.3v0.4l0.4,0.3v0.4l1.8,1.8
		h0.3l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h1.8l0.3,0.3h1.4l0.3,0.4h0.7l0.3,0.4h0.7l0.4,0.3h0.4l0.3,0.4h0.4l0.3,0.3h0.4l1.1,1.1h0.3
		l1.1,1.1v0.4l1.1,1v0.4l0.4,0.4v0.3l0.3,0.4v0.7l0.4,0.4v1l0.3,0.4v2.4l-0.3,0.4l0.3,0.3l-0.3,0.4v0.7l-0.4,0.4v0.7l-0.3,0.4v0.3
		l-0.4,0.4v0.3l-0.7,0.7v0.3l-3.5,3.5h-0.4l-0.7,0.7h-0.4l-0.3,0.4h-0.4l-0.3,0.4h-0.4l-0.4,0.3h-0.7l0.3-0.3h-0.7l-0.3,0.3h-0.7
		l-0.4,0.4h-1.4l-0.4,0.4h-5.9l-0.4,0.3l-0.3-0.3h-2.8l-0.4-0.4h-1.8l-0.3-0.4h-1.4l-0.3-0.3h-1.4l-0.3-0.4h-0.7l-0.4-0.3H222
		l-0.4-0.4h-0.7l-0.4-0.4h-0.7l-0.3-0.3h-0.4l-0.4-0.4h-0.3l-0.4-0.3h-0.7l-0.4-0.4h-0.3l-0.4-0.4h-0.3l-0.7-0.7H215l-0.4-0.3h-0.3
		l-0.7-0.7h-0.3l-0.4-0.3h-0.3l-1.4-1.4h-0.3l-1.4-1.4h-0.3l-4.6-4.6V148l-1.4-1.4v-0.3l-0.7-0.7v-0.3l-0.3-0.4v-0.3l-0.7-0.7v-0.3
		l-0.3-0.4v-0.7l-0.4-0.4v-0.3l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.4-0.3V134l0.4-0.4V133l0.4-0.4v-0.7l0.3-0.4v-0.7l0.4-0.3v-0.4
		l0.3-0.4v-0.3l0.4-0.4v-0.3l0.4-0.4v-0.4l0.7-0.7V127l0.7-0.7V126l0.4-0.4v-0.3l0.3-0.3v-0.3l0.7-0.7v-0.3l0.4-0.3v-0.3l0.7-0.7
		v-0.3l0.7-0.7v-0.3l0.4-0.4V120l0.4-0.3v-0.3l0.7-0.7v-0.3l0.3-0.3v-0.3l0.7-0.7v-0.3l0.3-0.3v-0.3l0.4-0.3v-0.4l0.3-0.3v-0.3
		l0.4-0.3v-0.3l0.4-0.4V113l0.3-0.3v-0.3l0.4-0.3v-0.4l0.3-0.3v-0.3l0.4-0.3v-0.3l0.4-0.4v-0.7l0.3-0.3v-0.3l0.4-0.4v-0.3l0.3-0.3
		v-0.3l0.4-0.3V106l0.4-0.3V105l0.3-0.4v-0.3l0.4-0.3v-0.7l0.3-0.4v-0.7l0.4-0.3v-0.7l0.4-0.3v-1l0.3-0.4v-0.7l0.4-0.3v-1.4l0.3-0.3
		v-0.7l0.4-0.4v-1.8l0.4-0.3v-1.8l0.3-0.3v-2.1l0.4-0.3v-4.6l0.3-0.3v-7.3l-0.3-0.4v-0.7l0.3-0.3l-0.3-0.3v-1.4l-0.4-0.3l0.4-0.4
		v-0.3l-0.4-0.3v-1.4l-0.3-0.3l0.3-0.3l-0.3-0.3v-1.1l-0.4-0.3V67l-0.4-0.3v-1.4l-0.3-0.3v-1.1l-0.4-0.3v-0.7l-0.3-0.4v-1l-0.4-0.3
		v-0.7l-0.4-0.3v-0.7l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.3-0.3v-0.7l-0.4-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3
		v-0.4l-0.4-0.3v-0.3l-0.4-0.4V50l-0.3-0.4v-0.3l-0.4-0.3v-0.4l-0.3-0.3v-0.4l-0.4-0.3v-0.3l-0.4-0.4v-0.3l-0.7-0.7v-0.3l-0.3-0.4
		v-0.3l-0.4-0.4v-0.3l-0.7-0.7V43l-0.7-0.7V42l-0.4-0.4v-0.3l-0.7-0.7v-0.3l-0.7-0.7v-0.4l-1.1-1v-0.3l-0.7-0.7v-0.3l-1.4-1.4V35
		l-1.4-1.4v-0.3l-2.1-2.1v-0.4l-0.3-0.4h-0.4L198,30v-0.4l-3.8-3.8h-0.4l-2.1-2.1h-0.4l-1.4-1.4h-0.4l-1.1-1.1h-0.3l-1.1-1h-0.4
		l-0.7-0.7h-0.4l-0.7-0.7h-0.3l-0.7-0.7h-0.3l-0.7-0.7h-0.4L182,17h-0.3l-0.7-0.7h-0.4l-0.4-0.4H180l-0.4-0.3h-0.3l-0.4-0.3h-0.4
		l-0.3-0.4h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.3l-0.4-0.4h-0.3l-0.4-0.3h-0.7l-0.7-0.7h-0.7l-0.3-0.3h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.7
		l-0.3-0.4h-0.7l-0.3-0.4H169l-0.3-0.3h-1.1l-0.4-0.4h-0.7l-0.4-0.3H166l-0.4-0.4h-0.7l-0.4-0.4h-1l-0.4-0.3H162l-0.3-0.4h-1.1
		l-0.4-0.3h-1.1L159,8h-1.4l-0.3-0.3h-1.4l-0.3-0.3l-0.4,0.3l-0.3-0.3h-1.8L152.7,7h-3.1l-0.4-0.3L132.1,6.6L132.1,6.6z"
        />
      </g>
      <g mask="url(#mask)">
        <path
          fill={fill ?? "#3c607d"}
          fillOpacity="1"
          stroke={stroke ?? "#333"}
          d="M132.1,6.6L131.7,7h-1.8l-0.4,0.4h-1.7l-0.3,0.3h-1.4L125.8,8h-1.1l-0.3,0.4H123l-0.3,0.3h-1.1l-0.3,0.4h-1.1
		l-0.3,0.3h-0.7l-0.3,0.4h-1.1l-0.3,0.4h-0.7l-0.3,0.3h-0.7l-0.3,0.4h-0.7l-0.3,0.3h-0.7l-0.4,0.4h-0.3l-0.3,0.4h-0.7l-0.4,0.3H111
		l-0.3,0.4H110l-0.4,0.3h-0.3l-0.3,0.4h-0.3l-0.3,0.4h-0.7l-0.3,0.3h-0.3l-0.3,0.4h-0.4l-0.3,0.3h-0.3l-0.3,0.4h-0.3l-0.4,0.4H104
		l-0.7,0.7H103l-0.4,0.4h-0.3l-0.3,0.4h-0.3l-0.7,0.7h-0.3l-0.3,0.3h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3L97,19.9h-0.3l-1,1.1h-0.4
		l-1,1H94l-1.4,1.4h-0.3l-1.1,1h-0.3l-4.2,4.2h-0.3L85.8,29v0.4L83,32.2v0.4l-1.8,1.8v0.3L79.9,36v0.3l-1.1,1v0.4l-0.7,0.7v0.3
		l-0.7,0.7v0.3l-0.7,0.7v0.3L76,41.6V42l-0.7,0.7V43L75,43.4v0.4l-0.3,0.3v0.3L74,45.1v0.4l-0.3,0.3v0.3l-0.3,0.4v0.3l-0.3,0.4v0.3
		l-0.4,0.3v0.4l-0.3,0.3V49l-0.3,0.3v0.3L71.5,50v0.3l-0.3,0.4V51l-0.4,0.3V52l-0.3,0.4v0.3L70.2,53v0.4l-0.3,0.3v0.7l-0.3,0.3v0.7
		L69,56v0.3l-0.3,0.3v0.7l-0.3,0.4v0.7L68,58.8v0.7l-0.3,0.3v1l-0.4,0.4v1L67,62.5v1L66.6,64v1.1l-0.3,0.3v1.4L66,67.1v1.4l-0.4,0.3
		l0.4,0.3l-0.4,0.4v2.1l-0.3,0.3v3.2L65,75.4V84l0.3,0.3v4.9l0.3,0.3v2.8l0.4,0.3V94l0.3,0.3v1.4l0.3,0.3v1l0.3,0.4v1l0.3,0.3v1.1
		l0.4,0.3v0.7l0.3,0.4v0.7l0.3,0.3v1.1l0.3,0.3v0.3l0.3,0.3v0.7l0.4,0.3v0.3l0.3,0.3v0.7l0.3,0.3v0.3l0.3,0.3v0.4l0.3,0.3v0.7
		l0.4,0.3v0.4l0.3,0.3v0.3l0.3,0.3v0.3l0.3,0.4v0.3l0.3,0.3v0.3l0.4,0.3v0.4l0.3,0.3v0.3l0.3,0.3v0.3l0.7,0.7v0.3l0.4,0.3v0.3
		l0.3,0.4v0.3l0.3,0.3v0.3L76,119v0.3l0.4,0.3v0.3l0.3,0.3v0.4l0.7,0.7v0.3l0.7,0.7v0.3l0.3,0.3v0.3l0.7,0.7v0.3l0.3,0.3v0.3
		l0.7,0.7v0.3l0.7,0.7v0.3l0.3,0.4v0.3l0.7,0.7v0.3l0.3,0.4v0.3l0.3,0.4v0.4l0.3,0.3v0.4l0.4,0.3v0.7l0.3,0.3v0.7l0.3,0.4v1.1
		l0.3,0.3v3.2l-0.3,0.3v1.4l-0.3,0.3v0.7l-0.3,0.3v0.4l-0.4,0.3v0.7l-0.7,0.7v0.3l-0.3,0.4v0.4l-0.7,0.7v0.3l-0.7,0.7v0.3l-1.1,1.1
		v0.4l-3.5,3.5v0.3l-0.7,0.7h0l-1.4,1.4h-0.3l-1.4,1.4h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3l-0.7,0.7h-0.3l-0.3,0.3H68l-0.4,0.4h-0.3
		l-0.3,0.4h-0.3l-0.3,0.3H66l-0.3,0.4H65l-0.3,0.3h-0.4l-0.4,0.4h-0.7l-0.4,0.4h-0.7l-0.3,0.3h-1l-0.4,0.4h-1l-0.3,0.3h-1.4
		l-0.3,0.4h-2.1l-0.3,0.4h-8.8l-0.3-0.4h-2.1l-0.3-0.4h-0.7l-0.3-0.3H41l-0.4-0.4H40l-0.4-0.3h-0.3l-0.4-0.4h-0.3l-0.3-0.4h-0.4
		l-0.7-0.7h-0.3l-0.7-0.7h-0.3l-1.4-1.4v-0.4l-1-1.1v-0.3l-0.7-0.7v0.4l-0.3-0.4v-0.3l-0.4-0.4v-0.4l-0.4-0.3v-0.7l-0.4-0.4V147
		l0.4-0.4v-0.7l0.4-0.4v-0.7l0.7-0.7v-0.4l0.4-0.3V143l2.1-2.1h0.3l0.7-0.7h0.4l0.3-0.3h0.3l0.4-0.4H38l0.4-0.3h0.7l0.4-0.4H40
		l0.3-0.4h1.8l0.3-0.3h1.4l0.3-0.4h0.7l0.4-0.3h0.3l0.3-0.4h0.4l1.8-1.8v-0.4l0.3-0.3v-0.4l0.4-0.3V133l0.3-0.4v-1.8l-0.3-0.3v-0.7
		l-0.4-0.3v-0.7l-0.3-0.4V128l-0.7-0.7V127l-2.1-2.1h-0.4l-0.7-0.7h-0.3l-0.3-0.4h-0.7l-0.4-0.3h-0.3l-0.3-0.3H41l-0.4-0.3h-1.4
		l-0.4-0.3h-8.4l-0.4,0.3h-1.8l-0.4,0.3h-0.7l-0.4,0.3H26l-0.4,0.3h-0.7l-0.4,0.4h-0.7l-0.3,0.3h-0.4l-0.4,0.3h-0.4l-0.4,0.3h-0.3
		l-0.4,0.3h-0.4l-0.7,0.7h-0.3l-0.4,0.3H19l-0.7,0.7h-0.4l-1.1,1.1h-0.3v0.4l-0.4,0.3h-0.4l-3.5,3.5v0.4l-1.1,1.1v0.3l-0.7,0.7v0.4
		L9.7,136v0.4l-0.4,0.3v0.4L9,137.5v0.3l-0.7,0.7v0.7L8,139.5v0.4l-0.4,0.3v0.7l-0.3,0.3v0.4l-0.4,0.3v0.7l-0.3,0.3v1.1l-0.3,0.4
		v1.4l-0.4,0.4v1.4L5.6,148v4.9l0.3,0.4v2.4l0.4,0.3v2.1l0.3,0.4v1l0.3,0.4v0.7l0.4,0.4v0.7l0.3,0.4v1l0.4,0.4v0.4l0.3,0.3v0.4
		l0.4,0.3v0.7l0.4,0.3v0.4l0.3,0.3v0.4l0.4,0.4v0.3l0.3,0.4v0.3l0.7,0.7v0.3l0.7,0.7v0.4l0.3,0.4v0.3l0.7,0.7v0.4l1.4,1.4v0.4
		l3.1,3.1v0.4l1.1,1.1h0.3l1.4,1.4h0.4l1.4,1.4H22l0.4,0.3h0.4l0.7,0.7h0.4l0.7,0.7H25l0.3,0.3h0.4l0.7,0.7h0.4l0.3,0.4h0.4l0.4,0.4
		h0.4l0.4,0.3h0.7l0.4,0.4h0.4l0.4,0.3h0.3l0.4,0.4H32l0.3,0.4H33l0.3,0.3H34l0.3,0.4h1l0.4,0.3h1l0.3,0.4h0.7l0.4,0.4h1.4l0.4,0.3
		h1.8l0.3,0.4h2.5l0.3,0.3h3.5l0.4,0.4H55l0.3-0.4h1l0.4,0.4l0.3-0.4h1.4l0.3-0.3h0.4l0.3,0.3h0.3l0.4-0.3h2.1l0.4-0.4H64l0.3-0.3
		h1.4l0.3-0.4h1l0.4-0.4h1l0.3-0.3h1.1l0.3-0.4h0.7l0.3-0.3h1l0.4-0.4h0.7l0.3-0.4h0.3l0.4-0.3h0.7l0.3-0.4h0.7l0.3-0.3h0.3l0.3-0.4
		h0.7l0.3-0.4h0.3l0.3-0.3h0.3l0.4-0.4h0.3l0.3-0.3H80l0.3-0.4h0.4l0.3-0.4l0.3,0.4v0.4l-0.3,0.3h-0.3v0.4l-1.1,1.1v0.3l-1.1,1.1
		v0.4l-1,1v0.4l-1.4,1.4v0.4l-1.4,1.4v0.4l-1,1.1v0.3l-1.1,1.1v0.4l-1.1,1.1v0.3l-0.7,0.7v0.4l-0.7,0.7v0.4l-1.1,1.1v0.3l-1.1,1.1
		v0.4l-1,1v0.4l-1.1,1.1v0.3l-1,1.1v0.4l-1.1,1.1v0.3l-1.4,1.4v0.3l-1.4,1.4v0.3l-1,1.1v0.4l-0.4,0.3h-0.3v0.4l-4.9,4.9H55l-0.7,0.7
		H54l-0.7,0.7h-0.4l-0.3,0.3h-0.3l-0.4,0.4h-0.3l-0.7,0.7h-0.3l-0.4,0.4h-0.3l-0.4,0.3h-0.7l-0.4,0.4H48l-0.4,0.3h-0.3L47,222h-0.7
		l-0.4,0.4h-1l-0.3,0.3h-1.4l-0.3,0.4h-5.3l-0.4-0.4h-0.7l-0.4-0.3h-1l-0.3-0.4h-0.4l-0.3-0.4h-0.4l-0.3-0.3H33l-0.7-0.7h-0.4
		l-1-1.1v-0.4l-0.7-0.7V218l-0.4-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3v-3.2l0.3-0.3V210l0.4-0.4v-1.1l0.4-0.3v-1.1l0.4-0.4v-1l0.4-0.4
		v-3.5l-0.4-0.4v-0.3l-0.4-0.4v-0.3l-1.8-1.8h-1l-0.4-0.4h-2.1l-0.4,0.4h-0.7l-0.4,0.3h-0.7l-0.4,0.4H22l-0.4,0.3h-0.4l-0.4,0.4
		h-0.4l-0.7,0.7h-0.4l-2.4,2.4h-0.4v0.4l-1.4,1.4v0.4l-0.7,0.7v0.4l-0.7,0.7v0.4l-0.4,0.3v0.4l-0.3,0.3v0.4l-0.4,0.4v0.3l-0.4,0.4
		v0.7l-0.3,0.4v0.3l-0.4,0.4v1.1l-0.3,0.3v0.7l-0.4,0.4v1.4l-0.4,0.4l0.4,0.4l-0.4,0.3v5.6l0.4,0.3l-0.4,0.4l0.4,0.4v1l0.4,0.4v1.1
		l0.3,0.3v0.7l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.7l0.4,0.4v0.4l0.3,0.3v0.4L14,232v0.4l0.4,0.3v0.4l0.7,0.7v0.3l1.1,1.1v0.4
		l4.5,4.6h0.4l0.7,0.7h0.3l0.7,0.7h0.4l0.7,0.7h0.4L25,243h0.4l0.3,0.4h0.4l0.4,0.4H27l0.4,0.3h0.3l0.4,0.4h0.7l0.4,0.3h0.3l0.4,0.4
		h0.7l0.4,0.4h0.7l0.4,0.3h0.7l0.4,0.4h1.4l0.4,0.3h1l0.3,0.4h3.2l0.3,0.4H47l0.3-0.4h2.5l0.3-0.4h1.8l0.4-0.3h1.4l0.4-0.4h1.4
		l0.4-0.3h1l0.3-0.4h0.7l0.3-0.4h0.7l0.4-0.3H60l0.4-0.4h0.3l0.4-0.3h0.7l0.4-0.4h0.3l0.4-0.4h0.7l0.4-0.3h0.4l0.3-0.4H65l0.3-0.3
		h0.3l0.4-0.4h0.3l0.3-0.4h0.3l0.7-0.7H68l0.3-0.3h0.3l0.7-0.7h0.3l0.7-0.7h0.3l0.7-0.7h0.3l0.7-0.7h0.4l1-1.1H74l1.4-1.4H76
		l7.4-7.4v-0.3l1.4-1.4v-0.3l1.4-1.4v-0.3L88,222v-0.4l1.4-1.4v-0.4l2.1-2.1V217l1.8-1.8v-0.4l1.4-1.4V213l1.1-1.1v-0.3l1.4-1.4V210
		l1.4-1.4v-0.3l1.4-1.4v-0.3l1.4-1.4v-0.3l1.4-1.4V203l1.4-1.4v-0.3l1.4-1.4v-0.3l1.1-1.1v-0.4l1-1v-0.4l0.7-0.7v-0.4l0.7-0.7
		l0.3,0.4v0.3l-0.3,0.4v2.1l-0.3,0.4v2.1l-0.3,0.3v1.4l-0.4,0.3v1.8l-0.3,0.4v1.8l-0.3,0.3v1.4l-0.3,0.3v1.8l-0.3,0.4v1.1l-0.4,0.3
		v1.4l-0.3,0.3v1.1l-0.3,0.4v1.4l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.4,0.4v1.4l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.3,0.3v1.1l-0.3,0.4v1
		l-0.4,0.4v0.7l-0.3,0.4v1.1l-0.3,0.3v0.7l-0.3,0.4v0.7l-0.3,0.4v0.7l-0.4,0.4v0.7l-0.3,0.3v0.7l-0.3,0.4v0.7l-0.3,0.4v0.7l-0.3,0.4
		v0.3l-0.4,0.4v0.7l-0.3,0.4v0.7l-0.3,0.3v0.4l-0.3,0.4v0.3l-0.3,0.4v0.7l-0.4,0.4v0.3l-0.3,0.4v0.3l-0.3,0.4v0.4l-0.3,0.3v0.4
		l-0.3,0.3v0.4l-0.3,0.4v0.3l-0.4,0.4v0.3l-0.7,0.7v0.3l-0.3,0.4v0.3l-0.7,0.7v0.3l-1,1.1v0.4l-4.6,4.5H89l-0.7,0.7h-0.4l-0.7,0.7
		h-0.3l-0.3,0.4h-0.4l-0.3,0.4h-1l-0.4,0.4h-1l-0.3,0.4H79l-0.3-0.4H78l-0.4-0.4h-0.7l-0.3-0.4h-0.3l-0.4-0.4h-0.3l-0.3-0.3H75
		l-2.1-2.1h-0.4l-0.3-0.4h-0.3l-0.3-0.4h-0.3l-0.4-0.3h-4.5l-0.3,0.3h-0.4l-0.4,0.4H65l-1.4,1.4v0.4l-0.3,0.4v0.3L63,257v1.1
		l-0.4,0.4v4.5l0.4,0.4v1l0.3,0.4v0.7l0.3,0.3v0.4l0.4,0.4v0.7l0.7,0.7v0.4l0.3,0.4v0.4l0.7,0.7v0.4l1.4,1.4v0.4h0.3l2.5,2.5h0.3
		L69,274h0.4l0.7,0.7h0.3l0.3,0.4h0.4l0.3,0.3h0.3l0.3,0.4h0.3l0.4,0.4h0.7l0.3,0.4H74l0.4,0.4h0.7l0.3,0.3h0.7l0.3,0.4h1l0.4,0.4
		h1.8l0.3,0.4H82l0.3,0.4h3.8l0.4-0.4h3.8l0.3-0.4H92l0.3-0.4h1.4l0.3-0.4h0.7l0.4-0.3h1l0.3-0.4h0.3l0.4-0.4h0.7l0.3-0.4h0.3
		l0.4-0.4h0.3l0.3-0.3h0.3l0.3-0.4h0.4l0.3-0.4h0.3l0.3-0.4h0.3l0.7-0.7h0.3l0.3-0.4h0.3l0.7-0.7h0.3l0.7-0.7h0.4l0.7-0.7h0.3l1.1-1
		h0.3l5.9-6v-0.4l1.1-1v-0.4l1.1-1v-0.4l1-1.1v-0.3l0.3-0.4v-0.4l0.7-0.7v-0.3l0.3-0.4v-0.4l0.7-0.7v-0.3l0.4-0.3v-0.4l0.3-0.4v-0.3
		l0.7-0.7V253l0.3-0.4v-0.3l0.4-0.4v0.1l0.3-0.4v-0.4l0.3-0.3v-0.4l0.3-0.3v-0.4l0.3-0.4v-0.3l0.4-0.4v-0.3l0.3-0.4v-0.4l0.3-0.3
		v-0.7l0.3-0.4V246l0.3-0.3v-0.4l0.4-0.3v-0.4l0.3-0.4v-0.7l0.3-0.3v-0.4l0.3-0.4v-0.7l0.3-0.3v-0.7l0.4-0.3V240l0.3-0.3V239
		l0.3-0.3V238l0.4-0.4v-0.4l0.3-0.3v-1.1l0.4-0.4v-0.7l0.3-0.3v-0.7l0.4-0.3v-1.1l0.4-0.3v-0.7l0.3-0.3v-0.7l0.4-0.4v-0.7l0.3-0.4
		v-1.1l0.4-0.3v-0.7l0.4-0.4v-1.1l0.3-0.3v-0.7l0.4-0.3v-1.1l0.3-0.4v-1l0.4-0.4v-0.7l0.4-0.4v-1.1l0.3-0.3v-1.1l0.4-0.4v-1l0.3-0.4
		v-0.7l0.4-0.4v-1.1l0.4-0.3V212l0.3-0.4v-1l0.4-0.4v-1.4l0.3-0.4v-1.1l0.4-0.3v-1.1l0.4-0.4v-0.7l0.3-0.4V203l0.4-0.4v-1l0.3-0.4
		v-1.1l0.4-0.3v-1.1l0.4-0.4v-1.4l0.3-0.4v-1.1l0.4-0.3V194l0.3-0.4v-1.4l0.4-0.4v-1l0.4-0.4v-1.1l0.3-0.3v-1.4l0.4-0.3v-0.4
		l0.3-0.4l0.4,0.4v1.4l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1.1l0.4,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.3,0.3v1.4
		l0.4,0.3v1.1l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.4,0.3v0.7l0.3,0.3v1.4l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3
		v1.1l0.4,0.4v1.1l0.3,0.3v1.1l0.4,0.4v1l0.3,0.4v0.7l0.4,0.4v1.1l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.4v0.7
		l0.4,0.3v1.1l0.3,0.4v0.7l0.4,0.3v0.7l0.3,0.3v0.7l0.4,0.4v1.1l0.4,0.3v0.4l0.3,0.4v0.7l0.4,0.3v0.7l0.3,0.3v0.7l0.4,0.4v0.4
		l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.7l0.3,0.4v0.4l0.4,0.3v0.4l0.4,0.3v0.7l0.3,0.3v0.4l0.4,0.3v0.4l0.3,0.4v0.3l0.4,0.4v0.3
		l0.4,0.4v0.7l0.7,0.7v0.4l0.3,0.4v0.3l0.4,0.4v0.3l0.4,0.4v0.4l0.3,0.3v0.4l0.7,0.7v0.4l0.4,0.3v0.3l0.7,0.7v0.4l0.4,0.4v0.3
		l0.7,0.7v0.4l0.7,0.7v0.4l1.1,1.1v0.3l0.7,0.7v0.4l1.4,1.4v0.4h0.3l0.4,0.4v0.3l4.6,4.6h0.3l1.1,1h0.4l1,1.1h0.4l0.7,0.7h0.4
		l0.3,0.4h0.4l0.7,0.7h0.4l0.3,0.3h0.4l0.7,0.7h0.4l0.3,0.4h0.4l0.4,0.4h0.3l0.4,0.3h0.3l0.4,0.4h0.7l0.4,0.4h0.3l0.4,0.4h0.4
		l0.3,0.4h0.7l0.4,0.3h1.1l0.3,0.4h1.4l0.3,0.4h1.4l0.3,0.4h2.5l0.3,0.4h5.9l0.4-0.4h1.8l0.4-0.4h1.4l0.4-0.4h1.4l0.4-0.4h0.7
		l0.3-0.3h0.7l0.3-0.4h0.7l0.4-0.4h0.4l0.3-0.4h0.4l0.3-0.4h0.4l0.4-0.3h0.3l0.4-0.4h0.3l0.4-0.4h0.4l1-1h0.4l1.4-1.4h0.4l1.4-1.4
		v-0.4l1.1-1V269l1.1-1v-0.4l0.4-0.4v-0.4l0.3-0.3V266l0.4-0.4v-0.7l0.3-0.3v-0.4l0.4-0.4v-1.4l0.4-0.4v-4.9l-0.4-0.4V256l-0.4-0.3
		v-0.3L222,255v-0.4l-1.4-1.4h-0.3l-0.4-0.4h-0.3l-0.4-0.3H215l-0.4,0.3h-0.7l-0.4,0.4h-0.3l-0.7,0.7h-0.4l-1.8,1.8h-0.4l-0.3,0.3
		h-0.4l-0.3,0.4h-0.4l-0.4,0.4h-0.7l-0.3,0.4H206l-0.4,0.4h-4.2l-0.4-0.4h-0.7l-0.3-0.4h-0.7l-0.3-0.4h-0.7l-0.4-0.4h-0.4l-0.7-0.7
		h-0.3l-0.4-0.4h-0.4l-1.4-1.4h-0.4l-1-1.1V252l-1.8-1.8v-0.3l-1.4-1.4v-0.3l-0.3-0.4v-0.4l-0.7-0.7v-0.3l-0.3-0.4v0l-0.4-0.3v-0.4
		l-0.3-0.3v-0.4l-0.7-0.7v-0.4l-0.3-0.3v-0.7l-0.4-0.3v-0.4l-0.3-0.3v-0.4l-0.4-0.4v-0.3l-0.4-0.4v-0.3l-0.3-0.4v-0.7l-0.4-0.4V238
		l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.4-0.4v-0.3l-0.3-0.4V234l-0.4-0.4v-0.7l-0.3-0.3v-0.7l-0.4-0.4V231l-0.4-0.4v-0.7l-0.3-0.4v-1
		l-0.4-0.4v-0.7l-0.3-0.4v-1.1l-0.4-0.3v-0.7l-0.4-0.4v-1.1l-0.3-0.3V222l-0.4-0.4v-1.1l-0.3-0.3v-1.1l-0.4-0.4V218l-0.4-0.3V217
		l-0.3-0.4v-1.1l-0.4-0.3v-1.4l-0.3-0.3v-1.1l-0.4-0.4v-1.4l-0.4-0.4v-2.1l-0.3-0.4v-1.8l-0.4-0.3v-1.8l-0.3-0.4v-1.8l-0.4-0.4v-1.8
		l-0.4-0.3V197l-0.3-0.3v-1.4l0.3-0.3l1.1,1v0.4l1.4,1.4v0.4l1,1.1v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.4,1.4v0.3l1.8,1.8
		v0.4l1.1,1.1v0.3l1.4,1.4v0.3l1.1,1.1v0.4l1.1,1.1v0.3l1.4,1.4v0.3l1.8,1.8v0.4l2.1,2.1v0.4l1.4,1.4v0.4l1.8,1.8v0.4l1.8,1.8v0.3
		l5.9,5.9h0.4l0.4,0.4v0.3h0.3l1.8,1.8h0.4l1.1,1.1h0.3l0.7,0.7h0.4l0.7,0.7h0.4l0.7,0.7h0.4l0.7,0.7h0.3l0.7,0.7h0.3l0.4,0.4h0.3
		l0.4,0.3h0.4l0.3,0.4h0.4l0.3,0.4h0.4l0.4,0.3h0.3l0.4,0.4h0.3l0.4,0.3h0.4l0.3,0.4h0.7l0.4,0.4h0.4l0.3,0.3h0.7l0.4,0.4h0.7
		l0.4,0.3h0.7l0.4,0.4h0.3l0.4,0.4h1.1l0.3,0.3h1.1l0.4,0.4h1.4l0.3,0.3h1.8l0.4,0.4h2.1l0.3,0.4l0.4-0.4h0.7l0.4,0.4h6.6l0.4-0.4
		h3.1l0.4-0.4h1.4l0.4-0.3h1l0.4-0.4h1.1l0.3-0.3h0.4l0.4-0.4h0.7l0.3-0.4h0.7l0.3-0.3h0.4l0.3-0.4h0.4l0.4-0.3h0.4l0.3-0.4h0.4
		l0.4-0.4h0.4l0.7-0.7h0.4l0.7-0.7h0.4l0.7-0.7h0.4l0.7-0.7h0.3v-0.4l0.4-0.4h0.4l3.5-3.5v-0.3l1-1.1v-0.4l1.1-1v-0.4l0.4-0.3v-0.4
		l0.3-0.4V231l0.4-0.4v-0.3l0.7-0.7v-0.7l0.4-0.3v-0.4l0.3-0.4v-0.7l0.4-0.3v-0.7l0.4-0.3v-1.1l0.4-0.4v-1l0.4-0.4v-3.1l0.3-0.4V219
		l-0.3-0.3v-2.8l-0.4-0.4v-1.4l-0.4-0.4v-1l-0.4-0.4v-0.7l-0.4-0.4v-0.7l-0.3-0.4V210l-0.4-0.4v-0.3l-0.4-0.4v-0.4l-0.4-0.3v-0.4
		l-0.4-0.3v-0.4l-0.7-0.7V206l-0.7-0.7v-0.4l-1.4-1.4v-0.4h-0.4l-2.1-2.1h-0.3l-1.1-1.1h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.4l-0.4-0.4
		h-0.3l-0.4-0.3h-1.1l-0.3-0.4h-2.5l-0.4,0.4H256l-0.3,0.3h-0.4l-0.7,0.7v0.4l-0.7,0.7v0.7l-0.4,0.4v1.4l-0.4,0.4v0.7l0.4,0.4v1.1
		l0.4,0.3v1.1l0.3,0.4v1l0.4,0.4v1.1l0.3,0.3v1.4l0.4,0.3v2.5l-0.4,0.3l0.4,0.4l-0.4,0.3v0.7l-0.3,0.3v0.7l-0.4,0.4v0.4l-0.3,0.3
		h-0.4v0.4l-1.4,1.4h-0.4l-0.7,0.7h-1l-0.4,0.4h-0.4l-0.3,0.4h-0.4l-0.3,0.3h-1.4l-0.3,0.4h-4.6l-0.4-0.4h-1.4l-0.4-0.3h-1.1
		l-0.3-0.4h-0.7l-0.4-0.4H237l-0.3-0.3H236l-0.4-0.4h-0.4l-0.3-0.3h-0.4l-0.3-0.4h-0.4l-0.7-0.7h-0.4l-0.3-0.4H232l-0.4-0.3h-0.3
		l-0.7-0.7h-0.4l-0.7-0.7h-0.4l-1.8-1.8H227l-4.2-4.2v-0.4l-1.8-1.8v-0.3l-1.1-1.1v-0.4l-1.1-1v-0.4l-1.1-1.1v-0.3l-1.1-1.1v-0.4
		l-1-1.1v-0.3l-1.1-1.1v-0.4l-0.7-0.7v-0.3l-1.1-1.1v-0.4l-1.1-1.1v0.2l-0.7-0.7v-0.4l-1.1-1.1v-0.3l-1.4-1.4v-0.3l-1.1-1.1v-0.4
		l-1.4-1.4v-0.4l-1.4-1.4v-0.4l-1.1-1.1v-0.3l-1.1-1.1v-0.4l-1-1v-0.4l0.3-0.4l0.7,0.7h0.4l0.4,0.3h0.7l0.3,0.4h0.4l0.4,0.3h0.3
		l0.4,0.4h0.7l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h0.7l0.3,0.4h0.7l0.3,0.3h1.1l0.4,0.4h1l0.4,0.3h1.1l0.3,0.4
		h0.7l0.3,0.4h1.8l0.4,0.3h1.4l0.4,0.4h1.8l0.3,0.3h4.6l0.4,0.4h6.3l0.4-0.4h4.6l0.3-0.3h1.4l0.3-0.4l0.4,0.4l0.4-0.4h0.7l0.3-0.3
		l0.4,0.3l0.4-0.3h0.7l0.3-0.4h1.4l0.3-0.4h1.1l0.4-0.3h0.7l0.4-0.4h0.7l0.3-0.3h0.4l0.4-0.4h0.7l0.3-0.4h0.4l0.4-0.3h0.3l0.4-0.4
		h0.7l0.4-0.3h0.3l0.4-0.4h0.3l0.4-0.4h0.4l0.7-0.7h0.4l0.4-0.3h0.4l0.4-0.4h0.3l0.7-0.7h0.4l1-1.1h0.4l1-1.1h0.4l2.1-2.1h0.4
		l0.4-0.4v-0.4l3.1-3.1V173l1-1v-0.4l0.7-0.7v-0.4l0.7-0.7v-0.4l0.7-0.7v-0.3l0.4-0.4v-0.4l0.4-0.3v-0.4l0.3-0.3v-0.4l0.7-0.7v-0.7
		l0.4-0.4V164l0.4-0.3V163l0.3-0.4v-0.4l0.4-0.3v-0.7l0.4-0.4v0.2l0.4-0.4v-1.1l0.4-0.3v-1.4l0.3-0.3v-1.4l0.4-0.3v-2.4l0.4-0.4
		v-4.9l-0.4-0.4v-1.8l-0.4-0.4v-1.4l-0.3-0.4v-1l-0.4-0.4v-0.4l-0.4-0.3v-0.7l-0.4-0.4V140l-0.4-0.4v-0.3l-0.3-0.4v-0.4l-0.4-0.3
		v-0.4l-0.4-0.3v-0.4l-0.4-0.4v-0.3l-0.7-0.7v-0.4l-0.7-0.7v-0.4l-1-1.1V133l-1.4-1.4v-0.3l-1-1.1h-0.4l-1.8-1.8h-0.4l-1-1.1H265
		l-0.7-0.7H264l-0.4-0.3h-0.4l-0.7-0.7h-0.4l-0.4-0.3h-0.4l-0.4-0.3h-0.3l-0.4-0.3h-0.4l-0.4-0.3h-0.7l-0.4-0.4h-0.4l-0.4-0.3h-0.7
		l-0.4-0.3H255l-0.3-0.3H254l-0.3-0.3h-9.1l-0.3,0.3h-1.1l-0.4,0.3h-0.7l-0.4,0.3H241l-0.3,0.3h-0.4l-0.4,0.4h-0.3l-0.4,0.3h-0.3
		l-0.4,0.3h-0.4l-2.1,2.1v0.3l-0.7,0.7v0.4l-0.4,0.4v0.3l-0.4,0.4v1.1l-0.3,0.3v1.8l0.3,0.4v1.1l0.4,0.3v0.4l0.4,0.3v0.4l1.8,1.8
		h0.3l0.4,0.4h0.3l0.4,0.3h0.7l0.4,0.4h1.8l0.3,0.3h1.4l0.3,0.4h0.7l0.3,0.4h0.7l0.4,0.3h0.4l0.3,0.4h0.4l0.3,0.3h0.4l1.1,1.1h0.3
		l1.1,1.1v0.4l1.1,1v0.4l0.4,0.4v0.3l0.3,0.4v0.7l0.4,0.4v1l0.3,0.4v2.4l-0.3,0.4l0.3,0.3l-0.3,0.4v0.7l-0.4,0.4v0.7l-0.3,0.4v0.3
		l-0.4,0.4v0.3l-0.7,0.7v0.3l-3.5,3.5h-0.4l-0.7,0.7h-0.4l-0.3,0.4h-0.4l-0.3,0.4h-0.4l-0.4,0.3h-0.7l0.3-0.3h-0.7l-0.3,0.3h-0.7
		l-0.4,0.4h-1.4l-0.4,0.4h-5.9l-0.4,0.3l-0.3-0.3h-2.8l-0.4-0.4h-1.8l-0.3-0.4h-1.4l-0.3-0.3h-1.4l-0.3-0.4h-0.7l-0.4-0.3H222
		l-0.4-0.4h-0.7l-0.4-0.4h-0.7l-0.3-0.3h-0.4l-0.4-0.4h-0.3l-0.4-0.3h-0.7l-0.4-0.4h-0.3l-0.4-0.4h-0.3l-0.7-0.7H215l-0.4-0.3h-0.3
		l-0.7-0.7h-0.3l-0.4-0.3h-0.3l-1.4-1.4h-0.3l-1.4-1.4h-0.3l-4.6-4.6V148l-1.4-1.4v-0.3l-0.7-0.7v-0.3l-0.3-0.4v-0.3l-0.7-0.7v-0.3
		l-0.3-0.4v-0.7l-0.4-0.4v-0.3l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.4-0.3V134l0.4-0.4V133l0.4-0.4v-0.7l0.3-0.4v-0.7l0.4-0.3v-0.4
		l0.3-0.4v-0.3l0.4-0.4v-0.3l0.4-0.4v-0.4l0.7-0.7V127l0.7-0.7V126l0.4-0.4v-0.3l0.3-0.3v-0.3l0.7-0.7v-0.3l0.4-0.3v-0.3l0.7-0.7
		v-0.3l0.7-0.7v-0.3l0.4-0.4V120l0.4-0.3v-0.3l0.7-0.7v-0.3l0.3-0.3v-0.3l0.7-0.7v-0.3l0.3-0.3v-0.3l0.4-0.3v-0.4l0.3-0.3v-0.3
		l0.4-0.3v-0.3l0.4-0.4V113l0.3-0.3v-0.3l0.4-0.3v-0.4l0.3-0.3v-0.3l0.4-0.3v-0.3l0.4-0.4v-0.7l0.3-0.3v-0.3l0.4-0.4v-0.3l0.3-0.3
		v-0.3l0.4-0.3V106l0.4-0.3V105l0.3-0.4v-0.3l0.4-0.3v-0.7l0.3-0.4v-0.7l0.4-0.3v-0.7l0.4-0.3v-1l0.3-0.4v-0.7l0.4-0.3v-1.4l0.3-0.3
		v-0.7l0.4-0.4v-1.8l0.4-0.3v-1.8l0.3-0.3v-2.1l0.4-0.3v-4.6l0.3-0.3v-7.3l-0.3-0.4v-0.7l0.3-0.3l-0.3-0.3v-1.4l-0.4-0.3l0.4-0.4
		v-0.3l-0.4-0.3v-1.4l-0.3-0.3l0.3-0.3l-0.3-0.3v-1.1l-0.4-0.3V67l-0.4-0.3v-1.4l-0.3-0.3v-1.1l-0.4-0.3v-0.7l-0.3-0.4v-1l-0.4-0.3
		v-0.7l-0.4-0.3v-0.7l-0.3-0.4v-0.7l-0.4-0.4v-0.7l-0.3-0.3v-0.7l-0.4-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3v-0.4l-0.4-0.3v-0.7l-0.3-0.3
		v-0.4l-0.4-0.3v-0.3l-0.4-0.4V50l-0.3-0.4v-0.3l-0.4-0.3v-0.4l-0.3-0.3v-0.4l-0.4-0.3v-0.3l-0.4-0.4v-0.3l-0.7-0.7v-0.3l-0.3-0.4
		v-0.3l-0.4-0.4v-0.3l-0.7-0.7V43l-0.7-0.7V42l-0.4-0.4v-0.3l-0.7-0.7v-0.3l-0.7-0.7v-0.4l-1.1-1v-0.3l-0.7-0.7v-0.3l-1.4-1.4V35
		l-1.4-1.4v-0.3l-2.1-2.1v-0.4l-0.3-0.4h-0.4L198,30v-0.4l-3.8-3.8h-0.4l-2.1-2.1h-0.4l-1.4-1.4h-0.4l-1.1-1.1h-0.3l-1.1-1h-0.4
		l-0.7-0.7h-0.4l-0.7-0.7h-0.3l-0.7-0.7h-0.3l-0.7-0.7h-0.4L182,17h-0.3l-0.7-0.7h-0.4l-0.4-0.4H180l-0.4-0.3h-0.3l-0.4-0.3h-0.4
		l-0.3-0.4h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.3l-0.4-0.4h-0.3l-0.4-0.3h-0.7l-0.7-0.7h-0.7l-0.3-0.3h-0.4l-0.3-0.4h-0.4l-0.4-0.3h-0.7
		l-0.3-0.4h-0.7l-0.3-0.4H169l-0.3-0.3h-1.1l-0.4-0.4h-0.7l-0.4-0.3H166l-0.4-0.4h-0.7l-0.4-0.4h-1l-0.4-0.3H162l-0.3-0.4h-1.1
		l-0.4-0.3h-1.1L159,8h-1.4l-0.3-0.3h-1.4l-0.3-0.3l-0.4,0.3l-0.3-0.3h-1.8L152.7,7h-3.1l-0.4-0.3L132.1,6.6L132.1,6.6z"
        />
      </g>

      <circle cx="110" cy="70" r="8.8" />
      <circle cx="166" cy="70" r="8.8" />
      <path
        stroke="black"
        strokeWidth="5"
        fill="none"
        d="M120.5,105c11.7,11.7,23.3,11.7,35,0"
      />
    </svg>
  );
};

export default OctopusIcon;
