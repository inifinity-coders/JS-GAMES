export class Card extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['id', 'src', 'name']
    }
    
    connectedCallback(){
        this.attachShadow({mode: 'open'})
        this.render()
    }

    attributeChangedCallback(_:string, oldValue:string, newValue:string) {
        if(oldValue !== newValue) {
            this.render
        }
    }

    preloadImage(url:string){
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = url
        })
    }

    async render(){
            
            const id = this.getAttribute('id')
            const src = this.getAttribute('src')
            const name = this.getAttribute('name')

            src&&await this.preloadImage(src)

            this.shadowRoot!.innerHTML = `
                <style>
                .card{
                    background-color: transparent;
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                }
                .card img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                .card h2 {
                    color:white
                }
            </style>
            <div class="card" id="${id}">
                <img id='image' src="${src}" alt="card-image">
                <h2 id="name">${name}</h2>
            </div>
            ` 

    }



}

customElements.define('lt-card', Card)