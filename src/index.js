import './style.scss'

const defaultRender = (data, size) => {
  return `
    <svg class="emoji-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="font-size: ${size}px;">
      <circle class="emoji-facial" cx="32" cy="32" r="30" fill="#fff" stroke="#999" stroke-width="3" />
      <g class="emoji-facial-features" fill="#999">
        ${data}
      </g>
    </svg>
  `
}

const defaultEmojis = [
  `
    <circle cx="20.5" cy="26.6" r="5"/>
    <circle cx="43.5" cy="26.6" r="5"/>
    <path d="M23 47.6c5.8-4.8 12.2-4.8 18 0 .7.6 1.3-.4.8-1.3-1.8-3.4-5.3-6.5-9.8-6.5s-8.1 3.1-9.8 6.5c-.5.9.1 1.9.8 1.3"/>
  `,
  `
    <circle cx="32" cy="45.1" r="7"/>
    <circle cx="20.2" cy="25" r="4.5"/>
    <circle cx="42.7" cy="25" r="4.5"/>
  `,
  `
    <circle cx="20.5" cy="26.6" r="5"/>
    <circle cx="43.5" cy="26.6" r="5"/>
    <path d="M44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"/>
  `,
  `
    <path d="M49 38c0-.8-.5-1.8-1.8-2.1-3.5-.7-8.6-1.3-15.2-1.3s-11.7.7-15.2 1.3c-1.3.3-1.8 1.3-1.8 2.1 0 7.3 5.6 14.6 17 14.6S49 45.3 49 38"/>
    <path d="M28.5 26.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.6.5 1.5-.4 1.3-.9"/>
    <path d="M50.4 26.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7 2.3 0 4.4.8 6.2 2.7.5.5 1.5-.4 1.3-.9"/>
    <path fill="#fff" d="M44.7 38.3c-2.2-.4-6.8-1-12.7-1-5.9 0-10.5.6-12.7 1-1.3.2-1.4.7-1.3 1.5.1.4.1 1 .3 1.6.1.6.3.8 1.3.8h24.9c1 0 1.1-.2 1.3-.8.1-.6.2-1.1.3-1.6 0-.8-.1-1.3-1.4-1.5"/>
  `
]

export default function (el, options = {}) {
  let {
    emojis = defaultEmojis,
    size = 20,
    render = defaultRender
  } = options
  const $el = typeof el === "string" ? document.querySelector(el) : el
  // Create Template
  $el.classList.add("emoji-vote")
  Array.prototype.slice.call($el.querySelectorAll("label")).forEach((label, i) => {
    label.insertAdjacentHTML('afterbegin', render(emojis[i], size))
  })
}
