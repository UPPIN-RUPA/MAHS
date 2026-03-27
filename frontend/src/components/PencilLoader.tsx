type PencilLoaderProps = {
  label?: string;
};

export function PencilLoader({ label = "Loading..." }: PencilLoaderProps) {
  return (
    <div className="pencil-loader" role="status" aria-live="polite">
      <svg className="pencil" viewBox="0 0 200 200" width="160" height="160" aria-hidden="true">
        <defs>
          <clipPath id="pencil-eraser">
            <rect rx="5" ry="5" width="30" height="30" />
          </clipPath>
        </defs>
        <circle className="pencil__stroke" cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="439.82 439.82" />
        <g className="pencil__rotate" fill="none">
          <g className="pencil__body1">
            <path stroke="currentColor" strokeDasharray="351.86 351.86" strokeWidth="30" d="M100,30 A70,70 0 0,1 170,100" />
          </g>
          <g className="pencil__body2">
            <path stroke="#e3bf7a" strokeDasharray="406.84 406.84" strokeWidth="20" d="M100,50 A50,50 0 0,1 150,100" />
          </g>
          <g className="pencil__body3">
            <path stroke="#132238" strokeDasharray="296.88 296.88" strokeWidth="10" d="M100,60 A40,40 0 0,1 140,100" />
          </g>
          <g className="pencil__eraser" transform="translate(100,100)">
            <g className="pencil__eraser-skew">
              <rect x="0" y="-15" rx="5" ry="5" width="30" height="30" fill="#f06d9b" clipPath="url(#pencil-eraser)" />
              <rect x="12" y="-15" width="6" height="30" fill="#d64d79" />
            </g>
          </g>
          <g className="pencil__point" transform="translate(100,100)">
            <polygon points="0,0 18,-9 18,9" fill="#f2d2a2" />
            <polygon points="18,-9 26,0 18,9" fill="#132238" />
          </g>
        </g>
      </svg>
      <p className="pencil-loader__label">{label}</p>
    </div>
  );
}
