"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{7092:function(A,t,e){e.d(t,{Z:function(){return l}});var g=e(1527),a=e(959),i=e(1801),r=e(5882);function l(A){let{imgList:t}=A,[e,l]=(0,a.useState)(0),n=()=>{0===e?l(t.length-1):l(e-1)},h=()=>{e===t.length-1?l(0):l(e+1)};return(0,g.jsxs)("div",{className:"relative h-60vw sm:h-asp-xl md:h-asp-2xl lg:h-asp-3xl xl:h-asp-4xl group pb-4 xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-80screen z-70 rounded-lg overflow-hidden overscroll-contain",onClick:A=>A.stopPropagation(),children:["string"==typeof t[e]?(0,g.jsx)("div",{style:{backgroundImage:"url(".concat(t[e],")")},className:"w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black bg-cover transition-bg-size"}):(0,g.jsx)("div",{style:{backgroundImage:"url(".concat(t[e][0],")")},className:"w-full h-[calc(100%-24px)] round-2xl bg-center duration-500 bg-no-repeat bg-white dark:bg-black ".concat(t[e][1])}),(0,g.jsx)("div",{className:"hidden group-hover:block top-[50%] absolute -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer",children:(0,g.jsx)(i.bsB,{size:30,onClick:n})}),(0,g.jsx)("div",{className:"hidden group-hover:block top-[50%] absolute -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer",children:(0,g.jsx)(i.QeN,{size:30,onClick:h})}),(0,g.jsx)("div",{className:"flex top-4 justify-center py-2",children:t.map((A,t)=>(0,g.jsx)("div",{className:"cursor-pointer text-2xl "+(t===e?"text-blue-500 dark:text-blue-300":"text-gray-500 dark:text-gray-300"),onClick:()=>l(t),children:(0,g.jsx)(r.FuB,{})},t))})]})}},9036:function(A,t,e){e.d(t,{ZP:function(){return n},Zy:function(){return r}});var g=e(1527),a=e(8188),i=e.n(a);let r=["C/C++","Python","Javascript","Typescript","C#","Golang","HTML","CSS","PyTorch","Tensorflow","HuggingFace","OpenCV","Flask","React","Next.js","ThreeJS","MaterialUI","Tailwind","NodeJS","ExpressJS","GraphQL","Prisma","MongoDB","MySQL","PostgreSQL","Redis","GoogleAPI","Robotic Operating System (ROS)","Docker","Git"],l={"C/C++":{src:"/_next/static/media/cpp-logo.305096d8.png",height:512,width:456,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6ElEQVR42mMAgX3nnrP5Tjg30ann7B8fID191Sk2sETO3MthQZPO3+lce/P/ztNP/3euufE/bsblO6VLb4YxACX+L9pz////////fPvxB0z3rLz4nyFy2X8G/wnnfr/9+P3vmZtv/xu0nvzXNHP//84Z2/+Wdm38zRA05dLv91///j1+8eF/Bobaf5U96//3zj/wt7xv228Gy+od/yct2P3///+/fz5/+Qo2tqJj5X8Gybb/DBIOVWEMDIV3Mivn/l+96dD/jIo5/xl0K+9YhLSFgV288+gtoNOLJzIw5P4B0RPm7QJ7BQCKrYjnmn23NAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},Python:{src:"/_next/static/media/python-logo.2dfca502.png",height:1200,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42g3Fu0oDQRgG0G9mZ8NKdPGCQUghim0QVCSWKcXKTkEEC0FLBQut9AV8iWAdrGwFUUhnY+yEFIuGLGjUxLjzX7LF4Zi107px4ZhV664gdKTsZ4xQ/bLysQ/AWBvFKkE4CeFZK/ScQ25rfDotbR6cqTOq1xDaDSXTIbEtiMdTTwfrC62GvtQ6FkInxDTXHGhQNL7f89w+LP8+FuxPWb1uu0A8kn9J0uO7hzhKNzSDGPRryEwJxHDfGd1UomwxLr5XdViYN+I74h0Z9gmYG+5itb0HYEr/wlewhxK1DPk3ZToPqs2uXZrwdmfl/hNCt2BC/jKEu8YGXwAwAi58itwQFDpoAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},HTML:{src:"/_next/static/media/html-logo.c771df7a.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4klEQVR42mOAAnMGNskZDBLqRQxiKnMYOGRnMjAwcDLAwE1vjfgrvAzNtxkYiq8zMFScZmCYcMVbKwWu4Kmn1Ilntfn/n0/v+/9l5Zz/X2e2/X/pz30cruCxBsPiF6dP/n957NCP7ycP/vi6bsH/5+4MixEKpBkmPFu7/P/LQ/t+/7h05vfXbav/P5VjmIBQwMBQ+Wzl4v/PF8389f3wrl8/Lp7+DxJDKJBiSH/aWPr/5ZGD/39ePvv/Q0/5/8fiDOlwBU/i3ZQeqzIseaLL8PyFJcPzp0YMSx7HeigxMDAwAABFLWhMRGTuNgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},CSS:{src:"/_next/static/media/css-logo.eabcc9a2.png",height:980,width:980,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5klEQVR42mNQsghiZgACAwaGGENmhjogPdEYyGYAAkUrHxYGEFAo2RHM4LuomcFyVguD5/w2htgVrYrlu4IZ4CBvy6m62Uf/T193/v+iY0/+t+x68J+l+dBpBjjI3rKof9mJ/xsOXP15/tHHnzdefPnPUH1gEVxes3T7BIaY9f+nrTv7+8bzL7+P3n77nyF31wQGOPBfW7lky/n/czZf+LXz6utfx0AKIrdUMsBBwsa07AkH/u89cfP/qYcf/5dsuPWfIW1zOlzernanEkPihiUMyZtfMDQcfs5QtmeJXckWJQYGBgYAyjhpCYw2r+MAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},Javascript:{src:"/_next/static/media/js-logo.15da7f96.png",height:1052,width:1052,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEX+51L34VD24VD03lDz3U/y3U/w21Lw21Hw21Dw20/w207v2lDv2k/v2k7u2U7u2U3k0Eziz03ey0vax0rSwEjKuEbHtkbHtkXGtUXCsUbCsUW/r0S/rkS9rUO5qUK1pUKxokGfkT2MgTqBdjh+dDhk6tgEAAAARUlEQVR42h3BhxGAIBAEwDMgvHCYBXPsv0Zn3IX+mQJkSbIyEGGustSAVG3dBQv65Djf3UI81mW4GlDivcVnglP97MagP29PA8M34FWLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},Typescript:{src:"/_next/static/media/ts-logo.37adc0f3.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42iWNsUrDUBiFvz+9MQZSDNbhFkQdCi52cNDFrm4+g4/g6nv4BD6Ag12cXVrERQS3ItiiNgiaaoNWuMnvDZ7lHM43fLJ7OpgiYtXHtwDgt/j4yoyCDYCo8U+dAn6GAotKrPG/fpUqo5kDBJaEZkOYzx2dNFTz6VS6qeFkfxVVeM1/mf2U9LZX6N99iKmAGhzstNiwCVfDF4566wzu32otQTsSvRwv6A8zxtOC4/MJD485thVjAtHAKVJ715ohy1GDvU7M6Llgq51w2E3FuIpsMw7s7VOh+beTUiFNQr24nsjZzXv2B8InXCO5V91nAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},PyTorch:{src:"/_next/static/media/pytorch-logo.1d08c983.png",height:157,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGP8leRhtegD4/cJn/+JKjD9//rrPwM3IyPjBwYGhv///v0TZvwS52p4/DvzS/cP/3k8Gf5x/fj37zMrKyvP////vwMVMgMAQ9YgG+aVZ8QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},Flask:{src:"/_next/static/media/icons8-flask-500.6990d519.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42l3NsQpAYAAA4c8fZbAom2SSUQwWE2W1K6uH8dZsf7mbbjqCxCdIRGKuCr1BhkbKI7dZHHa3idOlU2rVGhWMZjl/4k0QAHgBXo0E15IkX8QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},React:{src:"/_next/static/media/react-logo.1a684f78.png",height:1350,width:1503,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAiklEQVR42j3PywmEMBCA4fSwsIdlt4vVk1iEjwYUIogXUcFHAR5swBrsKFbi3PwHxcDHTJKZMDF2F4PQOsmI8S1HYFhcHirFl8MFM37WHcldID7dIzaKSlRXLj08w6YmeaPFSudK7PDirtECj82E5wXNMeCvBSrFh+6FOBe76DzPDCpEjgggd9cvTq75hV8BEr7sAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},"Next.js":{src:"/_next/static/media/next-logo.15501d3e.png",height:180,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42h2LMQrCQBQFp9HGQjRYiATFEOVrwEN4Bw/gUcTC1s472NvveoccY/v9zcuSYqYYGERrFmqf+S52JjjYJiFUFZapM44RffNT6JVRHWgcRfW66S60cLaOfnroP06Vsw/okynpXdxETrZKaCJ01TlNDWHWxrmvnXAxMQCAkEIBveRYtAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},MaterialUI:{src:"/_next/static/media/icons8-material-ui-480.9b471d28.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAx0lEQVR42mPQ2PqVlQEIVNa9Z+abeIOZAQiYOi6wMcCA5rZv+4CKYqFcoOTFBMb2C6uBWBqIVzAAJR8AFf0G0muAkuuBgv+B9HEgrQnEWSAFr7V2/rQBWtHHP/lmPUPLOSeggofMHReZgAqcQQqy1bd80WQAgerjdgyt518CFeQDJRWA9E8GGDA88l9YftmL/yLT76ZC3XIEqOg0yJHM2rt+MTIAgc6e3+VA/k3WrsuvGNrOTxKccouFAR0ornztKDD5phuMDwCpFV6uVGlxJgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},Tailwind:{src:"/_next/static/media/tailwind-logo.e23693e5.png",height:306,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFBAMAAACKv7BmAAAAKlBMVEUGttQFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMFtdMngU5MAAAADXRSTlMAAAQdKWVrbG2Cr935yz5qcAAAACFJREFUeNpjUIy5wcAgYLJ3OYNlAttkhqrbzowMDL1HhQBYsQctupkjQwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},NodeJS:{src:"/_next/static/media/node-logo.61c0de5b.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEWMyEuLx0qLx0uMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuLx0uMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEuMyEv6DJqWAAAAKnRSTlMAAAkMFBYcHi82Oz5HT1BSVFZYYGRlZmdoanB4fH+ChIWGiIuPkZiZm6WKielaAAAASUlEQVR42g3GWQJAIBQF0PtMmaeQkKkU+9+gvs4BUFnXeJJLEPGdwWRRPpSlxhmIT6ti9eFHa+WCJ53l1PU32OZCGhUDEJu3JvyhuwSRdTWtGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ExpressJS:{src:"/_next/static/media/icons8-express-js-480.575482f6.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42i3OoQrCUBhA4XOHYBIssqJy/jgsBlGxDMGhSQWz1WCx+CB75O2yffGkgwW9SGAykTl3xcgCK1/evPgAj27xZxUzPx78egf8xzlONjGxtc6hdu/aq29Ln25y2tm4sASnLjExGgY6pRQODvtoZAgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},MongoDB:{src:"/_next/static/media/mongodb_original_wordmark_logo_icon_146425.9a98058d.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42mMAgfA17swgOmqdl0fgckdbENt/qT1YjMF3pT0jiBacJ8oWusbthddi6zsMUOC2wJyRwX2pJVilyxJzd7+VDv/d5pr/d5hu6AISc55lwgySYAZzlpi5eiyz/u880/S/w1QjD5CY+zRTFgafHH2mIgZnsDWei62vuE4zvw9kgjVF9tiBxBFg6aF+xaX7+zVB7NqVZUxgwQALbe0AM209Hyt1g2gzK4MAFQuNxix/m2lVcQGTK2L8QArU/M219P3NdNT9rDQ83YwUXZozA5WnVcepT66I0QAAgow+Ax/mNloAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},Redis:{src:"/_next/static/media/icons8-redis-480.63b3d2b4.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mM4mZTIxAAFNxkYBO8xMCgyIAAjAwh8mzNL7ImzQ+2byZOevJ408etdBoYFz308DRlA4BwDQ8zLGdN/fT1y+P/biRP+v2yo/3+SheH/BRPD/5f1tLMZTmlp1J/R1vx/SVH2x4vZs/49KCv9d5aB4ecZfd3/JzXVyxjOamtWnNPR/H9aS/3XcQaG/ycYGP6d1df9cR4odkZbo4LhuLpaOVDR//O6Wv/PmRj9PWeg9/+8NkiDxv/DqirJDGYMDGybJSSDjqiqHD+lpf7/pIba9/1KirPnMbCqMaCDtcIiXotZuLQZoOCqgS4TAFuYYTgj877MAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},Docker:{src:"/_next/static/media/docker-logo.b7579567.png",height:1126,width:1316,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAjklEQVR42mNQmf6GiQEIVKa9FVeZ9iZOZfrbWgZ0AFQkCsSzgJIHgBhIv0kGatgIZMtCFbydD8T/gCbcA0q+AuL/QP5kIM3NADW+BCjwH6gAjIESe7BY89YHKFkKVOyHbr8TEIcBFUgAaXmgAhegQkMgtgNiawagRKUKEAMlaoAK8oG4Boj7gHi2yrQ3bgD0qllbc2kXPgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},Git:{src:"/_next/static/media/git-logo.275bed17.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXwUTPvUDLuTjHvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLvUDLwUTPvUDPvUDIFLd1NAAAAIHRSTlMAAAACAzJTYGFjbXt8h6eqrbCxu72+wcXGx8vM2+Di7dIAmHAAAABESURBVHjaDcUHDoAgEADBPcXesSDW0/8/EpJJhjTB7YiJ2u4fERi0yL4JNlVf5a9jVZ2X5jqh17pUC4J9bhszgj8QEwB7IQN6Qj1e2wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ThreeJS:{src:"/_next/static/media/threejs-logo.001fd934.png",height:1e3,width:992,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42mN4efrR0hOBm0QZYODx+g//P/9/8ebl9lvF23QP8zJcSPr8/87vz//f/H///+P/e9MYjmm8+vnp/8e/j75//n9rOQMTAwPD24sv/j/98eX/oyVQU+7PAJlybzaIvQuk4nLYx/+XekDctSAuA8NV3fsTGBj+M64BcwHAuET42FmYSQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},GraphQL:{src:"/_next/static/media/GraphQL.d428ed85.png",height:1440,width:1304,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAf0lEQVR42mN4wDCDkQEIHjBMVwfis0C+DgMyAAr2AnEWEHsCcToQTwAqYoJJegOxDZRtAcR+yDpnPWSYEQLEbA+BEkD+PGTJAKBgKhB3AHEqkB8Icwuyoix0AQMgVgHqUATSokCsAcSGQCwFkjQFYh0g9gFieyDWAGLzBwzTDQF4lUXEWyXXEgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},Prisma:{src:"/_next/static/media/prisma.4be36051.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42g3Euw0BABgGwBOsQOIVjU7PADbABKJRadGygVJtB4VJNCYQrerzJ5cT2uHmWreCZjX3djYIjRJennr2oaXaVZdw0K9NfcUyzGxqa/EzjHA0Fu4+Oha2TkZC18PByiTiD/W6JUb4jCH2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},PostgreSQL:{src:"/_next/static/media/postgresql.406370f5.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42mP4//8/++1H78puPXpX9O/ff/fvP39n3X/6oevLt1/mDCBw9d6brqjeo//nbbv+v3bB2f/Fs079n7v12v+Zm67+/vX7rxnDjhMPdjAU7f5/4NzjX9M2XPnHkLjt776zj35OXnf5P9DkcIZT1553xU849n/K+iu/gKb8i+k7+u/Ypaf/txy9//D///98DH///nMtnHnq/4yNV/+vO3DnP0Pq9j9Ldt38//Ld14v///8XYQCBvacfbTh84cl7oHveq1fv+z9ny7Uf955+2P/py09tBhD4//8/EwMQfPvxOzwS6OCVe2+dZ4CB////MwIpRihb8OC5x1cv332dwQAE1++/ZQUAv2yni9PNwFoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},GoogleAPI:{src:"/_next/static/media/google.d485abd0.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42mP418jEzMDAwPDfkYH7nx1D2D87xtB/jux8DAwMDH/tRRkZQOAfA4PlfzuGz/9sGf//tRP9/9de4tkrv1gRsOT//9xc/wqZPv8zYzn435uB7z8Dg8h/EQZLBhj4e5gr9P8+zv//DzMIgAUqr6xkqLqxRrL04lr5sgtWDP8PMoT+OCD2/+0pBrAC7aIrS9QLrxyRLLv4X7rsYgTD/6sMXN2b3D/brgs8mLo6W+j/fwYmg65t68RLLr9XqTnBzQAGa0It/db7f/ZeF/DfZ73vf8+VOd90mw5ZgeVWb3UAezNgvS+373q/MN91wWFZJxm4wda172YGANnIYKHONJvvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},OpenCV:{src:"/_next/static/media/opencv.410a633a.png",height:480,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42mNABv/EnANAmAEZ/GdwYmYAgr+qLrn/xZzv/hN3AeFssJisDwvDo4ZAdohCx93/xJ1z/sr55P6TcDvOAASPPSexMYDB/wauO93Bpb8N3bz/MzDY/2fgcWCAgdlnUg3mnE55OfFC9lQGEOj/X8Iw5b+pV+ffYseu/y4MQMnFQEWrl+8tFV583i7Htf3/i+CO3+7OXf+XuXT+W8ww+3SKyezTqVdmn874suiicalKzf8kt+6/b1y6/l1x7vxnxAAEIEVSQEUGDFAAlDRw7vwvycDAwAAA2QNdimUUEWAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},"Robotic Operating System (ROS)":{src:"/_next/static/media/ROS.a7fd77d8.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEUlMFAjME8iME4hL00gL0whL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL00hL037ySR8AAAAH3RSTlMAAAAAAQIDCA0ZGic6O0lUVlleX3h6lJWps7S+0Pr7oJou/gAAAERJREFUeNodwgsSQCAABNC1kehPEUX3v6UZbx5WT2vpF+xd1ir7Bioxz0IRpgwpoRi4Np7H2BxI8Ud8pvuSb4TODIFZf3DSAygcBhEuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},"C#":{src:"/_next/static/media/c-sharp.e8f5f039.png",height:512,width:456,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6klEQVR42mMAgbnFt9j7gq9NmpJw409f4LWJDAyr2MAS80puR8wvvX337N5X/188+vr/7P5X/1c0P7izrOZhOMPMrJv/71z68P////9/3jz/DqaP7Lr334dh6X+GVV33/vz//+/vqR2v/3f6XP7fkr/j/7rVR/6WZC35zbCu9/Hf/////9257vJ/BobQ/2kxU/9vWX/ub0X2qt8MlT47/p86fhVs3MMHT8D0pvWH/jMwFP1nYGDwCGdgiL2zavmO/7du3v+/ZuXO/za6ubcVGRLDGEAgzKaHjYFBbyIDg9tvBgadfgYGBrBXAEamh26dRgRCAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},Tensorflow:{src:"/_next/static/media/tensorflow.ac2a0685.png",height:512,width:478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyklEQVR42mOAgR/7beR/HrI99POo7cEfB23k4BI/D9sV/Dhg8+XTcqP/72eb/Aey3wEVFDN8Wmlx7es28//vZ2r+f90i/+aRncb+l1UG/9/P0f7P8CxV5/vrdpXXLwrVvr+brvn1/0s3yUeuGvGvahVzGZ5nqYm9KNXWeeyv8+z9bNP/X9abPGZABg/NDbmfxuq8eZaq9f91u/KJd1MUuZ7G6TGBJR+56gk/TdT5+aZb5d+7yarCILE3XSpMcN3PkrV3ve5Q3YFsIgD8YGCOGc+sYAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},HuggingFace:{src:"/_next/static/media/hf-logo.8e4c34a0.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyUlEQVR42k2OzQoBYRiFX0tZUC5FCktZuQblLiRJVrIhZWdPJCsrSRPTFGMxIX8rKZMNisyQGd/hi2nmqVPP23sWh7QXXPTnDHhO31j3A/aPsGoXoKRUKGkVm26RnGDZyehiDLpMuI8JTykObHtZu6DkJzeRsB8EjF0/aGgSAbOSTJwr4Gaj3AoCYV4NG+tayODOpOL2zveYh32ECQlgRID4C+MuJGEe1ShpOnzveb3BlOzJnFZEUy4Pub8XzZb+gJ8sLoDX4T7LP1v8h+QsXIT+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},MySQL:{src:"/_next/static/media/mysql.705a1d6f.png",height:266,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAcklEQVR42mNgSOhkkknsZGKImMTIAASluVUcOkntRtYpbXIMOIHPbEkGj3ni2kntsgxAE3zkkzq8GFwX8F9stzJ43s/gdrXDOOB+j7QNQ+gURZCCDOnEzkSG2N6CGaU5Se8mMUQ86WPIfNrHkPpjKoMgAAjHIrZ3iPSJAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},Golang:{src:"/_next/static/media/go-logo.2a7f3724.png",height:938,width:1062,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAZlBMVEUfvK8fvK4evK4fu68fu64fvK8fvK4evK4fu68fvK8fu68fu64fvK8fu64fvK8fvK4fu64fvK8fu68fu68fu68fvK8fvK4fvK8fu68fvK8fu68fvK8fvK8fu68fu64fvK8fvK8fu645dEOeAAAAInRSTlMAAAAAAAEBAQECAgIDAwQEBggLECo3Rk9Xb3d7j5CUmqjrom2MfAAAAEBJREFUeNodyscRgDAMAMETAoMJIieTTP9NMsO+l0QLa2oDSVUUIB/GsGy70U13fK9nxTPHcB496hHhX5Vrs9J9U4ICprz+EPsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}};function n(A){let{tech:t,bgColor:e="bg-gray-200 dark:bg-gray-600"}=A;return(0,g.jsxs)("div",{className:"flex flex-col items-center",children:[(0,g.jsx)("div",{className:"w-full h-fit p-3 sm:p-4 rounded-lg ".concat(e),children:(0,g.jsx)(i(),{src:l[t],alt:t,className:"w-full aspect-square object-contain",priority:!0})}),(0,g.jsx)("p",{className:"text-sm md:text-base font-semibold text-center pb-4 pt-1",children:t})]})}},4454:function(A,t,e){e.d(t,{w_:function(){return n}});var g=e(959),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=g.createContext&&g.createContext(a),r=function(){return(r=Object.assign||function(A){for(var t,e=1,g=arguments.length;e<g;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(A[a]=t[a]);return A}).apply(this,arguments)},l=function(A,t){var e={};for(var g in A)Object.prototype.hasOwnProperty.call(A,g)&&0>t.indexOf(g)&&(e[g]=A[g]);if(null!=A&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,g=Object.getOwnPropertySymbols(A);a<g.length;a++)0>t.indexOf(g[a])&&Object.prototype.propertyIsEnumerable.call(A,g[a])&&(e[g[a]]=A[g[a]]);return e};function n(A){return function(t){return g.createElement(h,r({attr:r({},A.attr)},t),function A(t){return t&&t.map(function(t,e){return g.createElement(t.tag,r({key:e},t.attr),A(t.child))})}(A.child))}}function h(A){var t=function(t){var e,a=A.attr,i=A.size,n=A.title,h=l(A,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(e=t.className),A.className&&(e=(e?e+" ":"")+A.className),g.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,h,{className:e,style:r(r({color:A.color||t.color},t.style),A.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),n&&g.createElement("title",null,n),A.children)};return void 0!==i?g.createElement(i.Consumer,null,function(A){return t(A)}):t(a)}}}]);