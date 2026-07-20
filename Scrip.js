
    // ---------- Datos de los planes ----------
    const plansData = [
      //  { name: "Plan Básico", price: "$100 UYU", features: ["2 GB de datos", "15 minutos de voz", "20 SMS"], validity: "35 días", badge: "Más económico", icon: "📱" },
      //  { name: "Plan Medio", price: "$150 UYU", features: ["4 GB de datos", "35 minutos de voz", "40 SMS"], validity: "35 días", badge: "Más vendido", icon: "🔥" },
        { name: "Plan Basico", price: "$100 UYU", features: ["6 GB de datos", "60 minutos de voz", "70 SMS"], validity: "35 días", badge: "Recomendado", icon: "⭐" },
        { name: "Plan Epico", price: "$200 UYU", features: ["12 GB de datos", "120 minutos de voz","140 SMS"], validity: "35 días", badge: "Más Popular", icon: "⭐ " },
      { name: "Plan Legendario", price: "$300 UYU", features: ["18 GB de datos", "180 minutos de voz","210 SMS"], validity: "35 días", badge: "Más Popular", icon: "⭐ " },
//      { name: "Promo Internacional", price: "$1500 UYU", features: ["6000 de saldo principal", "Internet ilimitado de 12pm a 7am"], validity: "30 días", badge: "Más Popular", icon: "⭐ " },

     
     
      //  { name: "Plan Saldo ", price: "$1500 UYU", features: [" GB de datos", "160 minutos de voz","180 SMS"], validity: "35 días", badge: "Más Popular", icon: "📡" },
        
     //   { name: "Voz y SMS", price: "$105 CUP", features: ["15 minutos de voz", "20 SMS"], validity: "35 días", badge: "Llamadas", icon: "📞" },
      //  { name: "Nauta Hogar", price: "$250 CUP", features: ["30 horas navegación", "1 Mbps"], validity: "Mensual", badge: "Internet fijo", icon: "🏠" }
    ];

    // Renderizar planes
    const plansGrid = document.getElementById('plansGrid');
    function renderPlans() {
        plansGrid.innerHTML = '';
        plansData.forEach(plan => {
            const card = document.createElement('div');
            card.className = 'plan-card';
            let featuresHtml = '';
            plan.features.forEach(f => {
                featuresHtml += `<div class="plan-detail-item"><div class="plan-detail-icon">✓</div><div>${f}</div></div>`;
            });
            card.innerHTML = `
                <div class="plan-header">
                    <div class="plan-name">${plan.name}</div>
                    <div class="plan-price">${plan.price}</div>
                </div>
                <div class="plan-details">
                    ${featuresHtml}
                    <div class="plan-detail-item"><div class="plan-detail-icon">📅</div><div>Vigencia: ${plan.validity}</div></div>
                    ${plan.badge ? `<span class="plan-badge">${plan.badge}</span>` : ''}
                    <button class="plan-wa-btn" data-plan='${JSON.stringify(plan)}'>📲 Solicitar este plan</button>
                </div>
            `;
            plansGrid.appendChild(card);
        });

        // Eventos para los botones de cada plan
        document.querySelectorAll('.plan-wa-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const plan = JSON.parse(btn.getAttribute('data-plan'));
                sendPlanByWhatsApp(plan);
            });
        });
    }

    function sendPlanByWhatsApp(plan) {
        let phone = document.getElementById('phoneNumber').value.trim();
        if (!phone) {
            alert('Por favor, ingresa el número de teléfono en Cuba en el formulario de arriba.');
            return;
        }
        if (!phone.match(/^(5\d{7}|63\d{6})$/)) {
            alert('El número debe ser de Cubacel válido de 8 dígitos que comience con 5. Ejemplo: 51234567');
            return;
        }
        let featuresText = plan.features.join(', ');
        let message = `Hola, quiero solicitar el plan *${plan.name}* para recarga a Cuba.%0A%0A`;
        message += `📱 *Número a recargar:* ${phone}%0A`;
        message += `💰 *Precio del plan:* ${plan.price}%0A`;
        message += `📋 *Beneficios:* ${featuresText}%0A`;
        message += `⏳ *Vigencia:* ${plan.validity}%0A%0A`;
        message += `Quedo atento a los pasos de pago.`;
        const whatsappNumber = '5355462081'; // Cambia por tu número
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }

    // ---------- Lógica del formulario de montos ----------
  //  let selectedAmount = 250;
  //  const amountOptions = document.querySelectorAll('.amount-btn');
 //   const otherAmountBtn = document.getElementById('otherAmountBtn');
 //   const otherAmountInput = document.getElementById('otherAmountInput');
 //   const customAmount = document.getElementById('customAmount');

 //  amountOptions.forEach(btn => {
 //       btn.addEventListener('click', () => {
  //          if (btn.id === 'otherAmountBtn') {
 //               otherAmountInput.style.display = 'block';
   //             amountOptions.forEach(b => b.classList.remove('selected'));
    //            btn.classList.add('selected');
      //          selectedAmount = null;
   //        } else {
    //            otherAmountInput.style.display = 'none';
    //            amountOptions.forEach(b => b.classList.remove('selected'));
    //            btn.classList.add('selected');
    //            selectedAmount = parseInt(btn.getAttribute('data-amount'));
    //        }
  //      });
//    });
  //  document.querySelector('.amount-btn[data-amount="250"]').classList.add('selected');
  //  customAmount.addEventListener('input', () => {
  //      if (customAmount.value) selectedAmount = parseInt(customAmount.value);
//    });

    // Envío del formulario (monto personal)
//    document.getElementById('submitOrderBtn').addEventListener('click', () => {
    //    let phone = document.getElementById('phoneNumber').value.trim();
   //     let amount = selectedAmount || (customAmount.value ? parseInt(customAmount.value) : null);
     //   if (!phone) { alert('Ingresa el número de teléfono.'); return; }
  //      if (!phone.match(/^5\d{7}$/)) { alert('Número inválido (debe comenzar con 5 y tener 8 dígitos).'); return; }
  //      if (!amount) { alert('Selecciona o ingresa un monto.'); return; }
  //      let message = `Hola, quiero solicitar una recarga a Cuba.%0A%0A📱 *Número a recargar:* ${phone}%0A💰 *Monto:* $${amount} UYU%0A%0AQuedo atento a los pasos de pago.`;
 //       window.open(`https://wa.me/5355462081?text=${message}`, '_blank');
  //  });

    // Botón del hero
   // document.getElementById('heroWhatsAppBtn').addEventListener('click', (e) => {
    //    e.preventDefault();
    //    let phone = document.getElementById('phoneNumber').value.trim();
    //    let amount = selectedAmount || (customAmount.value ? parseInt(customAmount.value) : 250);
    //    let message = '';
      //  if (phone && phone.match(/^5\d{7}$/)) {
   //         message = `Hola, quiero solicitar una recarga a Cuba.%0A%0A📱 *Número a recargar:* ${phone}%0A💰 *Monto:* $${amount} CUP%0A%0AQuedo atento a los pasos de pago.`;
    //    } else {
       //     message = 'Hola, quiero solicitar información sobre recargas a Cuba.';
     //   }
    //    window.open(`https://wa.me/5355462081?text=${message}`, '_blank');
 //   });

    // Menú hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });

    // Scroll suave al hacer clic en el menú
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // FAQ toggle
   const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = question.querySelector('.faq-icon');
            if (icon) icon.textContent = item.classList.contains('active') ? '−' : '+';
        });
    });    

 const phoneInput = document.getElementById('phoneNumber');
        const messageDiv = document.getElementById('validationMessage');

        // Función que valida el formato: 8 dígitos, empieza con 5 o 6
        function validatePhoneNumber(value) {
            // Expresión regular: ^ inicio, [56] primer dígito 5 o 6, \d{7} siete dígitos más, $ fin.
            const regex = /^[56]\d{7}$/;
            return regex.test(value);
        }
    // Función que actualiza el color y el mensaje
        function updateValidation() {
            const value = phoneInput.value;
            const isValid = validatePhoneNumber(value);

            if (isValid) {
                phoneInput.classList.add('valid');
                phoneInput.classList.remove('invalid');
                messageDiv.textContent = '✅ Número correcto';
                messageDiv.style.color = '#28a745';
            } else {
                phoneInput.classList.add('invalid');
                phoneInput.classList.remove('valid');
                if (value.length === 0) {
                    
                    messageDiv.textContent = '⏳ Esperando número...';
                } else {
                    messageDiv.textContent = '✗ Debe tener 8 dígitos y empezar con 5 o 6';
                    messageDiv.style.color = '#dc3545';
                }
            }
        }

        // Escuchar eventos: cuando el usuario escribe o pega contenido
        phoneInput.addEventListener('input', updateValidation);
        // También validar al perder el foco (para casos como autocompletado)
        phoneInput.addEventListener('blur', updateValidation);

        // Validación inicial (por si el campo ya tiene valor al cargar)
        updateValidation();

    renderPlans();
