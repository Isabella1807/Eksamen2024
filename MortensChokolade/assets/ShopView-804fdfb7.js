import{_ as Q,o as c,c as r,a as e,t as E,b as C,p as N,d as D,q as z,w as L,e as b,g as $,f as O,u as J,h as T,i as X,m as k,r as u,j as H,n as R,F as x,k as Y,l as I,s as W,v as Z,x as ee,y as te,z as oe,A as q,B as V,C as se,D as ae,E as ne,G as U,H as S,I as de}from"./index-40fbcd8c.js";const le="/MortensChokolade/assets/shopBanner-9c0565f2.png",G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVFhHY2QgHxQAtdYD8QYgTiTXGEZyNQL1PQBieah+ss0hWyPQ4v9IjifbHLI1jjpgNARGQ2A0BEZDgJohAKrV8oFYgYKKiVStH4AaFgBxIaguAHH4STWBSuoFQQ4AuSSeSgaSYsxBoGKH0dpwNARGQ2A0BEZDYDQEKAkB5FqUbHPI1gisySZA2xHgWo2UahBZLSUOAJkjAG1PkGs/AwApkiUxS/7VswAAAABJRU5ErkJggg==",ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAE4SURBVEhLxZaBDYIwEEVhAt1A3UAnEDdwA3UC4wTKBm6gboATiBPICDiBOoH+n9gGmxYSuFYSgsLxX+/6ezSOmo8lQg41YSWezXDy6jzi75ME17cjKsP9fsN4GLN3xLxwvyCIIxk0J9YpYkOQK5NOysbLaVAQJ3soOXyLVqbM4JkTRQrEjBYeaHdoHqmrQLTvwwPoCk0uHQ3ibx/uO0GXHvAOSsHY/Q1UgizdIawZ5QBNhQ2xMl1HfR8gdnXq/pghGIgLS3rRWjOiDbfCczSBXmGWzgdI99JqUw0GYquo2xu0qao1owRKlzZqjne4V9B7jWrppEG6c5tmCAYag3wTLJ0zIzIkv0ln6M3VwM09gyRId25zjvj/ibMnVL5aELe1ayHQCDqlq3T0PTsEa9v2I0gTUCOvDvgDqlw5v2jlGr4AAAAASUVORK5CYII=",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVEhLvdYBDcIwEAVQpgCcAAoABzggOAAFwwESQAIOmARwMAmgAO4v3NKV9nbt2pFcsixr33q7Xikm6X4zmupCsaWoKI4UD3P6IpEF6E6xMOZ70fXGBFNgLojNDpgCQ8pWQoZacAiGFWEipA7gVADx7ZaxGKcOk+yVYBGD2d/oqgCfeKFQzFcMEvgmaI2qDMGkqsPncoEthAe0WB/EtWGCN7qJDd5ubA2mhWzwrzj7sFAIAFKH7VDbmoTFQk0xuPacD0sO+QokC+TCskE2lhUysewQY6NAjB3o4uwqVc+9TgsKGNe0qxNFqRwUDfHK0M92CmwQxFhFF9Kxzi3I2xkUL9o8gjSitcyFAYNXxHMD+4wBuVaG4xt/Yupf4ExyNlVt6szn+o6YmDm9Y7466lYc/2Nu/wAAAABJRU5ErkJggg==";const M=o=>(N("data-v-c9c41d2b"),o=o(),D(),o),re={class:"shopProduct"},ue={class:"shopProductImageContainer"},Ae=["src"],pe={class:"productInformationContainer"},ge={class:"productAddContainer"},ve=M(()=>e("img",{src:G,alt:"tilføj"},null,-1)),_e=[ve],me={class:"adminShopItemsContainer"},Ce=M(()=>e("img",{src:ie,alt:"slet"},null,-1)),he=[Ce],ye=M(()=>e("img",{src:ce,alt:"ændre"},null,-1)),fe=[ye],we={__name:"ShopProduct",props:["title","frontImage","price","id","editProduct","addToCart","deleteProduct","isAdmin"],setup(o){const t=o;return(a,s)=>(c(),r("div",re,[e("div",ue,[e("img",{src:t.frontImage,alt:"Image Tekst"},null,8,Ae)]),e("div",pe,[e("div",null,[e("p",null,E(t.title),1),e("p",null,E(t.price)+" DKK",1)]),e("div",ge,[t.isAdmin?C("",!0):(c(),r("button",{key:0,class:"productAddProductButton",onClick:s[0]||(s[0]=()=>t.addToCart(t.id))},_e)),e("div",me,[t.isAdmin?(c(),r("button",{key:0,class:"productAddProductButton",onClick:s[1]||(s[1]=()=>t.deleteProduct(t.id))},he)):C("",!0),t.isAdmin?(c(),r("button",{key:1,class:"productAddProductButton",onClick:s[2]||(s[2]=()=>t.editProduct(t.id))},fe)):C("",!0)])])])]))}},Ie=Q(we,[["__scopeId","data-v-c9c41d2b"]]),B="products",ke=async o=>{const t=[];let a;return o?a=z(b(k,B),L("category","==",o)):a=b(k,B),await $(a).then(s=>{s.forEach(d=>{t.push({...d.data(),id:d.id})})}).catch(()=>{console.log("getAllProducts fejlede")}),t},Be=async(o,t,a,s,d)=>{await O(b(k,B),{title:o,frontImage:t,description:a,price:s,category:d}).catch(i=>{console.error("Error adding document: ",i)})},Pe=async(o,t)=>{await J(T(k,B,o),t)},Qe=async o=>{await X(T(k,B,o))},P={getAllProducts:ke,addNewProduct:Be,editProduct:Pe,deleteProduct:Qe};const Ue={id:"ShopCategoringContainer"},Se=["onClick"],Ee={__name:"ShopCategorizer",props:["setCategory","selectedCategory"],setup(o){const t=o;let a=u([]);H(async()=>{const d=await P.getAllProducts();a.value=s(d)});const s=d=>{const i=new Set;return d.forEach(n=>{i.add(n.category)}),Array.from(i)};return(d,i)=>(c(),r("div",Ue,[e("div",{class:R(["ShopCategoringItem",{active:t.selectedCategory===""}])},[e("h2",{onClick:i[0]||(i[0]=()=>t.setCategory(""))},"Alle produkter")],2),(c(!0),r(x,null,Y(I(a),n=>(c(),r("div",{class:R(["ShopCategoringItem",{active:t.selectedCategory===n}]),key:n,onClick:()=>t.setCategory(n)},[e("h2",null,E(n),1)],10,Se))),128))]))}},xe=Q(Ee,[["__scopeId","data-v-fe66b901"]]),be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJVSURBVFhHvZftTcMwEIbpBDBCWQAYAcQAlAlIJ2gjMQD85k82IJ2AjwXIBsAGnQCVCcr7okvlXP1xTtNaspI67t2TO/vyenQkbT6fX+B2VVXVsh07xFX7HdEpBp9xKQiEXgKqPhCM63cKv68jIfxUAHy4Nyj4PIG/D3RmpW1L+Dwl0BgjX+jHCqrGhOnQkQrA0M0b/E3alDFdDJ9ug0JJNl7ghEFw2zd+XAJo9Q/EJpMbT6Q4dsvJu0RL7DNNTJcXhoMboAQUU3rVFwowE8mAhlkwFq7dDpBAMZyv6OfqTQjFxc6ruQGmEBj9nwVs8VmnbQEJFN+k8UAxbYyUCaosy9l6va489I+w8eB7Ky+QA1Xj/kb9kVBcUwQONqe26TnRkhIEaq3AMKHuPJ6DhgMwv7DB9UJ7wZYEkmgx7LMUVKTGEIbbOplqE5BAFbgGa9UQMPRjBkpAveP5GfpYRXFT8GJpcp9lAQkUvz8Nuv7UaJ/ZMNkRchZ6Cmqr4O0tQg7UPe6fPI5+MHZtWcA+yOyU0Uik4LU+sgrormuoFVWpLJgKqDaSFaFYwWOdQc8qoL1TZq0xmGcqoLHQJiNkhXEWe4H73mIvCmRReL63jUiOpAKNfe1Za5IKLxT+vgo0pIfMCi+2HiJQQQXqU4yhNeBVeKm9L6caswLtAPVReCkgPpeN0eBWy+KtAuqeOkIFb5BDo0DVgIoqUH2Udl/YpPAsEXLnRBQoZXHwKG1WeLlAkkJfAQ0epfcKEymgnaM0tzmpuR2LvgfC3GjJAbLjN/npyHWy6/w/60pLMZONHYwAAAAASUVORK5CYII=";const Ve={class:"modal"},Ne={__name:"Modal",props:["closeFunction"],setup(o){return(t,a)=>(c(),r(x,null,[(c(),r("div",{key:0,class:"overlay",onClick:a[0]||(a[0]=(...s)=>o.closeFunction&&o.closeFunction(...s))})),e("div",Ve,[W(t.$slots,"default",{},void 0,!0)])],64))}},De=Q(Ne,[["__scopeId","data-v-3ed69289"]]);function Me(){const o=Z();let t=u({value:null}),a=u("");const s=n=>(n/(1024*1024)).toFixed(2)+" MB",d=async n=>{t.value=n.target.files[0],console.log("Selected file:",t.value.name,"Size:",s(t.value.size)),await i()},i=async()=>{var v,A;if(console.log("Uploading file:",(v=t.value)==null?void 0:v.name,"Size:",s((A=t.value)==null?void 0:A.size)),!t.value){console.error("No file selected");return}const n=Date.now(),p=t.value.name.split(".").pop(),h=`${n}.${p}`,f=ee(o,`images/${h}`),l=te(f,t.value);console.log("Upload task object:",l);try{const _=await l,w=await oe(_.ref);console.log("File available at",w),a.value=w}catch(_){console.error("Error during upload:",_)}};return{handleFileUpload:d,imageUrl:a}}const F=o=>(N("data-v-f4502e83"),o=o(),D(),o),Fe=F(()=>e("img",{src:G,alt:"tilføj nyt produkt"},null,-1)),Re=[Fe],Te={class:"modalHeaderContainer"},He={class:"modalTitle"},Ye=F(()=>e("img",{src:be,alt:"luk"},null,-1)),qe=[Ye],Ge={id:"addProductWindow"},Ke={class:"addProductContainer"},je={class:"rightSectionItems"},ze={class:"addProductInputContainer"},Le={class:"addProductModalButtonsContainer"},$e={key:0,class:"inputIsMissing"},Oe=F(()=>e("p",{class:"missingDataText"},"Alle felter ikke udfyldt",-1)),Je=[Oe],Xe={__name:"AddNewProductModal",setup(o,{expose:t}){const{handleFileUpload:a,imageUrl:s}=Me(),d=u(""),i=u(""),n=u(""),p=u(""),h=u(!1),f=()=>{_.value=!1,A.value=!0},l=()=>{d.value="",s.value="",i.value="",n.value="",p.value="",h.value=!1,A.value=!1},v=()=>{if(d.value===""||i.value===""||n.value===""||p.value===""){h.value=!0;return}P.addNewProduct(d.value,s.value,i.value,n.value,p.value),l()},A=u(!1),_=u(!1),w=u("");t({openEditProductModal:y=>{_.value=!0,w.value=y.id,d.value=y.title,i.value=y.description,s.value=y.frontImage,n.value=y.price,p.value=y.category,A.value=!0}});const K=q(()=>_.value?"Ændre produkt":"Tilføj nyt produkt"),j=async()=>{await P.editProduct(w.value,{title:d.value,description:i.value,frontImage:s.value,price:n.value,category:p.value}),l()};return(y,g)=>(c(),r("div",null,[e("button",{onClick:f,class:"addProductButton"},Re),A.value?(c(),V(De,{key:0,closeFunction:l},{default:se(()=>[e("div",Te,[e("h1",He,E(K.value),1),e("button",{onClick:l},qe)]),e("div",Ge,[e("form",{onSubmit:g[5]||(g[5]=ae(()=>{},["prevent"]))},[e("div",Ke,[e("div",{class:"addProductAddImageContainer",style:ne(`background-image: url(${I(s)})`)},[e("input",{type:"file",onChange:g[0]||(g[0]=(...m)=>I(a)&&I(a)(...m))},null,32)],4),e("div",je,[e("div",ze,[U(e("input",{type:"text",id:"title",placeholder:"Title","onUpdate:modelValue":g[1]||(g[1]=m=>d.value=m)},null,512),[[S,d.value]]),U(e("input",{type:"number",id:"price",placeholder:"price","onUpdate:modelValue":g[2]||(g[2]=m=>n.value=m)},null,512),[[S,n.value]]),U(e("input",{type:"text",id:"category",placeholder:"category","onUpdate:modelValue":g[3]||(g[3]=m=>p.value=m)},null,512),[[S,p.value]]),U(e("textarea",{id:"description",placeholder:"description","onUpdate:modelValue":g[4]||(g[4]=m=>i.value=m)},null,512),[[S,i.value]])])])]),e("div",Le,[e("button",{onClick:l,class:"productWindowButton"},"Annuller"),_.value?C("",!0):(c(),r("button",{key:0,type:"submit",onClick:v,class:"productWindowButton"},"Tilføj produkt ")),_.value?(c(),r("button",{key:1,type:"submit",onClick:j,class:"productWindowButton"},"Ændre produkt ")):C("",!0)]),h.value?(c(),r("div",$e,Je)):C("",!0)],32)])]),_:1})):C("",!0)]))}},We=Q(Xe,[["__scopeId","data-v-f4502e83"]]);const Ze=o=>(N("data-v-7794a788"),o=o(),D(),o),et=Ze(()=>e("div",{class:"shopBannerContainer"},[e("img",{src:le,alt:"Banner showing delicious chocolates"})],-1)),tt={id:"shopContainer"},ot={class:"shopContainerHelper"},st={id:"productCategoring"},at={id:"productContainer"},nt={__name:"ShopView",props:["isAdmin","setIsAdmin","addToCart"],setup(o){const t=o;let a=u([]);H(async()=>{a.value=await P.getAllProducts()});let s=u("");const d=l=>{s.value=l},i=q(()=>s.value===""?a.value:a.value.filter(l=>l.category===s.value)),n=async l=>{confirm("Are you sure you want to delete?")&&(await P.deleteProduct(l),a.value=a.value.filter(v=>v.id!==l))},p=u(),h=l=>{p.value.openEditProductModal(a.value.find(v=>v.id===l))},f=l=>{t.addToCart(l,1)};return(l,v)=>(c(),r(x,null,[et,e("div",tt,[e("div",ot,[e("div",st,[de(xe,{class:"shopProductItems",setCategory:d,selectedCategory:I(s)},null,8,["selectedCategory"])]),e("div",at,[(c(!0),r(x,null,Y(i.value,A=>(c(),V(Ie,{key:A.id,id:A.id,isAdmin:o.isAdmin,deleteProduct:n,editProduct:h,addToCart:f,title:A.title,frontImage:A.frontImage,price:A.price},null,8,["id","isAdmin","title","frontImage","price"]))),128)),o.isAdmin?(c(),V(We,{key:0,class:"shopProductModal",ref_key:"productModal",ref:p},null,512)):C("",!0)])])])],64))}},it=Q(nt,[["__scopeId","data-v-7794a788"]]);export{it as default};