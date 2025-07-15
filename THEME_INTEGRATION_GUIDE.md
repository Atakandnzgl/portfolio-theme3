# Persona Portfolio Theme - Upper-Board-Seo Entegrasyon Rehberi

## 📋 Genel Bakış

Bu rehber, Persona portfolio temasını Upper-Board-Seo ana projesine nasıl entegre edeceğinizi açıklar.

## 🚀 Entegrasyon Adımları

### 1. Dosya Yapısı

```
Upper-Board-Seo/
├── src/
│   ├── components/
│   │   └── portfolio/
│   │       └── themes/
│   │           └── persona/
│   │               └── PersonaPortfolioPage.tsx  ← YENİ
│   ├── constants/
│   │   ├── enums/
│   │   │   └── ThemeEnum.ts  ← GÜNCELLE
│   │   └── models/
│   │       └── Portfolio.ts  ← MEVCUT
│   └── customHooks/
│       └── portfolio/
│           └── useGetPortfolioTheme.tsx  ← GÜNCELLE
└── public/
    └── assets/
        └── images/
            └── themes/
                └── persona-theme.png  ← YENİ
```

### 2. ThemeEnum Güncellemesi

```typescript
// src/constants/enums/ThemeEnum.ts
export enum ThemeEnum {
    DEFAULT = 0,
    DEFAULT_DARK = 1,
    FLOYKA = 2,
    FLOYKA_DARK = 3,
    ETOPES = 4,
    ETOPES_DARK = 5,
    ARTISAN = 6,
    ARTISAN_DARK = 7,
    PERSONA = 8  // ← YENİ EKLENDİ
}

export const ThemeEnumImgPath: Record<string, string> = {
    // ... mevcut temalar
    PERSONA: "/assets/images/themes/persona-theme.png",  // ← YENİ
};

export const ThemeEnumText: Record<string, string> = {
    // ... mevcut temalar
    PERSONA: "Persona",  // ← YENİ
}
```

### 3. useGetPortfolioTheme Güncellemesi

```typescript
// src/customHooks/portfolio/useGetPortfolioTheme.tsx
import PersonaPortfolioPage from "@/components/portfolio/themes/persona/PersonaPortfolioPage";

export const useGetPortfolioTheme = (portfolio: Portfolio) => {
    const getPortfolioTheme = () => {
        switch (portfolio.themeId) {
            // ... mevcut case'ler
            case ThemeEnum.PERSONA:
                return <PersonaPortfolioPage portfolio={portfolio} />;  // ← YENİ
            default:
                return <DefaultPortfolioTheme portfolio={portfolio} />;
        }
    };
    return getPortfolioTheme;
};
```

### 4. PersonaPortfolioPage Bileşeni

```typescript
// src/components/portfolio/themes/persona/PersonaPortfolioPage.tsx
import Portfolio from "@/constants/models/Portfolio";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { HireMe2 } from "@/components/HireMe2";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

interface PersonaPortfolioPageProps {
    portfolio: Portfolio;
}

const PersonaPortfolioPage = ({ portfolio }: PersonaPortfolioPageProps) => {
    return (
        <>
            <Head>
                <title>{`${portfolio.firstName} ${portfolio.lastName} | Portfolio`}</title>
                <meta name="description" content={portfolio.about} />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text={`${portfolio.firstName} ${portfolio.lastName}`}
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    {/* Portfolio içeriği */}
                    <Skills />
                    <Experience />
                    <HireMe2 />
                </Layout>
            </main>
        </>
    );
};

export default PersonaPortfolioPage;
```

## 📦 Gerekli Bağımlılıklar

Persona teması için gerekli bağımlılıklar:

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.0.0",
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

## 🎨 Tema Özellikleri

### Persona Tema Özellikleri:
- ✅ Responsive tasarım
- ✅ Dark/Light mode desteği
- ✅ Framer Motion animasyonları
- ✅ Tailwind CSS styling
- ✅ SEO optimizasyonu
- ✅ Portfolio verilerini dinamik olarak gösterir

### Desteklenen Portfolio Verileri:
- Kullanıcı bilgileri (ad, soyad, profil resmi)
- Biyografi
- Deneyimler
- Yetenekler
- Projeler/Blog yazıları
- Sosyal medya linkleri

## 🔧 Test Etme

1. **Tema Seçimi:**
   ```typescript
   // Portfolio verisinde themeId'yi 8 olarak ayarlayın
   const portfolio = {
     // ... diğer veriler
     themeId: ThemeEnum.PERSONA, // 8
   };
   ```

2. **URL Test:**
   ```
   http://localhost:3000/portfolio/[username]
   ```

## 📝 Notlar

- Persona teması mevcut portfolio bileşenlerini kullanır
- Tema ID'si: 8 (ThemeEnum.PERSONA)
- Tüm portfolio verileri dinamik olarak gösterilir
- Responsive tasarım tüm cihazlarda çalışır

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

1. **Tema görünmüyor:**
   - `themeId` değerinin 8 olduğundan emin olun
   - `useGetPortfolioTheme` hook'unun doğru import edildiğini kontrol edin

2. **Stil sorunları:**
   - Tailwind CSS'in yüklendiğinden emin olun
   - Global CSS dosyalarının import edildiğini kontrol edin

3. **Animasyon sorunları:**
   - Framer Motion'ın yüklendiğinden emin olun
   - `AnimatePresence` wrapper'ının mevcut olduğunu kontrol edin

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- GitHub Issues kullanın
- Dokümantasyonu kontrol edin
- Örnek kodları inceleyin 