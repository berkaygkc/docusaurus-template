---
sidebar_position: 2
---

# Genel Çalışma Yapısı

Uygulamanın genel çalışma yapısı burada açıklanmıştır.

## Aşamalar

Uygulama üzerinde **13 aşama** bulunmaktadır.

Bu aşamalar sırasıyla:
1. İşlem Görmemiş Firmalar
2. Defter Oluşturuluyor
3. Defter Oluşturuldu
4. XML Oluşturuluyor
5. XML Oluşturuldu
6. Defterler İmzalanıyor
7. Defterler İmzalandı
8. GIB'e Gönderiliyor
9. GIB'e Gönderildi
10. GIB Onaylı Beratlar İndiriliyor
11. GIB Onaylı Beratlar İndirildi
12. İşlemler Tamamlanıyor
13. Tüm İşlemler Tamamlandı

Tüm bu aşamalar **otomatik olarak** çalışmaktadır. Sadece Canlı olarak takip edebilmeniz için bu şekilde eklenmiştir. 

> Sayfa ilk açıldığında hangi **firma**, hangi **aşamadaysa** o alanda gelecektir. Yani işlemleriniz bir sebepten **yarım** kalırsa, **kaldığınız yerden devam edebilirsiniz.**

## İşlem Yapma

Herhangi bir durumda bulunan firmalarınıza 3 adet işlem yapabilirsiniz.

### İşlem Yap

Bu **İşlem Yap** butonu içerisinde yapabileceğiniz işlemleri barındıran bir pencere açacaktır. İlgili aşamada seçtiğiniz firmalara yapacağınız işlemleri seçip işlemleri başlatabilirsiniz.

### Defter Sil

Bu **Defter Sil** butonu, ilgili aşamada seçtiğiniz firmaların defterlerini **Silmek** ve işlemlerini en başa almak için kullanılır. Hangi aşamaya kadar geldiyse oradan geriye doğru **tüm silme işlemlerini** gerçekleştirir.

Örneğin;

- Eğer **Tüm İşlemler Tamamlandı** aşamasındaki firmaları seçip, **Defter Sil** butonuna tıklarsanız, seçili firmaların sırasıyla
    - Gelir İdaresi Başkanlığındaki Defterleri
    - Bilgisayarınıza indirilmiş olan onaylı beratları ve defterleri
    - Luca üzerinde oluşturulmuş olan defterleri
silecektir.

- Eğer **XML Oluşturuldu**  aşamasındaki firmaları seçip, **Defter Sil** butonuna tıklarsanız sırasıyla
    - Luca üzerinde oluşturulmuş olan defterleri 
silecektir.

### Geri Al

Herhangi bir aşamada **hata alan** bir işlem olursa, ilgili firmanın bir önceki aşamaya alır ve tekrar deneyebilmeniz için hazırlar. Burada **Geri Al** butonuna tıklanır ve bir önceki aşamaya dönüp, firma seçilip **İşlem Yap** butonuna tıklanır ve işlemler yapılır. Eğer en başa alınmak isterse önce **Geri Al** butonuna tıklanır ve önceki aşamaya gelip **Defter Sil** butonuna tıklanır ve ilgili firmanın en başa dönmesi sağlanır.