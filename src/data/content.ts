export const person = {
  name: 'lisirui',
  tagline: 'UI/UX 设计师',
  heroIntro: '专注打造令人惊艳、过目不忘的数字体验的 UI 设计师',
  aboutText:
    '拥有五年以上的设计经验，我专注于产品、用户体验与交互设计，热爱与渴望脱颖而出、展现最佳作品的团队合作。让我们一起创造了不起的东西！',
}

export type Service = {
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  { number: '01', title: 'UI Design', description: '面向网页与移动端的人性化界面，让使用流畅、观感出众。' },
  { number: '02', title: 'UX Design', description: '以研究驱动的流程与原型，把复杂问题梳理成清晰、有引导的用户旅程。' },
  { number: '03', title: 'Interaction & Motion', description: '为每个界面注入个性的微交互与动效，让反馈更生动、质感更完整。' },
  { number: '04', title: 'Design Systems', description: '可扩展的组件库与设计规范，让产品跨团队、跨平台始终保持一致。' },
  { number: '05', title: 'Web Design', description: '干净、现代、以转化为导向的网站设计，兼顾版式、字体与易用性。' },
]

export type Project = {
  id: string
  number: string
  category: string
  name: string
  description: string
  col1a: string
  col1b: string
  col2: string
}

const img = (id: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${id}.png&w=1280&q=85`

export const projects: Project[] = [
  {
    id: 'nextlevel',
    number: '01',
    category: '客户',
    name: 'Nextlevel 工作室',
    description: '为创意工作室重塑官网与品牌形象，突出其先锋的视觉语言。',
    col1a: img('hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db'),
    col1b: img('hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8'),
    col2: img('hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327'),
  },
  {
    id: 'aura',
    number: '02',
    category: '个人',
    name: 'Aura 品牌视觉',
    description: '一套以 Aura 为名的品牌识别系统，从 logo 到完整的视觉语言。',
    col1a: img('hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f'),
    col1b: img('hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1'),
    col2: img('hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea'),
  },
  {
    id: 'solaris',
    number: '03',
    category: '客户',
    name: 'Solaris 数字化',
    description: 'Solaris 数字化平台的体验设计，聚焦清晰、聚焦转化的信息层级。',
    col1a: img('hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f'),
    col1b: img('hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b'),
    col2: img('hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee'),
  },
  {
    id: 'monogrid',
    number: '04',
    category: '客户',
    name: 'Mono Grid',
    description: '极简网格风格的网页设计实验，考验版式与留白的克制。',
    col1a: img('hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f'),
    col1b: img('hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1'),
    col2: img('hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327'),
  },
]

const marquee = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
]

export const marqueeRow1 = marquee.slice(0, 11)
export const marqueeRow2 = marquee.slice(11)

export const aboutDecor = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    size: 'w-[120px] sm:w-[160px] md:w-[210px]',
    fade: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    pos: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    size: 'w-[100px] sm:w-[140px] md:w-[180px]',
    fade: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    size: 'w-[120px] sm:w-[160px] md:w-[210px]',
    fade: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    pos: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    size: 'w-[130px] sm:w-[170px] md:w-[220px]',
    fade: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]
