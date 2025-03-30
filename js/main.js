customElements.define('dollop-episode',
    class extends HTMLElement {
      constructor() {
        super();
  
        const template = document.getElementById('dollop-template');
        const templateContent = template.content;
  
        this.attachShadow({ mode: 'open' }).appendChild(
          templateContent.cloneNode(true)
        );
  
        this.shadowRoot.querySelector('a').href= this.dataset.href;
      }
    }
  );
  
  const slottedSpan = document.querySelector('dollop-episode span');
  
  console.log(slottedSpan.assignedSlot);
  console.log(slottedSpan.slot);
  