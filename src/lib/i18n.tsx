import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "zh" | "en";

type Dict = Record<string, { zh: string; en: string }>;

export const dict: Dict = {
  "site.title": { zh: "Lumiproxy", en: "Lumiproxy" },
  "site.tagline": { zh: "Lumiproxy 代理教程", en: "Lumiproxy Proxy Tutorial" },
  "nav.docs": { zh: "文档", en: "Docs" },
  "nav.tutorial": { zh: "教程", en: "Tutorial" },
  "nav.home": { zh: "首页", en: "Home" },
  "hero.cta": { zh: "开始学习 →", en: "Get Started →" },
  "hero.subtitle": {
    zh: "Lumiproxy 代理产品、配置教程与联系方式一站式中文/English 文档。",
    en: "One-stop docs on Lumiproxy products, setup tutorials & contact.",
  },
  "feat.1.title": { zh: "通俗易懂", en: "Easy to Follow" },
  "feat.1.desc": { zh: "用图解和例子讲解配置流程，零基础也能上手。", en: "Setup explained with diagrams and examples." },
  "feat.2.title": { zh: "实战导向", en: "Hands-on" },
  "feat.2.desc": { zh: "插件、手机、指纹浏览器的真实配置示例。", en: "Real-world setup for extensions, mobile & fingerprint browsers." },
  "feat.3.title": { zh: "双语支持", en: "Bilingual" },
  "feat.3.desc": { zh: "中英双语切换，适合国际化团队。", en: "Switch between Chinese and English." },

  "menu.intro": { zh: "介绍", en: "Introduction" },
  "menu.residential": { zh: "住宅代理", en: "Residential Proxy" },
  "menu.unlimited-residential": { zh: "无限住宅代理", en: "Unlimited Residential" },
  "menu.static-residential": { zh: "静态住宅代理", en: "Static Residential" },
  "menu.static-datacenter": { zh: "静态数据中心代理", en: "Static Datacenter" },
  "menu.isp": { zh: "长效 ISP", en: "Long-life ISP" },
  "menu.extension": { zh: "插件配置", en: "Extension Setup" },
  "menu.mobile": { zh: "手机配置", en: "Mobile Setup" },
  "menu.fingerprint-browser": { zh: "指纹浏览器", en: "Fingerprint Browser" },
  "menu.chain-proxy": { zh: "链式代理", en: "Chain Proxy" },
  "menu.contact": { zh: "频道及联系方式", en: "Channel & Contact" },

  "sub.intro": { zh: "简介", en: "Introduction" },
  "sub.quickstart": { zh: "快速开始", en: "Quick Start" },
  "sub.configuration": { zh: "配置", en: "Configuration" },
  "sub.first-request": { zh: "发送您的第一个请求", en: "Send Your First Request" },
  "sub.faq": { zh: "常见问题解答", en: "FAQ" },

  "sub.ext.SwitchyOmega": { zh: "SwitchyOmega", en: "SwitchyOmega" },
  "sub.ext.FoxyProxy": { zh: "FoxyProxy", en: "FoxyProxy" },
  "sub.ext.Postern": { zh: "Postern", en: "Postern" },
  
  "sub.mobile.android": { zh: "安卓", en: "Android" },
  "sub.mobile.ios": { zh: "iOS", en: "iOS" },

  "sub.fp.adspower": { zh: "Adspower", en: "Adspower" },
  "sub.fp.bitbrowser": { zh: "比特浏览器", en: "BitBrowser" },
  "sub.fp.ziniao": { zh: "紫鸟浏览器", en: "Ziniao Browser" },
  "sub.fp.ixbrowser": { zh: "ixBrowser", en: "ixBrowser" },
  "sub.fp.hubstudio": { zh: "Hubstudio", en: "Hubstudio" },
  "sub.fp.MuLogin": { zh: "MuLogin", en: "MuLogin" },
  "sub.fp.MoreLogin": { zh: "MoreLogin", en: "MoreLogin" },
  "sub.fp.GoLogin": { zh: "GoLogin", en: "GoLogin" },
  "sub.fp.linkensphere": { zh: "linkensphere", en: "linkensphere" },
  "sub.fp.VMLogin": { zh: "VMLogin", en: "VMLogin" },

  "sub.cp.clash-verge": { zh: "Clash Verge", en: "Clash Verge" },
  "sub.cp.v2rayn": { zh: "v2rayN", en: "v2rayN" },
  "sub.cp.proxifier": { zh: "Proxifier", en: "Proxifier" },


  "footer.copy": { zh: "© 2026 Lumiproxy. 保留所有权利.", en: "© 2026 Lumiproxy. All rights reserved." },
  "lang.label": { zh: "语言", en: "Language" },
  "edit.prev": { zh: "← 上一页", en: "← Previous" },
 "edit.next": { zh: "下一页 →", en: "Next →" },
 "toc.title": { zh: "本页目录", en: "On this page" },
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "zh",
  setLang: () => {},
  t: (k) => k,
});

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "zh";
  const saved = localStorage.getItem("lang");
  return saved === "en" || saved === "zh" ? saved : "zh";
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if ((saved === "zh" || saved === "en") && saved !== lang) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
