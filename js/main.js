let aboutBox = null;
let contactBox = null;

const tabWidth = 400;
const tabHeight = 450;
const tabGap = 5;
const topMargin = 100;

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
  if (aboutBox && !aboutBox.closed) {
    aboutBox.focus(); // bring it to front
    return;
  }

  aboutBox = new WinBox({
    title: 'About Me',
    width: `${tabWidth}px`,
    height: `${tabHeight}px`,
    top: `${topMargin}px`,
    left: '50px',
    mount: aboutContent,
    onfocus() {
      this.setBackground('#00aa00');
    },
    onblur() {
      this.setBackground('#777');
    },
    onclose() {
      aboutBox = null;
    },
  });
});

contact.addEventListener('click', () => {
  if (contactBox && !contactBox.closed) {
    contactBox.focus();
    return;
  }

  contactBox = new WinBox({
    title: 'Contact Me',
    width: `${tabWidth}px`,
    height: `${tabHeight}px`,
    top: `${topMargin}px`,
    left: '820px',
    mount: contactContent,
    background: '#00aa00',
    onfocus() {
      this.setBackground('#00aa00');
    },
    onblur() {
      this.setBackground('#777');
    },
    onclose() {
      contactBox = null;
    },
  });
});
