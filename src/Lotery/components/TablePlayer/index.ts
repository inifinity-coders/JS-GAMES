import { Player } from "../../interfaces"

export class TablePlayer extends HTMLElement {


    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['player']
    }
    
    connectedCallback(){
        this.attachShadow({mode: 'open'})
        const player = this.getAttribute('player')
            

            console.log(player)
        this.render()
    }

    attributeChangedCallback(_:string, oldValue:Player, newValue:Player) {
        if(oldValue !== newValue) {
            this.render
        }
    }

    render(){
            
            
            

            this.shadowRoot!.innerHTML = `
                <style>
                .table{
                    
                }
                .cardTable
                }
                
            </style>
            <div class="table">
                
            </div>
            ` 

    }



}

customElements.define('lt-table-player', TablePlayer)