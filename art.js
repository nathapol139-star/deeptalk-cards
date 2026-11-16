/* Painted art: one hidden <svg> of filters, then the animals and small decorations
   drawn as washes of color through those filters (rough wet edges, darker pooled rims,
   pigment grain). No image files, so the game stays small and works offline. */
const ART_DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<filter id="wc" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="warp"/>
 <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G" result="shape"/>
 <feMorphology in="shape" operator="erode" radius="1.3" result="inner"/>
 <feComposite in="shape" in2="inner" operator="out" result="rim"/>
 <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="9" result="grain"/>
 <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.55 1.15" result="grainA"/>
 <feComposite in="shape" in2="grainA" operator="in" result="wash"/>
 <feMerge><feMergeNode in="wash"/><feMergeNode in="rim"/></feMerge>
</filter>
<filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
 <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="2" seed="2" result="n"/>
 <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
</filter>
</defs></svg>`;

const HUSKY = `<svg viewBox="0 0 120 120" role="img" aria-label="ฮัสกี้">
<g filter="url(#wc)">
 <path d="M20 54 Q18 26 29 7 Q44 20 56 34Z" fill="#7189ab"/>
 <path d="M100 54 Q102 26 91 7 Q76 20 64 34Z" fill="#7189ab"/>
 <ellipse cx="60" cy="67" rx="45" ry="42" fill="#93a8c6"/>
</g>
<g filter="url(#wc)" opacity=".9">
 <path d="M28 40 Q30 22 33 15 Q41 24 46 32Z" fill="#f3a9ba"/>
 <path d="M92 40 Q90 22 87 15 Q79 24 74 32Z" fill="#f3a9ba"/>
 <path d="M60 30 Q40 28 22 52 Q30 44 44 46 Q54 40 60 50 Q66 40 76 46 Q90 44 98 52 Q80 28 60 30Z" fill="#5d7396"/>
</g>
<g filter="url(#wc)">
 <path d="M60 44 C50 55 31 52 24 71 C22 97 44 108 60 108 C76 108 98 97 96 71 C89 52 70 55 60 44Z" fill="#f7f3ea"/>
</g>
<g filter="url(#wc)" opacity=".5">
 <ellipse cx="34" cy="80" rx="8" ry="5" fill="#ff9fb3"/>
 <ellipse cx="86" cy="80" rx="8" ry="5" fill="#ff9fb3"/>
 <path d="M55 95 Q60 110 65 95Z" fill="#ff7f99"/>
</g>
<g filter="url(#wc)">
 <circle cx="44" cy="51" r="3.6" fill="#f7f3ea"/><circle cx="76" cy="51" r="3.6" fill="#f7f3ea"/>
 <ellipse cx="43" cy="67" rx="8" ry="8.5" fill="#70c4ef"/><ellipse cx="77" cy="67" rx="8" ry="8.5" fill="#70c4ef"/>
 <circle cx="43" cy="68" r="4.3" fill="#26304a"/><circle cx="77" cy="68" r="4.3" fill="#26304a"/>
 <ellipse cx="60" cy="83" rx="7.5" ry="5.2" fill="#2b3348"/>
</g>
<circle cx="45.5" cy="65" r="1.9" fill="#fff"/><circle cx="79.5" cy="65" r="1.9" fill="#fff"/><circle cx="58" cy="81.5" r="1.4" fill="#fff" opacity=".8"/>
<g filter="url(#ink)" fill="none" stroke="#2b3348" stroke-width="2.2" stroke-linecap="round" opacity=".85">
 <path d="M60 88 V92 M60 92 C56 97 50 96 48 92 M60 92 C64 97 70 96 72 92"/>
</g>
</svg>`;

const CAT = `<svg viewBox="0 0 120 120" role="img" aria-label="แมวมันช์กินใส่แว่น">
<g filter="url(#wc)">
 <path d="M22 48 Q20 26 26 12 Q42 18 53 30Z" fill="#e9b06a"/>
 <path d="M98 48 Q100 26 94 12 Q78 18 67 30Z" fill="#e9b06a"/>
 <ellipse cx="60" cy="63" rx="47" ry="40" fill="#f6d4a2"/>
 <ellipse cx="42" cy="107" rx="11" ry="7" fill="#f6d4a2"/>
 <ellipse cx="78" cy="107" rx="11" ry="7" fill="#f6d4a2"/>
</g>
<g filter="url(#wc)" opacity=".85">
 <path d="M30 38 Q30 26 31 21 Q40 26 44 31Z" fill="#f2a7b6"/>
 <path d="M90 38 Q90 26 89 21 Q80 26 76 31Z" fill="#f2a7b6"/>
 <path d="M50 24 Q54 33 57 37 Q59 28 58 23Z M63 23 Q61 30 63 37 Q67 32 70 24Z M44 28 Q48 34 51 38 Q50 31 48 27Z" fill="#e2a160"/>
 <path d="M13 60 Q24 61 23 71 Q14 69 13 60Z M107 60 Q96 61 97 71 Q106 69 107 60Z" fill="#e2a160"/>
</g>
<g filter="url(#wc)" opacity=".5">
 <ellipse cx="32" cy="80" rx="8" ry="5" fill="#ff9fb3"/>
 <ellipse cx="88" cy="80" rx="8" ry="5" fill="#ff9fb3"/>
</g>
<g filter="url(#wc)">
 <ellipse cx="42" cy="65" rx="5.2" ry="5.8" fill="#3d5638"/><ellipse cx="78" cy="65" rx="5.2" ry="5.8" fill="#3d5638"/>
 <path d="M55 80 L65 80 L60 86Z" fill="#f0889d"/>
</g>
<circle cx="44" cy="63" r="1.8" fill="#fff"/><circle cx="80" cy="63" r="1.8" fill="#fff"/>
<g filter="url(#ink)" fill="none" stroke-linecap="round">
 <g stroke="#4a3560" stroke-width="3.2" opacity=".9">
  <circle cx="42" cy="65" r="14" fill="rgba(255,255,255,.22)"/><circle cx="78" cy="65" r="14" fill="rgba(255,255,255,.22)"/>
  <path d="M56 63 Q60 59 64 63 M28 63 L16 59 M92 63 L104 59"/>
 </g>
 <path d="M60 86 C57 91 52 90 51 87 M60 86 C63 91 68 90 69 87" stroke="#7a5a3a" stroke-width="2"/>
 <path d="M30 85 L14 83 M30 90 L15 93 M90 85 L106 83 M90 90 L105 93" stroke="#c19a68" stroke-width="1.5" opacity=".8"/>
</g>
<path d="M33 58 Q38 55 42 56" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M69 58 Q74 55 78 56" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
</svg>`;

/* Small painted decorations. Colors come from the current deck's theme. */
const DECO_PATH = {
  heart: "M12 21 C6 16 2 12.5 2 8.2 C2 5 4.5 2.6 7.5 2.6 C9.4 2.6 11 3.6 12 5.2 C13 3.6 14.6 2.6 16.5 2.6 C19.5 2.6 22 5 22 8.2 C22 12.5 18 16 12 21Z",
  star: "M12 2 L14.8 8.6 L22 9.3 L16.6 14 L18.2 21 L12 17.3 L5.8 21 L7.4 14 L2 9.3 L9.2 8.6Z",
  spark: "M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1Z",
  dot: "M12 6 A6 6 0 1 1 11.99 6Z"
};
function deco(kind, color, cls){
  return `<svg class="deco ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path filter="url(#wc)" d="${DECO_PATH[kind]}" style="fill:${color}"/></svg>`;
}
/* [kind, color, left %, top px or %, size px, rotation deg] */
const HEADER_DECO = [
  ["heart","var(--accent)",50,2,22,-8],["spark","var(--accent)",36,14,12,0],["spark","var(--accent)",64,10,14,0],
  ["star","var(--soft)",28,40,13,12],["heart","var(--soft)",71,38,13,14],["dot","var(--accent)",44,34,6,0],["dot","var(--accent)",57,30,5,0]
];
const PAGE_DECO = [
  ["star","var(--soft)",4,"14%",22,-10],["heart","var(--soft)",92,"22%",18,12],["spark","var(--soft)",6,"48%",16,0],
  ["heart","var(--soft)",94,"58%",22,-14],["star","var(--soft)",3,"78%",16,18],["spark","var(--soft)",93,"88%",14,0]
];
function placeDeco(list){
  return list.map(([k, c, x, y, s, r]) =>
    deco(k, c).replace('class="deco "', `class="deco" style="left:${x}%;top:${typeof y === "number" ? y + "px" : y};width:${s}px;height:${s}px;transform:rotate(${r}deg)"`)).join("");
}
const CARD_DECO = () =>
  `<span class="cdeco" aria-hidden="true">${deco("heart", "var(--accent)")}${deco("spark", "var(--soft)")}${deco("star", "var(--soft)")}</span>`;
