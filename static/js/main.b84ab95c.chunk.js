(this["webpackJsonphome-page"]=this["webpackJsonphome-page"]||[]).push([[0],{21:function(e,n,t){"use strict";t.r(n);var r,i,o,a,c,s,d,l=t(1),b=t.n(l),u=t(9),j=t.n(u),p=t(2),m=t(4),h=t(10),x=t(3),C=t.p+"static/media/nav-logo.8b3c8ea6.svg",g=t(0),f=x.b.header(r||(r=Object(p.a)(["\n  /* top: 0;\n  position: sticky; */\n  display: flex;\n  flex-direction: column;\n  height: 11vh;\n  background-color: #e4e4e4;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);\n"]))),O=x.b.div(i||(i=Object(p.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & img {\n    width: 7rem;\n  }\n"]))),v=x.b.div(o||(o=Object(p.a)(["\n  width: 85%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),w=x.b.a(a||(a=Object(p.a)(["\n  cursor: pointer;\n  font-size: 1.5rem;\n  width: 30%;\n  text-align: center;\n  transition: font-size 0.2s;\n\n  &:hover {\n    font-size: 1.8rem;\n    font-weight: bold;\n  }\n"]))),y=x.b.div(c||(c=Object(p.a)(["\n  position: absolute;\n  height: 0.4rem;\n  width: ","%;\n  background-color: #232323;\n  border-radius: ",";\n"])),(function(e){return e.percent}),(function(e){return e.percent>99?"0":"0px 10px 10px 0px"}));function V(e){Object(h.a)(e);var n=Object(l.useState)(0),t=Object(m.a)(n,2),r=t[0],i=t[1];Object(l.useEffect)((function(){var e=document.getElementById("main-content");console.log(e),e&&(e.onscroll=function(){var n=e.scrollTop||document.documentElement.scrollTop,t=e.scrollHeight-e.clientHeight;i(n/t*100)})}),[]);return Object(g.jsxs)(f,{children:[Object(g.jsx)(y,{percent:r}),Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:"1"},children:[Object(g.jsx)(O,{children:Object(g.jsx)("img",{src:C,alt:"logo - return zero"})}),Object(g.jsx)(v,{children:[{title:"O Grupo",path:"group"},{title:"Rob\xf3tica e TI",path:"robotica"},{title:"Circuito Rob\xf4",path:"circuit"},{title:"Programa Rob\xf4",path:"program"}].map((function(e,n){return Object(g.jsx)(w,{onClick:function(){return function(e){var n;null===(n=document.getElementById(e))||void 0===n||n.scrollIntoView({block:"center",behavior:"smooth"})}(e.path)},children:e.title},n)}))})]})]})}function H(){return(H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function I(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function k(e,n){var t=e.title,r=e.titleId,i=I(e,["title","titleId"]);return l.createElement("svg",H({width:135,height:98,viewBox:"0 0 135 98",fill:"current",stroke:"current",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?l.createElement("title",{id:r},t):null,s||(s=l.createElement("path",{d:"M14.6251 24.177C12.6758 24.2343 10.9558 24.779 9.46512 25.811C8.00312 26.843 6.97112 28.262 6.36912 30.068V44H3.44512V21.597H6.19712V26.972C6.97112 25.3953 7.98878 24.1197 9.25012 23.145C10.5401 22.1703 11.9018 21.6257 13.3351 21.511C13.6218 21.4823 13.8655 21.468 14.0661 21.468C14.2668 21.468 14.4531 21.4823 14.6251 21.511V24.177ZM30.5334 44.43C28.3834 44.43 26.4628 43.8997 24.7714 42.839C23.0801 41.7783 21.7471 40.3593 20.7724 38.582C19.7978 36.8047 19.3104 34.8553 19.3104 32.734C19.3104 30.6413 19.7834 28.7207 20.7294 26.972C21.7041 25.2233 23.0371 23.833 24.7284 22.801C26.4198 21.7403 28.3404 21.21 30.4904 21.21C32.6978 21.21 34.6328 21.7403 36.2954 22.801C37.9581 23.8617 39.2481 25.2663 40.1654 27.015C41.1114 28.735 41.5844 30.627 41.5844 32.691C41.5844 33.1497 41.5701 33.5367 41.5414 33.852H22.3634C22.5068 35.4573 22.9654 36.8907 23.7394 38.152C24.5134 39.3847 25.5024 40.3737 26.7064 41.119C27.9104 41.8357 29.2291 42.194 30.6624 42.194C32.1244 42.194 33.5004 41.8213 34.7904 41.076C36.0804 40.3307 36.9978 39.356 37.5424 38.152L40.0794 38.84C39.6208 39.9293 38.9041 40.904 37.9294 41.764C36.9834 42.5953 35.8798 43.2547 34.6184 43.742C33.3571 44.2007 31.9954 44.43 30.5334 44.43ZM22.2774 31.745H38.8324C38.7178 30.1397 38.2734 28.7207 37.4994 27.488C36.7254 26.2267 35.7364 25.252 34.5324 24.564C33.3284 23.8473 31.9954 23.489 30.5334 23.489C29.0714 23.489 27.7384 23.8473 26.5344 24.564C25.3304 25.252 24.3414 26.2267 23.5674 27.488C22.8221 28.7207 22.3921 30.1397 22.2774 31.745ZM59.6458 42.925C59.3018 43.0683 58.6711 43.3263 57.7538 43.699C56.8364 44.0717 55.7758 44.258 54.5718 44.258C53.3104 44.258 52.2068 43.8997 51.2608 43.183C50.3148 42.4663 49.8418 41.3913 49.8418 39.958V23.919H46.7458V21.597H49.8418V14.029H52.7658V21.597H57.9258V23.919H52.7658V39.141C52.8231 39.9723 53.1098 40.5887 53.6258 40.99C54.1704 41.3627 54.7868 41.549 55.4748 41.549C56.2774 41.549 56.9941 41.42 57.6248 41.162C58.2841 40.8753 58.6998 40.6747 58.8718 40.56L59.6458 42.925ZM66.0941 34.755V21.597H69.0181V34.239C69.0181 39.313 70.7524 41.85 74.2211 41.85C75.9411 41.85 77.5464 41.291 79.0371 40.173C80.5564 39.055 81.6458 37.5643 82.3051 35.701V21.597H85.2291V40.474C85.2291 41.248 85.5731 41.6493 86.2611 41.678V44C85.9171 44.0573 85.6448 44.086 85.4441 44.086C85.2721 44.086 85.0858 44.086 84.8851 44.086C84.2831 44.0287 83.7671 43.7993 83.3371 43.398C82.9358 42.9967 82.7351 42.5093 82.7351 41.936L82.6491 38.926C81.6744 40.6747 80.3414 42.0363 78.6501 43.011C76.9874 43.957 75.1814 44.43 73.2321 44.43C68.4734 44.43 66.0941 41.205 66.0941 34.755ZM106.03 24.177C104.081 24.2343 102.361 24.779 100.87 25.811C99.4084 26.843 98.3764 28.262 97.7744 30.068V44H94.8504V21.597H97.6024V26.972C98.3764 25.3953 99.394 24.1197 100.655 23.145C101.945 22.1703 103.307 21.6257 104.74 21.511C105.027 21.4823 105.271 21.468 105.471 21.468C105.672 21.468 105.858 21.4823 106.03 21.511V24.177ZM131.77 44H128.846V31.487C128.846 28.8497 128.444 26.929 127.642 25.725C126.868 24.4923 125.664 23.876 124.03 23.876C122.883 23.876 121.751 24.1627 120.633 24.736C119.515 25.2807 118.526 26.0403 117.666 27.015C116.834 27.961 116.232 29.0503 115.86 30.283V44H112.936V21.597H115.602V26.671C116.49 25.037 117.795 23.7183 119.515 22.715C121.235 21.7117 123.098 21.21 125.105 21.21C126.767 21.21 128.086 21.6113 129.061 22.414C130.035 23.188 130.723 24.306 131.125 25.768C131.555 27.2013 131.77 28.907 131.77 30.885V44Z",fill:"current"})),d||(d=l.createElement("path",{d:"M10.4531 61.641V69.424C10.4531 70.0833 10.2954 70.671 9.98011 71.187C9.66477 71.6743 9.27777 72.1187 8.81911 72.52C9.24911 72.8927 9.62178 73.337 9.93711 73.853C10.2811 74.369 10.4531 74.9567 10.4531 75.616V83.872H12.8181V89.333H5.25011C5.07811 89.333 4.86311 89.247 4.60511 89.075C4.37577 88.903 4.26111 88.559 4.26111 88.043V77.938C4.26111 77.1067 4.01744 76.4187 3.53011 75.874C3.04277 75.3007 2.51244 74.9567 1.93911 74.842V70.112C2.54111 70.112 3.07144 69.7823 3.53011 69.123C4.01744 68.4637 4.26111 67.79 4.26111 67.102V57.47C4.26111 56.954 4.37577 56.61 4.60511 56.438C4.86311 56.266 5.07811 56.18 5.25011 56.18H12.8181V61.641H10.4531ZM19.0854 83.872L30.5664 70.198H19.6874V65.425H37.7904V69.553L26.4384 83.227H38.0914V88H19.0854V83.872ZM55.1335 88.43C52.5821 88.43 50.4035 87.8997 48.5975 86.839C46.7915 85.7783 45.4011 84.3737 44.4265 82.625C43.4805 80.8763 43.0075 78.9843 43.0075 76.949C43.0075 74.7703 43.4805 72.778 44.4265 70.972C45.3725 69.166 46.7485 67.7183 48.5545 66.629C50.3605 65.5397 52.5535 64.995 55.1335 64.995C57.6848 64.995 59.8635 65.5397 61.6695 66.629C63.4755 67.7183 64.8371 69.1517 65.7545 70.929C66.7005 72.7063 67.1735 74.6127 67.1735 76.648C67.1735 77.4793 67.1161 78.2103 67.0015 78.841H50.3175C50.4321 80.3603 50.9768 81.5213 51.9515 82.324C52.9548 83.098 54.0871 83.485 55.3485 83.485C56.3518 83.485 57.3121 83.2413 58.2295 82.754C59.1468 82.2667 59.7775 81.6073 60.1215 80.776L65.9695 82.41C65.0808 84.1873 63.6905 85.635 61.7985 86.753C59.9351 87.871 57.7135 88.43 55.1335 88.43ZM50.1455 74.627H59.9495C59.8061 73.1937 59.2758 72.0613 58.3585 71.23C57.4698 70.37 56.3661 69.94 55.0475 69.94C53.7288 69.94 52.6108 70.37 51.6935 71.23C50.8048 72.09 50.2888 73.2223 50.1455 74.627ZM87.6206 71.316C85.958 71.3447 84.453 71.617 83.1056 72.133C81.7583 72.649 80.7836 73.423 80.1816 74.455V88H73.3016V65.425H79.6226V69.983C80.3966 68.4637 81.4 67.274 82.6326 66.414C83.8653 65.554 85.1553 65.1097 86.5026 65.081C87.076 65.081 87.4486 65.0953 87.6206 65.124V71.316ZM104.11 88.43C101.53 88.43 99.3375 87.8853 97.5315 86.796C95.7541 85.7067 94.3925 84.2733 93.4465 82.496C92.5005 80.7187 92.0275 78.798 92.0275 76.734C92.0275 74.6413 92.5005 72.7063 93.4465 70.929C94.3925 69.1517 95.7685 67.7183 97.5745 66.629C99.3805 65.5397 101.559 64.995 104.11 64.995C106.662 64.995 108.84 65.5397 110.646 66.629C112.452 67.7183 113.828 69.1517 114.774 70.929C115.72 72.7063 116.193 74.6413 116.193 76.734C116.193 78.798 115.72 80.7187 114.774 82.496C113.828 84.2733 112.452 85.7067 110.646 86.796C108.84 87.8853 106.662 88.43 104.11 88.43ZM99.0795 76.734C99.0795 78.4827 99.5525 79.9017 100.498 80.991C101.473 82.0803 102.677 82.625 104.11 82.625C105.515 82.625 106.69 82.0803 107.636 80.991C108.611 79.9017 109.098 78.4827 109.098 76.734C109.098 74.9853 108.611 73.5663 107.636 72.477C106.69 71.3877 105.515 70.843 104.11 70.843C102.677 70.843 101.473 71.3877 100.498 72.477C99.5525 73.5663 99.0795 74.9853 99.0795 76.734ZM122.193 61.641V56.18H129.718C129.89 56.18 130.09 56.266 130.32 56.438C130.578 56.61 130.707 56.954 130.707 57.47V67.102C130.707 67.79 130.95 68.4637 131.438 69.123C131.925 69.7823 132.47 70.112 133.072 70.112V74.842C132.498 74.9567 131.954 75.3007 131.438 75.874C130.95 76.4187 130.707 77.1067 130.707 77.938V88.043C130.707 88.559 130.592 88.903 130.363 89.075C130.133 89.247 129.918 89.333 129.718 89.333H122.193V83.872H124.558V75.616C124.558 74.9567 124.715 74.369 125.031 73.853C125.346 73.337 125.719 72.8927 126.149 72.52C125.719 72.1187 125.346 71.6743 125.031 71.187C124.715 70.671 124.558 70.0833 124.558 69.424V61.641H122.193Z",fill:"current"})))}var z,T,S,L=l.forwardRef(k),M=(t.p,t.p+"static/media/thuany.363114ef.png"),R=t.p+"static/media/langer.801188b8.jpg",Z=t.p+"static/media/kleber.56c6c9f6.png",E=t.p+"static/media/josue.9da5e724.png",B=t.p+"static/media/julio.7d9d08d1.png",P=x.b.div(z||(z=Object(p.a)(["\n  background-color: #292929;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  max-width: 30vw;\n  min-width: 20vw;\n  height: 12vh;\n  padding: 0.3rem;\n  color: white;\n  border-radius: 0.5rem;\n  box-shadow: 20px 20px 60px #101010, -20px -20px 60px #6a6a6a33;\n  font-size: 0.8rem;\n  margin: 1rem;\n\n  /* border:solid 1px white; */\n"]))),A=x.b.img(T||(T=Object(p.a)(["\n  height: 90%;\n  border-radius: 50%;\n  box-shadow:inset 0px 0px 30px rgba(0,0,0,0.1);\n  /* object-fit: contain; */\n"]))),G=x.b.aside(S||(S=Object(p.a)(["\n  max-width: 70%;\n  max-height: 90%;\n\n  strong{\n      font-size:1.1rem;\n  }\n\n  p{\n      line-height: 1.2rem;\n      margin: 0;\n      margin-top:.3rem;\n  }\n"])));function J(e){var n=e.name,t=e.description,r=e.img;return Object(g.jsxs)(P,{children:[Object(g.jsx)(A,{src:r,alt:""}),Object(g.jsxs)(G,{children:[Object(g.jsx)("strong",{children:n}),Object(g.jsx)("p",{children:t})]})]})}var q,K,F,Y,D="Tem 19 anos de idade, acad\xeamica de engenharia de software. Atua na \xe1rea de log\xedstica como auxiliar administrativa e nos momentos oportunos gosta de cantar e mergulhar nos games.",N="Tem 23 anos de idade, acad\xeamico de engenharia de software e apaixonado por novas tecnologias. Atua na \xe1rea de TI como analista de Infraestrutura e nas horas vagas gosta de jogar futebol.",U="Com 20 anos de idade, acad\xeamico de engenharia de software.Atua na \xe1rea de desenvolvimento de software e tem por hobby a m\xfasica, seriados e filmes.",Q="Com 21 anos de idade, acad\xeamico de engenharia de software. Trabalha \xe1rea de automa\xe7\xe3o e IOT e nas horas livres gosta de acampar e fotografrar",W="Com 24 anos de idade, acad\xeamico de engenharia de software e com objetivo de trabalhar na \xe1rea em que se desenvolve. Seus hobbys principais s\xe3o m\xfasicas e jogos",X=x.b.footer(q||(q=Object(p.a)(["\n  background-color: #232323;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),$=x.b.div(K||(K=Object(p.a)(["\n  width: 70%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n"])));function _(){return Object(g.jsxs)(X,{children:[Object(g.jsxs)($,{children:[Object(g.jsx)(J,{name:"Bruno Langer",description:Q,img:R}),Object(g.jsx)(J,{name:"Josu\xe9 Laurindo",description:U,img:E}),Object(g.jsx)(J,{name:"Julio Marcon",description:W,img:B}),Object(g.jsx)(J,{name:"Kleber Keuze",description:N,img:Z}),Object(g.jsx)(J,{name:"Thuany Souza",description:D,img:M})]}),Object(g.jsx)(L,{fill:"white"})]})}var ee=x.b.iframe(F||(F=Object(p.a)(["\n  border-radius: 10px;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);\n"]))),ne=x.b.div(Y||(Y=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 2rem 7rem;\n  padding: 2rem;\n  border-radius: 1rem;\n  transition: box-shadow 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 20px 20px 60px #cbcbcb, -20px -20px 60px #fdfdfd;\n  }\n"])));function te(e){var n=e.id,t=Object(l.useState)(!1),r=Object(m.a)(t,2),i=r[0],o=r[1];return Object(g.jsx)(ne,{id:n,onClick:function(){o(!i)},children:Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsxs)("div",{style:{flex:"1",marginRight:"1rem"},children:[Object(g.jsx)("h1",{children:"Rob\xf3tica na TI"}),Object(g.jsxs)("p",{children:["O grupo desenvolveu um projeto chamado Return 0, onde consiste em entrevistar ",Object(g.jsx)("strong",{children:"players do mercado"})," de TI."," "]}),Object(g.jsxs)("p",{children:["O bate papo foi realizado com ",Object(g.jsx)("strong",{children:"3 profissionais"})," da \xe1rea: Alexandre Vasques - CTO da HoloLab, Jean Grahl - Product Owner na Agapys Tecnologia e Marcelo Gramigna - Diretor da Associa\xe7\xe3o Brasileira de ",Object(g.jsx)("strong",{children:"Internet Industrial"})," "]}),Object(g.jsxs)("p",{children:["Temas como ",Object(g.jsx)("strong",{children:"Industria 4.0"}),", Rob\xf3tica na TI e Inteligencia Artificial foram os destaques da conversa que voc\xea pode conferir no ",Object(g.jsx)("strong",{children:" v\xeddeo"})," ao lado."," "]})]}),Object(g.jsx)(ee,{width:"560",height:"315",src:"https://www.youtube.com/embed/zx9zENYnuIU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})}var re,ie,oe=t.p+"static/media/return0-logo.14dd64c2.png",ae=x.b.div(re||(re=Object(p.a)(["\n  display: flex;\n  margin: 3rem 8rem;\n"]))),ce=x.b.img(ie||(ie=Object(p.a)(["\n  width:200px;\n"])));function se(e){var n=e.id;return Object(g.jsxs)(ae,{id:n,children:[Object(g.jsxs)("div",{style:{flex:"1"},children:[Object(g.jsx)("h1",{children:"Sobre o Grupo"}),Object(g.jsx)("p",{children:"Grupo composto por 5 integrantes, Bruno Langer, Josu\xe9 Laurindo, Julio Cesar, Kleber Keuer e Thuany de Souza. Inicialmente a jun\xe7\xe3o do grupo se deu por sorteio e continuou na segunda etapa do projeto."}),Object(g.jsx)("p",{children:" Os participantes tem uma m\xe9dia de idade de 21 anos e todos j\xe1 trabalham na \xe1rea de TI ou afins, mas com conhecimentos b\xe1sicos sobre programa\xe7\xe3o e desenvolvimento web. O projeto se chama Return 0 com o objetivo de n\xe3o retornar erros ao longo do processo, fazendo uma refer\xeancia a linguagem C."})]}),Object(g.jsx)("div",{style:{width:"30vw",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"1vw"},children:Object(g.jsx)(ce,{src:oe,alt:""})})]})}var de,le,be,ue,je=t.p+"static/media/circuitoSegueLinha.f9d17e8e.png",pe=x.b.div(de||(de=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 2rem 7rem;\n  padding: 2rem;\n  border-radius: 1rem;\n  transition: box-shadow 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 20px 20px 60px #cbcbcb, -20px -20px 60px #fdfdfd;\n  }\n"]))),me=x.b.img(le||(le=Object(p.a)(["\n  width: 560px;\n  border-radius: 2rem;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);\n"])));function he(e){var n=e.id,t=Object(l.useState)(!1),r=Object(m.a)(t,2),i=r[0],o=r[1];return Object(g.jsx)(pe,{id:n,onClick:function(){o(!i)},children:Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsxs)("div",{style:{flex:"1"},children:[Object(g.jsx)("h1",{children:"Circuito do Rob\xf4 Seguidor de Linha"}),Object(g.jsx)("p",{children:"Circuito Simulado com o Thinkercard"}),Object(g.jsx)("p",{children:"Para Leitura da linha, foram utilizados fotorresistores"}),Object(g.jsx)("p",{children:"Para sinaliza\xe7\xe3o do comando atualmente sendo executado pelo robo, foi utilizado um led RGB"}),Object(g.jsx)("p",{children:"O circuito utiliza um arduino como controlador do rob\xf4"})]}),Object(g.jsx)(me,{src:je,alt:"circuitoSegueLinha"})]})})}var xe,Ce=x.b.div(be||(be=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 2rem 7rem;\n  padding: 2rem;\n  border-radius: 1rem;\n  transition: box-shadow 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 20px 20px 60px #cbcbcb, -20px -20px 60px #fdfdfd;\n  }\n"]))),ge=x.b.img(ue||(ue=Object(p.a)(["\n  width: 560px;\n  border-radius: 2rem;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);\n"])));function fe(e){var n=e.id,t=Object(l.useState)(!1),r=Object(m.a)(t,2),i=r[0],o=r[1];return Object(g.jsxs)(Ce,{id:n,onClick:function(){o(!i)},children:[Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsxs)("div",{style:{flex:"1"},children:[Object(g.jsx)("h1",{children:"Programa do Rob\xf4 Seguidor de Linha"}),Object(g.jsx)("p",{children:"Circuito Simulado com o Thinkercard"}),Object(g.jsx)("p",{children:"Para Leitura da linha, foram utilizados fotorresistores"}),Object(g.jsx)("p",{children:"Para sinaliza\xe7\xe3o do comando atualmente sendo executado pelo robo, foi utilizado um led RGB"}),Object(g.jsx)("p",{children:"O circuito utiliza um arduino como controlador do rob\xf4"})]}),Object(g.jsx)(ge,{src:je,alt:"circuitoSegueLinha"})]}),i?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("p",{children:"esse texto est\xe1 escondido"})}):null]})}var Oe=x.b.div(xe||(xe=Object(p.a)(["\n  height: 89vh;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar-thumb {\n    background: #232323;\n    border-radius: 1rem;\n  }\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n"])));var ve,we=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(V,{}),Object(g.jsxs)(Oe,{id:"main-content",children:[Object(g.jsx)(se,{id:"group"}),Object(g.jsx)(te,{id:"robotica"}),Object(g.jsx)(he,{id:"circuit"}),Object(g.jsx)(fe,{id:"program"}),Object(g.jsx)(_,{})]})]})},ye=Object(x.a)(ve||(ve=Object(p.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: #E4E4E4;\n    font-family: 'Raleway', sans-serif;\n\n}\n"])));j.a.render(Object(g.jsxs)(b.a.StrictMode,{children:[Object(g.jsx)(ye,{}),Object(g.jsx)(we,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b84ab95c.chunk.js.map