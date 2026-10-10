/* ============================================
   AURUM — скрипты сайта
   ============================================ */

// ---------- Мобильное меню ----------
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('navMenu');
    if (burger && menu) {
        burger.addEventListener('click', () => menu.classList.toggle('open'));
    }
});

// ---------- Обработка формы записи ----------
function submitForm(event){
    event.preventDefault();
    const form = event.target;

    const data = {
        name:      form.querySelector('#name').value.trim(),
        phone:     form.querySelector('#phone').value.trim(),
        email:     form.querySelector('#email')?.value.trim() || '',
        direction: form.querySelector('input[name="direction"]:checked')?.value || '',
        format:    form.querySelector('input[name="format"]:checked')?.value || '',
        age:       form.querySelector('#age')?.value || '',
        time:      form.querySelector('#time')?.value || '',
        comment:   form.querySelector('#comment')?.value.trim() || ''
    };

    console.log('Заявка на запись:', data);

    /* ---------------------------------------------------
       ЗДЕСЬ ПОЗЖЕ БУДУТ ЦЕЛИ АНАЛИТИКИ:

       // Рейтинг Mail.ru — цель №1 «Отправка формы записи»
       if (window._tmr) {
         _tmr.push({ type: 'reachGoal', id: ID_СЧЁТЧИКА, goal: 'BOOKING_FORM_SENT' });
       }

       // LiveInternet — цель «Запись» (если настроена)
       // if (window._rlvi) { ... }

       // Рамблер/Топ100 — если понадобится JS-цель
       // if (window._top100) { ... }
       --------------------------------------------------- */

    // Показываем сообщение об успехе
    const success = document.getElementById('formSuccess');
    if (success) {
        success.style.display = 'block';
        form.style.display = 'none';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}