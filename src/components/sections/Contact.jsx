import { useEffect } from 'react';
import { contactHtml } from '../../data/sectionHtml';
import SectionRenderer from '../common/SectionRenderer';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');
    const qEl = document.getElementById('captcha-question');
    const aEl = document.getElementById('captcha-answer');
    const refreshBtn = document.getElementById('captcha-refresh');
    const tokenEl = document.getElementById('captcha-token');

    if (!form || !responseDiv || !qEl || !aEl || !refreshBtn || !tokenEl) return undefined;

    let correct = null;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const newCaptcha = () => {
      const a = rand(2, 9);
      const b = rand(1, 9);
      const ops = ['+', '-', 'x'];
      const op = ops[rand(0, ops.length - 1)];

      correct = op === '+' ? a + b : op === '-' ? a - b : a * b;
      qEl.textContent = `What is ${a} ${op} ${b}?`;
      aEl.value = '';
      tokenEl.value = String(correct);
    };

    const showMsg = (html) => {
      responseDiv.style.display = 'block';
      responseDiv.innerHTML = html;
    };

    const handleRefresh = () => newCaptcha();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const honeypot = form.querySelector('input[name="honeypot_url"]');
      if (honeypot && honeypot.value.trim() !== '') {
        showMsg('<p class="text-danger fw-bold">Spam detected.</p>');
        return;
      }

      const userAns = (aEl.value || '').trim();
      if (userAns === '' || Number(userAns) !== Number(correct)) {
        showMsg('<p class="text-danger fw-bold">Captcha incorrect. Please try again.</p>');
        newCaptcha();
        aEl.focus();
        return;
      }

      showMsg('<p class="text-info fw-bold">Sending your message... Please wait.</p>');

      try {
        const formData = new FormData(form);
        const res = await fetch('/send-contact.php', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        if (data.success) {
          showMsg('<p class="text-success fw-bold">Message sent successfully! Thank you.</p>');
          form.reset();
          newCaptcha();
          return;
        }

        showMsg(`<p class="text-danger fw-bold">${data.message || 'Failed to send message. Please try again.'}</p>`);
      } catch (error) {
        showMsg('<p class="text-danger fw-bold">Backend is not connected yet. Frontend form and captcha are working.</p>');
      }

      newCaptcha();
    };

    newCaptcha();
    refreshBtn.addEventListener('click', handleRefresh);
    form.addEventListener('submit', handleSubmit);

    return () => {
      refreshBtn.removeEventListener('click', handleRefresh);
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return <SectionRenderer html={contactHtml} />;
};

export default Contact;
