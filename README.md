# Netflix Giriş Ekranı (Next.js + Clerk)

Bu proje, Netflix tarzı bir giriş ekranı sunar. Kullanıcılar Clerk ile giriş yapabilir. Giriş yaptıktan sonra `browse` sayfasına yönlendirilir.

## 🔧 Kurulum

1. Bu repoyu klonlayın:

```bash
git clone https://github.com/kullaniciadiniz/proje-adi.git
cd proje-adi
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. `.env.local` dosyası oluşturun ve Clerk bilgilerinizi ekleyin:

```env
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_FRONTEND_API=...
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

5. Uygulamayı tarayıcınızda açın:

```
http://localhost:3000
```

## ✅ Özellikler

* Clerk ile kullanıcı girişi
* Netflix benzeri arayüz
* Giriş sonrası yönlendirme
