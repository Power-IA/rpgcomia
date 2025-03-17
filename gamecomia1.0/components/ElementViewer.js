class ElementViewer {
    constructor() {
        this.selectedElements = new Set();
        this.currentCategory = null;
        this.dialogoSelecionado = null;
        this.initializeComponent();
    }

    initializeComponent() {
        // Obter referências aos elementos DOM
        this.categoriesList = document.querySelector('.categories-list');
        this.elementsList = document.querySelector('.elements-list');
        this.selectedElementsList = document.querySelector('.selected-elements-list');
        
        // Carregar categorias
        this.loadCategories();
        
        // Adicionar listener para o botão de gerar história
        const generateStoryBtn = document.getElementById('generateStory');
        generateStoryBtn.addEventListener('click', () => this.generateStory());
    }

    loadCategories() {
        // Limpar lista de categorias
        this.categoriesList.innerHTML = '';
        
        // Obter categorias do sistema de elementos
        const categories = window.ElementSystem.getCategories();
        
        // Criar item para cada categoria
        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            categoryItem.dataset.category = category.id;
            
            categoryItem.innerHTML = `
                <i class="fas ${category.icone}" style="color: ${category.cor}"></i>
                <span>${category.nome}</span>
            `;
            
            // Adicionar evento de clique
            categoryItem.addEventListener('click', () => {
                this.selectCategory(category.id);
            });
            
            this.categoriesList.appendChild(categoryItem);
        });
        
        // Selecionar primeira categoria por padrão
        if (categories.length > 0) {
            this.selectCategory(categories[0].id);
        }
    }

    selectCategory(categoryId) {
        // Atualizar categoria atual
        this.currentCategory = categoryId;
        
        // Atualizar UI - destacar categoria selecionada
        const categoryItems = this.categoriesList.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            if (item.dataset.category === categoryId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Carregar elementos da categoria
        this.loadElements(categoryId);
    }

    loadElements(categoryId) {
        // Limpar lista de elementos
        this.elementsList.innerHTML = '';
        
        // Obter elementos da categoria
        const elements = window.ElementSystem.getElementsByCategory(categoryId);
        
        // Criar item para cada elemento
        elements.forEach(element => {
            const elementItem = document.createElement('div');
            elementItem.className = 'element-item';
            elementItem.dataset.element = element.id;
            
            // Verificar se o elemento já está selecionado
            if (this.selectedElements.has(element.id)) {
                elementItem.classList.add('selected');
            }
            
            elementItem.innerHTML = `
                <i class="fas ${element.icone}" style="color: ${element.cor}"></i>
                <span>${element.nome}</span>
            `;
            
            // Adicionar evento de clique
            elementItem.addEventListener('click', () => {
                if (element.tipo === 'dialogo') {
                    this.handleDialogoClick(element);
                } else {
                    this.toggleElement(element);
                }
            });
            
            this.elementsList.appendChild(elementItem);
        });
    }

    handleDialogoClick(dialogo) {
        // Se já estiver selecionado, remover
        if (this.selectedElements.has(dialogo.id)) {
            this.toggleElement(dialogo);
            return;
        }
        
        // Armazenar o diálogo selecionado
        this.dialogoSelecionado = dialogo.id;
        
        // Mostrar modal para selecionar participantes
        this.showDialogoParticipantesModal(dialogo);
    }

    showDialogoParticipantesModal(dialogo) {
        // Criar modal
        const modal = document.createElement('div');
        modal.className = 'dialogo-modal';
        
        // Obter elementos que podem participar (excluindo diálogos)
        const participantesPossiveis = [];
        window.ElementSystem.categories.forEach(category => {
            if (category.id !== 'dialogos') {
                const elementos = window.ElementSystem.getElementsByCategory(category.id);
                participantesPossiveis.push(...elementos);
            }
        });
        
        // Criar conteúdo do modal
        modal.innerHTML = `
            <div class="dialogo-modal-content">
                <div class="dialogo-modal-header">
                    <h3>Selecione os participantes para o ${dialogo.nome}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="dialogo-modal-body">
                    <p>Escolha quem participará deste diálogo:</p>
                    <div class="participantes-list">
                        ${participantesPossiveis.map(p => `
                            <div class="participante-item" data-id="${p.id}">
                                <input type="checkbox" id="participante-${p.id}">
                                <label for="participante-${p.id}">
                                    <i class="fas ${p.icone}" style="color: ${p.cor}"></i>
                                    ${p.nome}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="dialogo-modal-footer">
                    <button class="cancel-btn">Cancelar</button>
                    <button class="confirm-btn">Confirmar</button>
                </div>
            </div>
        `;
        
        // Adicionar estilos para o modal
        const style = document.createElement('style');
        style.textContent = `
            .dialogo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .dialogo-modal-content {
                background-color: white;
                border-radius: 8px;
                width: 80%;
                max-width: 600px;
                max-height: 80vh;
                display: flex;
                flex-direction: column;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            
            .dialogo-modal-header {
                padding: 15px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .dialogo-modal-header h3 {
                margin: 0;
                color: #333;
            }
            
            .close-modal {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #999;
            }
            
            .dialogo-modal-body {
                padding: 15px;
                overflow-y: auto;
                flex: 1;
            }
            
            .participantes-list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .participante-item {
                display: flex;
                align-items: center;
                padding: 8px;
                border-radius: 4px;
                transition: background-color 0.2s;
            }
            
            .participante-item:hover {
                background-color: #f5f5f5;
            }
            
            .participante-item label {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                flex: 1;
            }
            
            .dialogo-modal-footer {
                padding: 15px;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            
            .dialogo-modal-footer button {
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .cancel-btn {
                background-color: #f5f5f5;
                border: 1px solid #ddd;
                color: #333;
            }
            
            .confirm-btn {
                background-color: #1a73e8;
                border: none;
                color: white;
            }
        `;
        document.head.appendChild(style);
        
        // Adicionar modal ao DOM
        document.body.appendChild(modal);
        
        // Adicionar eventos
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
            this.dialogoSelecionado = null;
        });
        
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
            this.dialogoSelecionado = null;
        });
        
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            // Obter participantes selecionados
            const participantes = [];
            modal.querySelectorAll('.participante-item input:checked').forEach(checkbox => {
                const participanteId = checkbox.closest('.participante-item').dataset.id;
                participantes.push(participanteId);
            });
            
            // Verificar se há pelo menos um participante
            if (participantes.length < 1) {
                alert('Selecione pelo menos um participante para o diálogo.');
                return;
            }
            
            // Adicionar diálogo com participantes
            window.ElementSystem.adicionarParticipantesDialogo(this.dialogoSelecionado, participantes);
            this.toggleElement(window.ElementSystem.getElementById(this.dialogoSelecionado));
            
            // Fechar modal
            document.body.removeChild(modal);
            this.dialogoSelecionado = null;
        });
    }

    toggleElement(element) {
        if (this.selectedElements.has(element.id)) {
            // Remover elemento
            this.selectedElements.delete(element.id);
            this.removeSelectedElement(element.id);
            
            // Se for diálogo, limpar participantes
            if (element.tipo === 'dialogo') {
                window.ElementSystem.adicionarParticipantesDialogo(element.id, []);
            }
        } else {
            // Adicionar elemento
            this.selectedElements.add(element.id);
            this.addSelectedElement(element);
        }
        
        // Atualizar UI
        this.updateElementsUI();
        
        // Disparar evento de mudança
        this.dispatchElementsChangedEvent();
    }

    addSelectedElement(element) {
        const selectedElement = document.createElement('div');
        selectedElement.className = 'selected-element';
        selectedElement.dataset.element = element.id;
        
        // Adicionar classe específica para diálogos
        if (element.tipo === 'dialogo') {
            selectedElement.classList.add('dialogo');
        }
        
        // Conteúdo básico do elemento
        let elementContent = `
            <div class="element-info">
                <i class="fas ${element.icone}" style="color: ${element.cor}"></i>
                <span>${element.nome}</span>
            </div>
        `;
        
        // Adicionar informações de participantes para diálogos
        if (element.tipo === 'dialogo') {
            const participantes = window.ElementSystem.getParticipantesDialogo(element.id);
            if (participantes && participantes.length > 0) {
                const participantesNomes = participantes.map(id => {
                    const p = window.ElementSystem.getElementById(id);
                    return p ? `<span class="participante-tag" style="color: ${p.cor}"><i class="fas ${p.icone}"></i> ${p.nome}</span>` : id;
                }).join(', ');
                
                elementContent += `
                    <div class="dialogo-participantes">
                        <small>Entre: ${participantesNomes}</small>
                    </div>
                `;
            }
        }
        
        // Adicionar botão de remover
        elementContent += `
            <button class="remove-btn" title="Remover elemento">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        selectedElement.innerHTML = elementContent;
        
        // Adicionar evento para remover
        selectedElement.querySelector('.remove-btn').addEventListener('click', () => {
            this.selectedElements.delete(element.id);
            this.removeSelectedElement(element.id);
            
            // Se for diálogo, limpar participantes
            if (element.tipo === 'dialogo') {
                window.ElementSystem.adicionarParticipantesDialogo(element.id, []);
            }
            
            this.updateElementsUI();
            this.dispatchElementsChangedEvent();
        });
        
        this.selectedElementsList.appendChild(selectedElement);
        
        // Adicionar estilos para os participantes
        if (!document.getElementById('participantes-style')) {
            const style = document.createElement('style');
            style.id = 'participantes-style';
            style.textContent = `
                .dialogo-participantes {
                    margin-top: 5px;
                    font-size: 12px;
                }
                
                .participante-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    margin-right: 5px;
                }
            `;
            document.head.appendChild(style);
        }
    }

    removeSelectedElement(elementId) {
        const selectedElement = this.selectedElementsList.querySelector(`[data-element="${elementId}"]`);
        if (selectedElement) {
            selectedElement.remove();
        }
    }

    updateElementsUI() {
        // Atualizar UI dos elementos na lista atual
        const elementItems = this.elementsList.querySelectorAll('.element-item');
        elementItems.forEach(item => {
            if (this.selectedElements.has(item.dataset.element)) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
        
        // Habilitar/desabilitar botão de gerar história
        const generateStoryBtn = document.getElementById('generateStory');
        generateStoryBtn.disabled = this.selectedElements.size === 0;
    }

    generateStory() {
        const context = document.getElementById('storyContext').value.trim();
        
        if (!context) {
            alert('Por favor, adicione um contexto para a história.');
            return;
        }
        
        const elements = Array.from(this.selectedElements).map(id => {
            return window.ElementSystem.getElementById(id);
        });
        
        // Disparar evento para o game.js processar
        const event = new CustomEvent('generateStory', {
            detail: {
                context,
                elements,
                isContinuation: false
            }
        });
        document.dispatchEvent(event);
    }

    dispatchElementsChangedEvent() {
        const event = new CustomEvent('elementsChanged', {
            detail: {
                elements: Array.from(this.selectedElements)
            }
        });
        document.dispatchEvent(event);
    }

    getSelectedElements() {
        return Array.from(this.selectedElements);
    }
}

// Exportar para uso global
window.ElementViewer = ElementViewer; 