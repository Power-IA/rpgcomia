/**
 * Jogo de Elementos com IA
 * Baseado no chat do OpenRouter
 */

// Variáveis globais
let currentApiKey = '';
let scenarioElements = [];
let storySegments = [];
let isProcessing = false;
let currentLanguage = 'pt-BR'; // Idioma padrão

// Elementos DOM
const apiKeyInput = document.getElementById('apiKeyInput');
const connectButton = document.getElementById('connectButton');
const modelSelect = document.getElementById('modelSelect');
const languageSelect = document.getElementById('languageSelect');
const freeModelsGroup = document.getElementById('freeModels');
const paidModelsGroup = document.getElementById('paidModels');
const scenario = document.getElementById('scenario');
const scenarioPlaceholder = document.querySelector('.scenario-placeholder');
const commandInput = document.getElementById('commandInput');
const sendCommand = document.getElementById('sendCommand');
const storyOutput = document.getElementById('storyOutput');
const resetButton = document.getElementById('resetButton');
const saveButton = document.getElementById('saveButton');
const loadingOverlay = document.getElementById('loadingOverlay');
const storyContext = document.getElementById('storyContext');
const generateStoryBtn = document.getElementById('generateStory');

// Mapeamento de códigos de idioma para nomes completos
const languageNames = {
    'pt-BR': 'português brasileiro',
    'en-US': 'English',
    'es-ES': 'español',
    'fr-FR': 'français',
    'de-DE': 'Deutsch',
    'it-IT': 'italiano',
    'ja-JP': '日本語',
    'zh-CN': '中文',
    'ru-RU': 'русский'
};

// Traduções para elementos da interface
const translations = {
    'pt-BR': {
        placeholders: {
            command: 'Digite seu comando para a IA...',
            intro: 'Arraste elementos para o cenário e envie comandos para a IA criar uma história.'
        },
        buttons: {
            send: 'Enviar',
            reset: 'Reiniciar Jogo',
            save: 'Salvar História',
            connect: 'Conectar',
            connected: 'Conectado'
        },
        alerts: {
            apiKeyRequired: 'Por favor, insira uma API Key',
            commandRequired: 'Por favor, digite um comando',
            modelRequired: 'Por favor, selecione um modelo',
            elementsRequired: 'Por favor, adicione pelo menos um elemento ao cenário',
            resetConfirm: 'Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido.',
            noStory: 'Não há história para salvar'
        },
        labels: {
            userCommand: 'Seu comando:',
            processing: 'Processando...'
        },
        titles: {
            gameTitle: 'Jogo de Elementos com IA',
            apiSettings: 'Configurações da API',
            elements: 'Elementos',
            scenario: 'Cenário',
            command: 'Comando',
            story: 'História',
            language: 'Idioma'
        }
    },
    'en-US': {
        placeholders: {
            command: 'Type your command for the AI...',
            intro: 'Drag elements to the scenario and send commands for the AI to create a story.'
        },
        buttons: {
            send: 'Send',
            reset: 'Reset Game',
            save: 'Save Story',
            connect: 'Connect',
            connected: 'Connected'
        },
        alerts: {
            apiKeyRequired: 'Please enter an API Key',
            commandRequired: 'Please type a command',
            modelRequired: 'Please select a model',
            elementsRequired: 'Please add at least one element to the scenario',
            resetConfirm: 'Are you sure you want to reset the game? All progress will be lost.',
            noStory: 'There is no story to save'
        },
        labels: {
            userCommand: 'Your command:',
            processing: 'Processing...'
        },
        titles: {
            gameTitle: 'AI Elements Game',
            apiSettings: 'API Settings',
            elements: 'Elements',
            scenario: 'Scenario',
            command: 'Command',
            story: 'Story',
            language: 'Language'
        }
    },
    'es-ES': {
        placeholders: {
            command: 'Escribe tu comando para la IA...',
            intro: 'Arrastra elementos al escenario y envía comandos para que la IA cree una historia.'
        },
        buttons: {
            send: 'Enviar',
            reset: 'Reiniciar Juego',
            save: 'Guardar Historia',
            connect: 'Conectar',
            connected: 'Conectado'
        },
        alerts: {
            apiKeyRequired: 'Por favor, introduce una API Key',
            commandRequired: 'Por favor, escribe un comando',
            modelRequired: 'Por favor, selecciona un modelo',
            elementsRequired: 'Por favor, añade al menos un elemento al escenario',
            resetConfirm: '¿Estás seguro de que quieres reiniciar el juego? Todo el progreso se perderá.',
            noStory: 'No hay historia para guardar'
        },
        labels: {
            userCommand: 'Tu comando:',
            processing: 'Procesando...'
        },
        titles: {
            gameTitle: 'Juego de Elementos con IA',
            apiSettings: 'Configuración de API',
            elements: 'Elementos',
            scenario: 'Escenario',
            command: 'Comando',
            story: 'Historia',
            language: 'Idioma'
        }
    },
    'fr-FR': {
        placeholders: {
            command: 'Tapez votre commande pour l\'IA...',
            intro: 'Faites glisser les éléments vers le scénario et envoyez des commandes pour que l\'IA crée une histoire.'
        },
        buttons: {
            send: 'Envoyer',
            reset: 'Réinitialiser',
            save: 'Sauvegarder',
            connect: 'Connecter',
            connected: 'Connecté'
        },
        alerts: {
            apiKeyRequired: 'Veuillez entrer une clé API',
            commandRequired: 'Veuillez taper une commande',
            modelRequired: 'Veuillez sélectionner un modèle',
            elementsRequired: 'Veuillez ajouter au moins un élément au scénario',
            resetConfirm: 'Êtes-vous sûr de vouloir réinitialiser le jeu? Tout progrès sera perdu.',
            noStory: 'Il n\'y a pas d\'histoire à sauvegarder'
        },
        labels: {
            userCommand: 'Votre commande:',
            processing: 'Traitement en cours...'
        },
        titles: {
            gameTitle: 'Jeu d\'Éléments avec IA',
            apiSettings: 'Paramètres API',
            elements: 'Éléments',
            scenario: 'Scénario',
            command: 'Commande',
            story: 'Histoire',
            language: 'Langue'
        }
    },
    'de-DE': {
        placeholders: {
            command: 'Geben Sie Ihren Befehl für die KI ein...',
            intro: 'Ziehen Sie Elemente in das Szenario und senden Sie Befehle, damit die KI eine Geschichte erstellt.'
        },
        buttons: {
            send: 'Senden',
            reset: 'Spiel zurücksetzen',
            save: 'Geschichte speichern',
            connect: 'Verbinden',
            connected: 'Verbunden'
        },
        alerts: {
            apiKeyRequired: 'Bitte geben Sie einen API-Schlüssel ein',
            commandRequired: 'Bitte geben Sie einen Befehl ein',
            modelRequired: 'Bitte wählen Sie ein Modell aus',
            elementsRequired: 'Bitte fügen Sie mindestens ein Element zum Szenario hinzu',
            resetConfirm: 'Sind Sie sicher, dass Sie das Spiel zurücksetzen möchten? Aller Fortschritt geht verloren.',
            noStory: 'Es gibt keine Geschichte zum Speichern'
        },
        labels: {
            userCommand: 'Ihr Befehl:',
            processing: 'Verarbeitung...'
        },
        titles: {
            gameTitle: 'Elemente-Spiel mit KI',
            apiSettings: 'API-Einstellungen',
            elements: 'Elemente',
            scenario: 'Szenario',
            command: 'Befehl',
            story: 'Geschichte',
            language: 'Sprache'
        }
    },
    'it-IT': {
        placeholders: {
            command: 'Digita il tuo comando per l\'IA...',
            intro: 'Trascina gli elementi nello scenario e invia comandi all\'IA per creare una storia.'
        },
        buttons: {
            send: 'Invia',
            reset: 'Reimposta Gioco',
            save: 'Salva Storia',
            connect: 'Connetti',
            connected: 'Connesso'
        },
        alerts: {
            apiKeyRequired: 'Per favore, inserisci una chiave API',
            commandRequired: 'Per favore, digita un comando',
            modelRequired: 'Per favore, seleziona un modello',
            elementsRequired: 'Per favore, aggiungi almeno un elemento allo scenario',
            resetConfirm: 'Sei sicuro di voler reimpostare il gioco? Tutti i progressi andranno persi.',
            noStory: 'Non c\'è nessuna storia da salvare'
        },
        labels: {
            userCommand: 'Il tuo comando:',
            processing: 'Elaborazione in corso...'
        },
        titles: {
            gameTitle: 'Gioco degli Elementi con IA',
            apiSettings: 'Impostazioni API',
            elements: 'Elementi',
            scenario: 'Scenario',
            command: 'Comando',
            story: 'Storia',
            language: 'Lingua'
        }
    },
    'ja-JP': {
        placeholders: {
            command: 'AIへのコマンドを入力してください...',
            intro: '要素をシナリオにドラッグし、AIにストーリーを作成するコマンドを送信します。'
        },
        buttons: {
            send: '送信',
            reset: 'ゲームをリセット',
            save: 'ストーリーを保存',
            connect: '接続',
            connected: '接続済み'
        },
        alerts: {
            apiKeyRequired: 'APIキーを入力してください',
            commandRequired: 'コマンドを入力してください',
            modelRequired: 'モデルを選択してください',
            elementsRequired: 'シナリオに少なくとも1つの要素を追加してください',
            resetConfirm: 'ゲームをリセットしてもよろしいですか？すべての進行状況が失われます。',
            noStory: '保存するストーリーがありません'
        },
        labels: {
            userCommand: 'あなたのコマンド:',
            processing: '処理中...'
        },
        titles: {
            gameTitle: 'AIエレメントゲーム',
            apiSettings: 'API設定',
            elements: '要素',
            scenario: 'シナリオ',
            command: 'コマンド',
            story: 'ストーリー',
            language: '言語'
        }
    },
    'zh-CN': {
        placeholders: {
            command: '输入您给AI的指令...',
            intro: '将元素拖到场景中，并发送指令让AI创建故事。'
        },
        buttons: {
            send: '发送',
            reset: '重置游戏',
            save: '保存故事'
        },
        alerts: {
            apiKeyRequired: '请输入API密钥',
            commandRequired: '请输入指令',
            modelRequired: '请选择一个模型',
            elementsRequired: '请至少添加一个元素到场景中',
            resetConfirm: '您确定要重置游戏吗？所有进度将丢失。',
            noStory: '没有可保存的故事'
        },
        labels: {
            userCommand: '您的指令:',
            processing: '处理中...'
        },
        titles: {
            gameTitle: 'AI元素游戏',
            apiSettings: 'API设置',
            elements: '元素',
            scenario: '场景',
            command: '指令',
            story: '故事',
            language: '语言'
        }
    },
    'ru-RU': {
        placeholders: {
            command: 'Введите вашу команду для ИИ...',
            intro: 'Перетащите элементы на сцену и отправьте команды, чтобы ИИ создал историю.'
        },
        buttons: {
            send: 'Отправить',
            reset: 'Сбросить Игру',
            save: 'Сохранить Историю'
        },
        alerts: {
            apiKeyRequired: 'Пожалуйста, введите API ключ',
            commandRequired: 'Пожалуйста, введите команду',
            modelRequired: 'Пожалуйста, выберите модель',
            elementsRequired: 'Пожалуйста, добавьте хотя бы один элемент на сцену',
            resetConfirm: 'Вы уверены, что хотите сбросить игру? Весь прогресс будет потерян.',
            noStory: 'Нет истории для сохранения'
        },
        labels: {
            userCommand: 'Ваша команда:',
            processing: 'Обработка...'
        },
        titles: {
            gameTitle: 'Игра Элементов с ИИ',
            apiSettings: 'Настройки API',
            elements: 'Элементы',
            scenario: 'Сценарий',
            command: 'Команда',
            story: 'История',
            language: 'Язык'
        }
    }
};

// Função para obter tradução
function getTranslation(key, subKey) {
    // Se o idioma não tiver tradução, usar inglês como fallback
    const lang = translations[currentLanguage] || translations['en-US'];
    return lang[key][subKey];
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Elementos da interface
    const apiKeyInput = document.getElementById('apiKeyInput');
    const connectButton = document.getElementById('connectButton');
    const modelSelect = document.getElementById('modelSelect');
    const languageSelect = document.getElementById('languageSelect');
    const commandInput = document.getElementById('commandInput');
    const sendCommand = document.getElementById('sendCommand');
    const resetGame = document.getElementById('resetGame');
    const saveStory = document.getElementById('saveStory');
    const storyOutput = document.querySelector('.story-output');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollBottomBtn = document.getElementById('scrollBottomBtn');
    const storyContext = document.getElementById('storyContext');
    const generateStoryBtn = document.getElementById('generateStory');

    // Estado do jogo
    let currentLanguage = 'pt-BR';
    let selectedElements = [];
    let storySegments = [];
    let isConnected = false;
    let storyInProgress = false;

    // Inicializar componentes
    const elementViewer = new ElementViewer();

    // Configurar eventos de rolagem
    scrollTopBtn.addEventListener('click', () => {
        storyOutput.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBottomBtn.addEventListener('click', () => {
        storyOutput.scrollTo({
            top: storyOutput.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Atualizar a visualização da história
    function updateStoryView() {
        storyOutput.innerHTML = '';
        
        if (storySegments.length === 0) {
            const introText = {
                'pt-BR': 'Selecione elementos e envie comandos para criar uma história.',
                'en-US': 'Select elements and send commands to create a story.'
            };
            const intro = document.createElement('p');
            intro.className = 'story-intro';
            intro.textContent = introText[currentLanguage] || introText['en-US'];
            storyOutput.appendChild(intro);
            return;
        }

        storySegments.forEach(segment => {
            const segmentDiv = document.createElement('div');
            segmentDiv.className = 'story-segment';

            if (segment.type === 'command') {
                const commandDiv = document.createElement('div');
                commandDiv.className = 'user-command';
                commandDiv.textContent = `> ${segment.content}`;
                segmentDiv.appendChild(commandDiv);
            } else if (segment.type === 'response') {
                const responseDiv = document.createElement('div');
                responseDiv.className = 'ai-response';
                responseDiv.textContent = segment.content;
                segmentDiv.appendChild(responseDiv);
            } else if (segment.type === 'error') {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = segment.content;
                segmentDiv.appendChild(errorDiv);
            }

            storyOutput.appendChild(segmentDiv);
        });

        // Rolar para o final
        storyOutput.scrollTo({
            top: storyOutput.scrollHeight,
            behavior: 'smooth'
        });

        // Verificar se há overflow para mostrar o indicador
        checkStoryOverflow();
        
        // Atualizar estado da história
        storyInProgress = storySegments.length > 0;
        updateGenerateButtonText();
    }

    // Atualizar texto do botão de gerar história
    function updateGenerateButtonText() {
        generateStoryBtn.textContent = storyInProgress ? 'Continuar História' : 'Gerar História';
    }

    // Verificar se há overflow na história
    function checkStoryOverflow() {
        const hasOverflow = storyOutput.scrollHeight > storyOutput.clientHeight;
        const isAtBottom = storyOutput.scrollHeight - storyOutput.scrollTop === storyOutput.clientHeight;
        
        document.querySelector('.story-panel').classList.toggle('has-overflow', hasOverflow && !isAtBottom);
    }

    // Adicionar listener para o evento de rolagem
    storyOutput.addEventListener('scroll', () => {
        const isAtBottom = storyOutput.scrollHeight - storyOutput.scrollTop === storyOutput.clientHeight;
        document.querySelector('.story-panel').classList.toggle('has-overflow', !isAtBottom);
    });

    // Conectar à API
    async function connect() {
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey) {
            addStorySegment('error', {
                'pt-BR': 'Por favor, insira uma chave API válida.',
                'en-US': 'Please enter a valid API key.'
            }[currentLanguage]);
            return;
        }

        try {
            const response = await fetch('https://openrouter.ai/api/v1/models', {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            if (!response.ok) {
                throw new Error('API key invalid');
            }

            const models = await response.json();
            
            // Limpar e preencher o select de modelos
            modelSelect.innerHTML = '<option value="">Selecione um modelo</option>';
            models.data.forEach(model => {
                const option = document.createElement('option');
                option.value = model.id;
                option.textContent = `${model.name} (${model.pricing.prompt}/prompt)`;
                modelSelect.appendChild(option);
            });

            // Habilitar controles
            modelSelect.disabled = false;
            languageSelect.disabled = false;
            commandInput.disabled = false;
            sendCommand.disabled = false;
            storyContext.disabled = false;
            generateStoryBtn.disabled = false;
            
            // Atualizar estado
            isConnected = true;
            connectButton.textContent = {
                'pt-BR': 'Conectado',
                'en-US': 'Connected'
            }[currentLanguage];
            connectButton.disabled = true;
            apiKeyInput.type = 'password';

        } catch (error) {
            addStorySegment('error', {
                'pt-BR': 'Erro ao conectar: Chave API inválida',
                'en-US': 'Connection error: Invalid API key'
            }[currentLanguage]);
        }
    }

    // Gerar história com elementos selecionados
    async function generateStory(prompt, context, elements, isContinuation = false) {
        const modelId = modelSelect.value;
        
        if (!modelId) {
            addStorySegment('error', {
                'pt-BR': 'Por favor, selecione um modelo.',
                'en-US': 'Please select a model.'
            }[currentLanguage]);
            return;
        }

        // Adicionar contexto à história
        if (!isContinuation) {
            addStorySegment('command', `Contexto: ${context}`);
        } else {
            addStorySegment('command', `Continuação com novos elementos: ${elements.map(e => e.nome).join(', ')}`);
        }

        try {
            // Enviar requisição para a API
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKeyInput.value}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: modelId,
                    messages: [{
                        role: "user",
                        content: prompt
                    }]
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            
            // Adicionar resposta à história
            addStorySegment('response', aiResponse);

        } catch (error) {
            addStorySegment('error', {
                'pt-BR': 'Erro ao gerar história: ' + error.message,
                'en-US': 'Error generating story: ' + error.message
            }[currentLanguage]);
        }
    }

    // Enviar comando para a IA
    async function sendCommandToAI() {
        const command = commandInput.value.trim();
        const modelId = modelSelect.value;
        
        if (!command) {
            addStorySegment('error', {
                'pt-BR': 'Por favor, digite um comando.',
                'en-US': 'Please enter a command.'
            }[currentLanguage]);
            return;
        }

        if (!modelId) {
            addStorySegment('error', {
                'pt-BR': 'Por favor, selecione um modelo.',
                'en-US': 'Please select a model.'
            }[currentLanguage]);
            return;
        }

        // Adicionar comando à história
        addStorySegment('command', command);
        
        // Limpar campo de comando
        commandInput.value = '';

        try {
            // Gerar prompt baseado nos elementos selecionados
            const prompt = window.ElementSystem.generateAIPrompt(selectedElements, command);

            // Enviar requisição para a API
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKeyInput.value}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: modelId,
                    messages: [{
                        role: "user",
                        content: prompt
                    }]
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            
            // Adicionar resposta à história
            addStorySegment('response', aiResponse);

        } catch (error) {
            addStorySegment('error', {
                'pt-BR': 'Erro ao processar comando: ' + error.message,
                'en-US': 'Error processing command: ' + error.message
            }[currentLanguage]);
        }
    }

    // Adicionar segmento à história
    function addStorySegment(type, content) {
        storySegments.push({ type, content });
        updateStoryView();
    }

    // Salvar história
    function saveStoryToFile() {
        const storyText = storySegments.map(segment => {
            if (segment.type === 'command') {
                return `> ${segment.content}\n`;
            } else {
                return `${segment.content}\n`;
            }
        }).join('\n');

        const blob = new Blob([storyText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        const fileName = {
            'pt-BR': 'historia_elementos',
            'en-US': 'elements_story'
        }[currentLanguage] + '.txt';
        
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Reiniciar jogo
    function resetGameState() {
        selectedElements = [];
        storySegments = [];
        storyInProgress = false;
        updateStoryView();
        
        // Limpar elementos selecionados na UI
        document.querySelector('.selected-elements-list').innerHTML = '';
        
        // Limpar contexto
        storyContext.value = '';
        
        // Atualizar UI dos elementos
        const elementItems = document.querySelectorAll('.element-item');
        elementItems.forEach(item => {
            item.classList.remove('selected');
        });
    }

    // Event Listeners
    connectButton.addEventListener('click', connect);
    
    sendCommand.addEventListener('click', sendCommandToAI);
    
    commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendCommandToAI();
        }
    });
    
    resetGame.addEventListener('click', resetGameState);
    
    saveStory.addEventListener('click', saveStoryToFile);
    
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        window.currentLanguage = currentLanguage; // Atualizar idioma global
        updateStoryView();
    });

    // Adicionar evento para o botão de gerar história
    generateStoryBtn.addEventListener('click', () => {
        const context = storyContext.value.trim();
        
        if (!context) {
            alert('Por favor, adicione um contexto para a história.');
            return;
        }
        
        if (selectedElements.length === 0) {
            alert('Por favor, selecione pelo menos um elemento.');
            return;
        }
        
        const elements = selectedElements.map(id => window.ElementSystem.getElementById(id));
        const prompt = window.ElementSystem.generateAIPrompt(selectedElements, context);
        
        generateStory(prompt, context, elements, storyInProgress);
    });

    // Listener para mudanças nos elementos selecionados
    document.addEventListener('elementsChanged', (e) => {
        selectedElements = e.detail.elements;
        
        // Habilitar/desabilitar botão de gerar história
        generateStoryBtn.disabled = selectedElements.length === 0 || !isConnected;
    });

    // Inicializar a visualização da história
    updateStoryView();
});