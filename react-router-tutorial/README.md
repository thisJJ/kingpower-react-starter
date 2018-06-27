# React Router

       พูดถึงการทำ Website ที่มีหน้าแสดงผลหลายแบบ เราคงอยากแมพ url กับหน้าแสดงผลแบบต่างๆ ใน project เช่น

**path** /category/women-shirt

    อยากแสดงหน้า category ที่รวม item(สินค้า) ต่างๆในหมวดเสื้อผ้าผู้หญิง

**path** /product/white-shirt-by-kpc

    อยากแสดงหน้าข้อมูล product ชื่อ White Shirt by KPC

## สมัยก่อน Angular ก่อน Reactjs ก่อนจะรู้จักคำว่า Singlepage Web/Application
---

       หรือเราอาจจะเรียกว่า multipage website สมัยที่การทำ web ต้องแมพ url ไปกับ path ต่างๆใน project อยากมีกี่หน้่าก็สร้างไฟล์ขึ้นมาแล้วเข้า path ตรงๆก็จะได้หน้าแสดงผลตามนั้น

## มาถึงสมัย Reactjs กำเนิดเรารู้จักคำว่า Singlepage Web/Application
---

       เราพูดถึงเรื่อง component(หลายๆไฟล์) เอาไปแปะตาม container(หลายๆไฟล์) ก่อนจะนำไปแสดงผลบนหน้า web เพราะต้องใช้หลายไฟล์มาประกอบเป็นหนึ่งหน้า จึงต้องมีการจัดการ url ให้กับการแสดงผลหน้าต่างๆ เพราะไม่สามารถเข้า path ตรงๆได้อีกต่อไป และตัวจัดนั้นคือ React router

###  React router
---
        เริ่มต้นง่ายๆหากใครเคยศึกษา react-tutorial มาแล้ว เมื่อ start เป็น local web ได้สิ่งที่ต้องทำต่อไปคือ

#### ติดตั้ง React router
```
yarn add react-router-dom
# or, if you're not using yarn
npm install react-router-dom
```
จากนั้น เรามาพูดถึงตัวอย่างก่อนหน้า category, product หน้า category จะมีรายการของ product และหน้า product จะมี รูปสินค้า ชื่อ และราคาแบ่งเป็น ไฟล์ต่างๆ

```
const Category = (categoryName, categoryProductList) => (
  <div>
    <h1>{categoryName}</h1>
    <ProductList Products={categoryProductList} />
  <div>
)
```
