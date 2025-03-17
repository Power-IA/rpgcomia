class ElementPrompt {
    constructor(container) {
        this.container = container;
        this.context = '';
        this.selectedElements = new Set();
        this.storyInProgress = false;
        this.initializeComponent();
    }

    initializeComponent() {
        // Criar o container principal
        this.container.innerHTML = `
            <div class="element-prompt">
                <div class="context-section">
                    <h3>Contexto da História</h3>
                    <textarea id="storyContext" placeholder="Digite o contexto inicial da sua história ou continue a partir da história atual..."></textarea>
                </div>
                <div class="elements-section">
                    <h3>Elementos Selecionados</h3>
                    <div class="selected-elements-list"></div>
                </div>
                <div class="story-controls">
                    <button id="generateStory" class="primary-button">Gerar História</button>
                    <button id="clearContext" class="secondary-button">Limpar</button>
                </div>
            </div>
        `;

        // Adicionar estilos
        const style = document.createElement('style');
        style.textContent = `
            .element-prompt {
                background: white;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .context-section {
                margin-bottom: 20px;
            }

            .context-section textarea {
                width: 100%;
                min-height: 100px;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                line-height: 1.6;
                resize: vertical;
            }

            .context-section textarea:focus {
                outline: none;
                border-color: #1a73e8;
                box-shadow: 0 0 0 2px rgba(26,115,232,0.2);
            }

            .elements-section {
                margin-bottom: 20px;
            }

            .selected-elements-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 6px;
                min-height: 60px;
            }

            .element-tag {
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 6px 12px;
                background: #e3f2fd;
                border-radius: 20px;
                font-size: 14px;
                color: #1976d2;
                animation: fadeIn 0.3s ease-in-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .element-tag button {
                background: none;
                border: none;
                color: #1976d2;
                cursor: pointer;
                padding: 2px 6px;
                font-size: 12px;
                border-radius: 50%;
            }

            .element-tag button:hover {
                background: rgba(25, 118, 210, 0.1);
            }

            .story-controls {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }

            .primary-button {
                background: #1a73e8;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.3s;
            }

            .primary-button:hover {
                background: #1557b0;
            }

            .secondary-button {
                background: #f8f9fa;
                color: #666;
                border: 1px solid #ddd;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.3s;
            }

            .secondary-button:hover {
                background: #e9ecef;
            }

            h3 {
                margin: 0 0 10px 0;
                color: #333;
                font-size: 16px;
            }
        `;
        document.head.appendChild(style);

        // Inicializar elementos
        this.contextInput = this.container.querySelector('#storyContext');
        this.selectedElementsList = this.container.querySelector('.selected-elements-list');
        this.generateButton = this.container.querySelector('#generateStory');
        this.clearButton = this.container.querySelector('#clearContext');

        // Configurar eventos
        this.contextInput.addEventListener('input', () => {
            this.context = this.contextInput.value;
            this.updateGenerateButtonText();
        });

        this.generateButton.addEventListener('click', () => {
            this.generateStory();
        });

        this.clearButton.addEventListener('click', () => {
            this.clearContext();
        });
    }

    updateGenerateButtonText() {
        this.generateButton.textContent = this.storyInProgress ? 'Continuar História' : 'Gerar História';
    }

    addElement(elementKey, elementInfo) {
        if (this.selectedElements.has(elementKey)) return;

        this.selectedElements.add(elementKey);
        
        const elementTag = document.createElement('div');
        elementTag.className = 'element-tag';
        elementTag.dataset.element = elementKey;
        
        elementTag.innerHTML = `
            <span>
                <i class="fas ${elementInfo.icone}" style="color: ${elementInfo.cor}"></i>
                ${elementInfo.nome}
            </span>
            <button class="remove-element">
                <i class="fas fa-times"></i>
            </button>
        `;

        elementTag.querySelector('.remove-element').addEventListener('click', () => {
            this.removeElement(elementKey);
        });

        this.selectedElementsList.appendChild(elementTag);
        this.dispatchElementsChangedEvent();
    }

    removeElement(elementKey) {
        this.selectedElements.delete(elementKey);
        const elementTag = this.selectedElementsList.querySelector(`[data-element="${elementKey}"]`);
        if (elementTag) {
            elementTag.remove();
        }
        this.dispatchElementsChangedEvent();
    }

    clearContext() {
        this.context = '';
        this.contextInput.value = '';
        this.selectedElements.clear();
        this.selectedElementsList.innerHTML = '';
        this.storyInProgress = false;
        this.updateGenerateButtonText();
        this.dispatchElementsChangedEvent();
    }

    async generateStory() {
        if (!this.context.trim()) {
            alert('Por favor, adicione um contexto para a história.');
            return;
        }

        if (this.selectedElements.size === 0) {
            alert('Por favor, selecione pelo menos um elemento.');
            return;
        }

        const elements = Array.from(this.selectedElements).map(key => {
            const info = window.ElementSystem.getInfo(key);
            return {
                nome: info.nome,
                icone: info.icone,
                cor: info.cor
            };
        });

        const prompt = this.generatePrompt(elements);
        
        // Disparar evento para o game.js processar
        const event = new CustomEvent('generateStory', {
            detail: {
                prompt,
                context: this.context,
                elements,
                isContinuation: this.storyInProgress
            }
        });
        this.container.dispatchEvent(event);
        
        // Atualizar estado
        this.storyInProgress = true;
        this.updateGenerateButtonText();
    }

    generatePrompt(elements) {
        const elementsList = elements.map(el => 
            `- ${el.nome} (${el.icone})`
        ).join('\n');

        const promptBase = this.storyInProgress
            ? 'Continue a história incorporando os seguintes elementos de forma natural e criativa, mantendo a coerência com o contexto e a história anterior:'
            : 'Crie uma história envolvente que incorpore estes elementos de forma natural e criativa, mantendo a coerência com o contexto fornecido:';

        return `${this.context}

Elementos para incorporar na história:
${elementsList}

${promptBase}`;
    }

    dispatchElementsChangedEvent() {
        const event = new CustomEvent('elementsChanged', {
            detail: {
                elements: Array.from(this.selectedElements)
            }
        });
        this.container.dispatchEvent(event);
    }

    getSelectedElements() {
        return Array.from(this.selectedElements);
    }
}

// Exportar para uso global
window.ElementPrompt = ElementPrompt; 