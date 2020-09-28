   $(document).ready(() => {
       escondeForm();
       respostas();
   })

   var click = true;
   var click2 = true;

   arrayComentario = [{
       title: 'Assunto da Pergunta aparece aqui',
       autor: 'Carlos Henrique Santos',
       description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
       reply: [{
               autor: 'Adriano da silva',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: 'Autor'
           },
           {
               autor: 'Carlos Henrique Santos',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: ''
           },
           {
               autor: 'Adriano da silva',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: 'Coautor'
           },
       ]
   }, {
       title: 'Assunto da Pergunta aparece aqui',
       autor: 'Carlos Henrique Santos',
       description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
       reply: [{
               autor: 'Adriano da silva',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: 'Autor'
           },
           {
               autor: 'Carlos Henrique Santos',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: ''
           },
           {
               autor: 'Adriano da silva',
               description: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo',
               owner: 'Coautor'
           },
       ]
   }]

   const escondeForm = () => {
       $("#new-topicos").css("display", "none")
           // $("#container-discussao-body").css("display", "none")

   }
   const escondePadrao = () => {
       $("#padrao").css("display", "none")
       $("#new-topicos").css("display", "block")
       $(".topico-enviado").css("display", "none")
           // $("#container-discussao-body").css("display", "none")

   }


   const novoComentario = () => {
       $("#new-topicos").css("display", "none")
           //    $(".quarta-sessao").append(`<div class="discussao-topicos"><div class="discussao-topicos-header">${autor}</div><div class="assunto">${text}</div><div class="topicos-footer"></div></div>`);
       $(".container-discussao-body").append(`<div class="topico-enviado"><div class="topico-enviado-header">Seu tópico foi enviado com sucesso! :D</div><div class="topico-enviado-body">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</div><div class="topico-enviado-footer">Descubra outros trabalhos!</div><button type="button" onclick="escondePadrao()" class="btn">Enviar</button></div>`);

       var autor = $("#assunto").val()
       var text = $("#comentario").val()
       $("#novoComentario").addClass("discussao-topicos")
       $("#novoComentario").append(`<div class="discussao-topicos-header">${autor}</div><div class="assunto">${text}</div><div class="topicos-footer"></div>`);
       $("#novoComentario").append(`<div class="feedback">
       <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M20.1671 7.33594C20.3494 7.51823 20.4406 7.73958 20.4406 8C20.4406 8.26042 20.3494 8.48177 20.1671 8.66406L8.60461 20.2266C8.42232 20.4089 8.20097 20.5 7.94055 20.5C7.68014 20.5 7.45878 20.4089 7.27649 20.2266L0.713989 13.6641C0.531698 13.4818 0.440552 13.2604 0.440552 13C0.440552 12.7396 0.531698 12.5182 0.713989 12.3359L2.27649 10.7734C2.45878 10.5911 2.68014 10.5 2.94055 10.5C3.20097 10.5 3.42232 10.5911 3.60461 10.7734L7.94055 15.1484L17.3156 5.77344C17.4718 5.59115 17.6801 5.5 17.9406 5.5C18.201 5.5 18.4223 5.59115 18.6046 5.77344L20.1671 7.33594ZM7.51086 11.4766L3.13586 7.10156C2.82336 6.78906 2.82336 6.48958 3.13586 6.20312L4.89368 4.44531C5.02389 4.3151 5.16711 4.25 5.32336 4.25C5.50566 4.25 5.66191 4.3151 5.79211 4.44531L7.94055 6.59375L13.8781 0.695312C13.9822 0.565104 14.1124 0.5 14.2687 0.5C14.451 0.5 14.6072 0.565104 14.7374 0.695312L16.4952 2.45312C16.8077 2.73958 16.8077 3.03906 16.4952 3.35156L8.37024 11.4766C8.26607 11.6068 8.12284 11.6719 7.94055 11.6719C7.75826 11.6719 7.61503 11.6068 7.51086 11.4766Z" fill="#707070"/>
           </svg>
       <span>
               Aguardando feedback dos Autores
           </span>
       <span style="color: orange; text-decoration: underline;">
               Editar tópico
           </span>

   </div>`)

       //  $(".quarta-sessao").append(`<div class="quarta-sessao">oi</div>`)
   }

   const topicoEnviado = () => {
       $("#new-topicos").css("display", "none")
       $(".quarta-sessao").append(`<div class="discussao-topicos"><div class="discussao-topicos-header">${autor}</div><div class="assunto">${text}</div><div class="topicos-footer"></div></div>`);
       $(".container-discussao").append(`<div class="topico-enviado"><div class="topico-enviado-header">Seu tópico foi enviado com sucesso! :D</div><div class="topico-enviado-body">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</div><div class="topico-enviado-footer">Descubra outros trabalhos!</div><button type="button" onclick="novoComentario()" class="btn-padrao">Enviar</button></div>`);

   }

   const respostas = () => {
       console.log(arrayComentario)
       arrayComentario.map((x, i) => {
           if (i === 0) {
               $("#primeira-resposta").append(`<div class="discussao-topicos-header">
    <span>${x.title}</span>
</div>
<span>${x.autor}</span>
<span>${x.description}</span>
<div class="topicos-footer">
    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="16" r="2" fill="#ED7839"/>
            <circle cx="2" cy="9" r="2" fill="#ED7839"/>
            <circle cx="2" cy="2" r="2" fill="#ED7839"/>
            </svg>
    <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V19C2 20.1046 2.89543 21 4 21H27C28.1046 21 29 20.1046 29 19V4C29 2.89543 28.1046 2 27 2H4Z" fill="#ED7839"/>
                </g>
                <path d="M15 17.4414L14.1523 16.6758C13.1862 15.8008 12.4844 15.1536 12.0469 14.7344C11.6094 14.3151 11.1172 13.7956 10.5703 13.1758C10.0417 12.556 9.67708 12 9.47656 11.5078C9.27604 10.9974 9.17578 10.4779 9.17578 9.94922C9.17578 9.05599 9.47656 8.29948 10.0781 7.67969C10.6979 7.0599 11.4635 6.75 12.375 6.75C13.4323 6.75 14.3073 7.16016 15 7.98047C15.6927 7.16016 16.5677 6.75 17.625 6.75C18.5365 6.75 19.293 7.0599 19.8945 7.67969C20.5143 8.29948 20.8242 9.05599 20.8242 9.94922C20.8242 10.6602 20.5872 11.3984 20.1133 12.1641C19.6393 12.9297 19.1198 13.5951 18.5547 14.1602C18.0078 14.7253 17.1055 15.5729 15.8477 16.7031L15 17.4414Z" fill="white"/>
                <defs>
                <filter id="filter0_dd" x="0" y="0" width="31" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                </filter>
                </defs>
            <span id="info">${x.reply.length} likes</span>
            <span id="info">${x.reply.length} respostas</span>
</div>`)
           } else {
               $("#segunda-resposta").append(`<div class="discussao-topicos-header">
            <span>${x.title}</span>
        </div>
        <span>${x.autor}</span>
        <span>${x.description}</span>
        <div class="topicos-footer">
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="16" r="2" fill="#ED7839"/>
                    <circle cx="2" cy="9" r="2" fill="#ED7839"/>
                    <circle cx="2" cy="2" r="2" fill="#ED7839"/>
                    </svg>
            <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V19C2 20.1046 2.89543 21 4 21H27C28.1046 21 29 20.1046 29 19V4C29 2.89543 28.1046 2 27 2H4Z" fill="#ED7839"/>
                        </g>
                        <path d="M15 17.4414L14.1523 16.6758C13.1862 15.8008 12.4844 15.1536 12.0469 14.7344C11.6094 14.3151 11.1172 13.7956 10.5703 13.1758C10.0417 12.556 9.67708 12 9.47656 11.5078C9.27604 10.9974 9.17578 10.4779 9.17578 9.94922C9.17578 9.05599 9.47656 8.29948 10.0781 7.67969C10.6979 7.0599 11.4635 6.75 12.375 6.75C13.4323 6.75 14.3073 7.16016 15 7.98047C15.6927 7.16016 16.5677 6.75 17.625 6.75C18.5365 6.75 19.293 7.0599 19.8945 7.67969C20.5143 8.29948 20.8242 9.05599 20.8242 9.94922C20.8242 10.6602 20.5872 11.3984 20.1133 12.1641C19.6393 12.9297 19.1198 13.5951 18.5547 14.1602C18.0078 14.7253 17.1055 15.5729 15.8477 16.7031L15 17.4414Z" fill="white"/>
                        <defs>
                        <filter id="filter0_dd" x="0" y="0" width="31" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        </defs>
            <span id="info">${x.reply.length} likes</span>
            <span id="info">${x.reply.length} respostas</span>
        </div>`)
           }
       })

   }


   const exibirResposta = (ind) => {


       arrayComentario[ind].reply.map(x => {
           if (ind === 0) {
               if (click) {
                   $("#primeira-resposta").append(`<div class="card-resposta" id="resp1"><div class="card-resposta-header">${x.autor}<div class="card-imgs"><span style="color: orange;">${x.owner}</span><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z" fill="#ED7839"/>
                       </svg></div></div><div class="card-resposta-descricao">${x.description}</div></div>`)
               } else {
                   $("#resp1").remove();
               }
           } else {
               if (click2) {
                   $("#segunda-resposta").append(`<div class="card-resposta" id="resp2"><div class="card-resposta-header">${x.autor}<div class="card-imgs"><span style="color: orange;">${x.owner}</span><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z" fill="#ED7839"/>
                 </svg></div></div><div class="card-resposta-descricao">${x.description}</div></div>`)
               } else {
                   $("#resp2").remove();
               }

           }
       })
       click = !click
       click2 = !click2

   }




   // $("#new-topicos").append(`<div class="container-favoritos"><div class="container-titulo-fav">${fav[i].titulo}</div><div class="container-img-fav">${fav[i].img}</div></div>`)