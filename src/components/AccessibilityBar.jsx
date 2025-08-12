import React, { useEffect, useRef } from 'react';
import '../styles/asb.css';
import '../styles/default.css';
import './AccessibilityBar.css'

const AccessibilityBar = () => {
  const accessKey = 4;
  const htmlRef = useRef(document.documentElement);

  const btns = [
    { key: "contrast", icon: ["fas", "fa-adjust"], text: "Alto contraste" },
    { key: "dark", icon: ["fas", "fa-moon"], text: "Modo escuro" },
    { key: "incFont", icon: "A+", text: "Aumentar fonte" },
    { key: "oriFont", icon: "Aa", text: "Fonte original" },
    { key: "decFont", icon: "A-", text: "Diminuir fonte" },
    { key: "reset", icon: ["fas", "fa-redo-alt"], text: "Redefinir" },
  ];

  useEffect(() => {
    const html = htmlRef.current;
    const body = document.body;

    const FontSize = {
      storage: 'fontSizeState',
      currentState: null,
      get() {
        return sessionStorage.getItem(this.storage) || '100';
      },
      set(value) {
        sessionStorage.setItem(this.storage, value);
        this.currentState = value;
        html.style.fontSize = (parseFloat(value) / 100) * 16 + 'px';
      },
      inc() {
        if (parseFloat(this.currentState) < 200) this.set(parseFloat(this.currentState) + 20);
        else alert('Limite atingido!');
      },
      dec() {
        if (parseFloat(this.currentState) > 40) this.set(parseFloat(this.currentState) - 20);
        else alert('Limite atingido!');
      },
      reset() {
        this.set(100);
      },
      init() {
        this.currentState = this.get();
        this.set(this.currentState);
      },
    };

    const Contrast = {
      storage: 'contrastState',
      currentState: null,
      get() {
        return sessionStorage.getItem(this.storage) === 'true';
      },
      set(value) {
        sessionStorage.setItem(this.storage, value);
        this.currentState = value;
        body.classList.toggle('contrast', value);
      },
      toggle() {
        this.set(!this.currentState);
        if (Dark.currentState) Dark.set(false);
      },
      init() {
        this.set(this.get());
      },
    };

    const Dark = {
      storage: 'darkState',
      currentState: null,
      get() {
        return sessionStorage.getItem(this.storage) === 'true';
      },
      set(value) {
        sessionStorage.setItem(this.storage, value);
        this.currentState = value;
        body.classList.toggle('darkmode', value);
      },
      toggle() {
        this.set(!this.currentState);
        if (Contrast.currentState) Contrast.set(false);
      },
      init() {
        this.set(this.get());
      },
    };

    FontSize.init();
    Contrast.init();
    Dark.init();

    const toggle = action => {
      switch (action) {
        case 'contrast':
          Contrast.toggle();
          break;
        case 'dark':
          Dark.toggle();
          break;
        case 'incFont':
          FontSize.inc();
          break;
        case 'decFont':
          FontSize.dec();
          break;
        case 'oriFont':
          FontSize.reset();
          break;
        case 'reset':
          Contrast.set(false);
          Dark.set(false);
          FontSize.reset();
          break;
        default:
          break;
      }
      document.getElementById('accessibilityBar').classList.remove('active');
    };

    document.querySelectorAll('.setAccessibility').forEach(btn => {
      btn.addEventListener('click', () => toggle(btn.dataset.accessibility));
    });

    return () => { };
  }, []);

  return (
    <div id="accessibilityBar">
      <button
        id="universalAccessBtn"
        type="button"
        accessKey={accessKey}
        onClick={() => {
          document.getElementById('accessibilityBar').classList.toggle('active');
        }}
      >
        <i className="fas fa-universal-access" />
        {/* <span className='tag-acessibilidade'>Menu de acessibilidade</span> */}
      </button>

      {btns.map(btn => (
        <button
          key={btn.key}
          type="button"
          className="setAccessibility"
          data-accessibility={btn.key}
        >
          <strong>
            {Array.isArray(btn.icon) ? (
              <i className={btn.icon.join(' ')}></i>
            ) : (
              btn.icon
            )}
          </strong>
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default AccessibilityBar;
