window.sendBinomEvent = function () {};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let message = form.querySelector('[role=status]');
      if (!message) { message = document.createElement('p'); message.setAttribute('role', 'status'); form.append(message); }
      message.textContent = 'โหมดตัวอย่าง: ไม่ได้ส่งข้อมูล';
    });
  });
});
