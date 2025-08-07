document.addEventListener('DOMContentLoaded', function () {
    // --- DATA & CONFIG ---
    let scheduleData = [
         { id: 1, day: 'LUNES', start: '08:30', end: '09:30', subject: 'TENIS', type: 'PRÁCTICA', professor: 'PEREZ BENAVIDES CESAR ANDRES', color: 'green' },
        { id: 2, day: 'LUNES', start: '10:50', end: '11:50', subject: 'ESTADISTICA II', type: 'CÁTEDRA', professor: 'BARRERA ARANGUIZ JUAN FRANCISCO', color: 'blue' },
        { id: 3, day: 'LUNES', start: '14:20', end: '15:20', subject: 'EL CUENTO CHILENO DEL SIGLO XX', type: 'CÁTEDRA', professor: 'VILLEGAS CARRERA MARCELA ISABEL', color: 'purple' },
        { id: 4, day: 'LUNES', start: '15:30', end: '16:30', subject: 'EL CUENTO CHILENO DEL SIGLO XX', type: 'CÁTEDRA', professor: 'VILLEGAS CARRERA MARCELA ISABEL', color: 'purple' },
        { id: 5, day: 'LUNES', start: '19:00', end: '20:00', subject: 'ADMINISTRACION DE LA PRODUCCION II', type: 'AYUDANTÍA', professor: 'LOPEZ LASTRA LEOPOLDO PATRICIO', color: 'yellow' },
        { id: 6, day: 'MARTES', start: '08:30', end: '09:30', subject: 'NEGOCIACION Y MANEJO DE CONFLICTOS', type: 'CÁTEDRA', professor: 'POBLETE TOLOZA YOHANNA DEL PILAR', color: 'red' },
        { id: 7, day: 'MARTES', start: '09:40', end: '10:40', subject: 'NEGOCIACION Y MANEJO DE CONFLICTOS', type: 'CÁTEDRA', professor: 'POBLETE TOLOZA YOHANNA DEL PILAR', color: 'red' },
        { id: 8, day: 'MARTES', start: '10:50', end: '11:50', subject: 'INGLES B1-', type: 'CÁTEDRA', professor: 'MORA DOUGLAS CAROLINA BEATRIZ', color: 'indigo' },
        { id: 9, day: 'MARTES', start: '12:00', end: '13:00', subject: 'INGLES B1-', type: 'CÁTEDRA', professor: 'MORA DOUGLAS CAROLINA BEATRIZ', color: 'indigo' },
        { id: 10, day: 'MARTES', start: '14:20', end: '15:20', subject: 'MICROECONOMIA II', type: 'CÁTEDRA', professor: 'BENTANCOR CAZNIAU ANDREA', color: 'pink' },
        { id: 11, day: 'MARTES', start: '15:30', end: '16:30', subject: 'MICROECONOMIA II', type: 'CÁTEDRA', professor: 'BENTANCOR CAZNIAU ANDREA', color: 'pink' },
        { id: 12, day: 'MARTES', start: '16:40', end: '17:40', subject: 'ADMINISTRACION DE LA PRODUCCION II', type: 'CÁTEDRA', professor: 'LOPEZ LASTRA LEOPOLDO PATRICIO', color: 'yellow' },
        { id: 13, day: 'MARTES', start: '17:50', end: '18:50', subject: 'ADMINISTRACION DE LA PRODUCCION II', type: 'CÁTEDRA', professor: 'LOPEZ LASTRA LEOPOLDO PATRICIO', color: 'yellow' },
        { id: 14, day: 'MIÉRCOLES', start: '15:30', end: '16:30', subject: 'ESTADISTICA II', type: 'CÁTEDRA', professor: 'BARRERA ARANGUIZ JUAN FRANCISCO', color: 'blue' },
        { id: 15, day: 'MIÉRCOLES', start: '16:40', end: '17:40', subject: 'ESTADISTICA II', type: 'CÁTEDRA', professor: 'BARRERA ARANGUIZ JUAN FRANCISCO', color: 'blue' },
        { id: 16, day: 'MIÉRCOLES', start: '17:50', end: '18:50', subject: 'ESTADISTICA II', type: 'AYUDANTÍA', professor: 'BARRERA ARANGUIZ JUAN FRANCISCO', color: 'blue' },
        { id: 17, day: 'JUEVES', start: '08:30', end: '09:30', subject: 'TENIS', type: 'PRÁCTICA', professor: 'PEREZ BENAVIDES CESAR ANDRES', color: 'green' },
        { id: 18, day: 'JUEVES', start: '15:30', end: '16:30', subject: 'MICROECONOMIA II', type: 'AYUDANTÍA', professor: 'BENTANCOR CAZNIAU ANDREA', color: 'pink' },
        { id: 19, day: 'JUEVES', start: '16:40', end: '17:40', subject: 'DERECHO LABORAL Y COMERCIAL', type: 'CÁTEDRA', professor: 'MURGA CORNEJO RICARDO', color: 'teal' },
        { id: 20, day: 'JUEVES', start: '17:50', end: '18:50', subject: 'DERECHO LABORAL Y COMERCIAL', type: 'CÁTEDRA', professor: 'MURGA CORNEJO RICARDO', color: 'teal' },
        { id: 21, day: 'VIERNES', start: '08:30', end: '09:30', subject: 'NEGOCIACION Y MANEJO DE CONFLICTOS', type: 'CÁTEDRA', professor: 'POBLETE TOLOZA YOHANNA DEL PILAR', color: 'red' },
    ];
    
    const container = document.getElementById('schedule-container');
    const days = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
    const colors = {
        red: { light: 'bg-red-200 text-red-800', dark: 'bg-red-900/60 text-red-200 border-red-500/30' },
        blue: { light: 'bg-blue-200 text-blue-800', dark: 'bg-blue-900/60 text-blue-200 border-blue-500/30' },
        green: { light: 'bg-green-200 text-green-800', dark: 'bg-green-900/60 text-green-200 border-green-500/30' },
        yellow: { light: 'bg-yellow-200 text-yellow-800', dark: 'bg-yellow-900/60 text-yellow-200 border-yellow-500/30' },
        purple: { light: 'bg-purple-200 text-purple-800', dark: 'bg-purple-900/60 text-purple-200 border-purple-500/30' },
        pink: { light: 'bg-pink-200 text-pink-800', dark: 'bg-pink-900/60 text-pink-200 border-pink-500/30' },
        indigo: { light: 'bg-indigo-200 text-indigo-800', dark: 'bg-indigo-900/60 text-indigo-200 border-indigo-500/30' },
        teal: { light: 'bg-teal-200 text-teal-800', dark: 'bg-teal-900/60 text-teal-200 border-teal-500/30' },
        gray: { light: 'bg-gray-200 text-gray-800', dark: 'bg-gray-700/60 text-gray-200 border-gray-500/30' },
    };
    const timeInterval = 10;
    const gridRows = 84;

    const modalBackdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalForm = document.getElementById('modal-form');
    const moduleIdInput = document.getElementById('module-id');
    const subjectInput = document.getElementById('subject');
    const professorInput = document.getElementById('professor');
    const typeInput = document.getElementById('type');
    const colorInput = document.getElementById('color');
    const colorPicker = document.getElementById('color-picker');
    const themeToggle = document.getElementById('checkbox');

    const timeToRow = (time) => Math.floor(((parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1])) - (8 * 60)) / timeInterval) + 2;
    const rowToTime = (row) => {
        const totalMinutes = (row - 2) * timeInterval + (8 * 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };
    const getNextId = () => Math.max(0, ...scheduleData.map(d => d.id)) + 1;

    function openModal(data = {}) {
        modalTitle.textContent = data.id ? 'Editar Módulo' : 'Crear Módulo';
        moduleIdInput.value = data.id || '';
        subjectInput.value = data.subject || '';
        professorInput.value = data.professor || '';
        typeInput.value = data.type || 'CÁTEDRA';
        
        const selectedColor = data.color || 'blue';
        colorInput.value = selectedColor;
        colorPicker.innerHTML = Object.keys(colors).map(c => `
            <div data-color="${c}" class="w-8 h-8 rounded-full cursor-pointer border-2 ${c === selectedColor ? 'border-indigo-500' : 'border-transparent dark:border-gray-600'} ${colors[c].light.split(' ')[0]}"></div>
        `).join('');
        
        [...colorPicker.children].forEach(swatch => {
            swatch.addEventListener('click', () => {
                colorInput.value = swatch.dataset.color;
                [...colorPicker.children].forEach(s => s.classList.replace('border-indigo-500', 'border-transparent'));
                swatch.classList.replace('border-transparent', 'border-indigo-500');
            });
        });

        modalBackdrop.classList.remove('hidden');
    }

    function closeModal() {
        modalBackdrop.classList.add('hidden');
        modalForm.reset();
    }

    function saveModule(e) {
        e.preventDefault();
        const id = parseInt(moduleIdInput.value);
        const data = {
            subject: subjectInput.value,
            professor: professorInput.value,
            type: typeInput.value,
            color: colorInput.value,
        };

        if (id) {
            const index = scheduleData.findIndex(item => item.id === id);
            if (index !== -1) scheduleData[index] = { ...scheduleData[index], ...data };
        } else {
            const newId = getNextId();
            const day = modal.dataset.day;
            const start = modal.dataset.start;
            const end = rowToTime(timeToRow(start) + 6);
            scheduleData.push({ id: newId, day, start, end, ...data });
        }
        closeModal();
        renderSchedule();
    }

    function renderSchedule() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        let gridHTML = `<div class="schedule-grid grid border-t border-l border-gray-200 dark:border-gray-700">`;
        
        gridHTML += `<div class="p-1 font-semibold text-center bg-gray-50 dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">HORA</div>`;
        days.forEach(day => {
            gridHTML += `<div class="p-1 font-semibold text-center bg-gray-50 dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 text-xs md:text-sm">${day}</div>`;
        });

        for (let i = 0; i < gridRows; i++) {
            if (i % 3 === 0) {
                gridHTML += `<div class="p-1 text-[10px] text-center text-gray-400 dark:text-gray-500 border-r border-b border-gray-200 dark:border-gray-700" style="grid-row: ${i + 2} / span 3;">${rowToTime(i+2).substring(0,5)}</div>`;
            }
        }
        for (let r = 0; r < gridRows; r++) {
            for (let c = 0; c < days.length; c++) {
                const isHourMark = r % 6 === 0;
                gridHTML += `<div class="empty-cell border-r border-b ${isHourMark ? 'border-t' : ''} border-gray-200 dark:border-gray-700" style="grid-row: ${r + 2}; grid-column: ${c + 2};" data-day="${days[c]}" data-time="${rowToTime(r+2)}"></div>`;
            }
        }

        scheduleData.forEach(item => {
            const startRow = timeToRow(item.start);
            const endRow = timeToRow(item.end);
            const dayIndex = days.indexOf(item.day) + 2;
            const colorClass = colors[item.color] ? (isDarkMode ? colors[item.color].dark : colors[item.color].light) : colors['gray'].light;

            gridHTML += `
                <div class="time-slot p-1 rounded-md m-px flex flex-col justify-between transition-shadow duration-200 hover:shadow-lg border ${colorClass} relative cursor-grab" 
                     style="--start: ${startRow}; --end: ${endRow}; --col: ${dayIndex};"
                     draggable="true" data-id="${item.id}">
                    <div>
                        <p class="font-semibold text-xs pointer-events-none">${item.subject}</p>
                        <p class="text-[10px] leading-tight pointer-events-none">${item.professor}</p>
                    </div>
                    <p class="text-[10px] font-semibold uppercase self-end pointer-events-none">${item.type}</p>
                    <div class="resizer"></div>
                    <div class="delete-btn" data-id="${item.id}">×</div>
                </div>`;
        });

        gridHTML += '</div>';
        container.innerHTML = gridHTML;
        addEventListeners();
    }

    function addEventListeners() {
        document.getElementById('add-new-module-btn').addEventListener('click', () => {
           modal.dataset.day = 'LUNES';
           modal.dataset.start = '09:00';
           openModal();
        });
        modalForm.addEventListener('submit', saveModule);
        modalBackdrop.addEventListener('click', (e) => { if(e.target === modalBackdrop) closeModal() });
        document.getElementById('cancel-btn').addEventListener('click', closeModal);

        container.querySelectorAll('.empty-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                modal.dataset.day = cell.dataset.day;
                modal.dataset.start = cell.dataset.time;
                openModal();
            });
        });

        container.querySelectorAll('.time-slot').forEach(slot => {
            slot.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-btn') || e.target.classList.contains('resizer') || slot.classList.contains('dragging')) return;
                const id = parseInt(slot.dataset.id);
                const data = scheduleData.find(item => item.id === id);
                openModal(data);
            });

            slot.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', slot.dataset.id);
                setTimeout(() => slot.classList.add('dragging', 'opacity-50'), 0);
            });
            slot.addEventListener('dragend', () => slot.classList.remove('dragging', 'opacity-50'));
            
            slot.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(e.target.dataset.id);
                scheduleData = scheduleData.filter(item => item.id !== id);
                renderSchedule();
            });

            slot.querySelector('.resizer').addEventListener('mousedown', initResize);
        });

        container.querySelectorAll('.empty-cell').forEach(cell => {
            cell.addEventListener('dragover', (e) => e.preventDefault());
            cell.addEventListener('drop', (e) => {
                e.preventDefault();
                const id = parseInt(e.dataTransfer.getData('text/plain'));
                const item = scheduleData.find(i => i.id === id);
                if (!item) return;
                const duration = timeToRow(item.end) - timeToRow(item.start);
                item.day = e.target.dataset.day;
                item.start = e.target.dataset.time;
                item.end = rowToTime(timeToRow(item.start) + duration);
                renderSchedule();
            });
        });
    }

    let currentResizer, initialY, initialRowEnd;
    function initResize(e) {
        e.preventDefault();
        currentResizer = e.target;
        const slot = currentResizer.closest('.time-slot');
        const item = scheduleData.find(i => i.id == slot.dataset.id);
        initialY = e.clientY;
        initialRowEnd = timeToRow(item.end);
        document.addEventListener('mousemove', doResize);
        document.addEventListener('mouseup', stopResize);
    }

    function doResize(e) {
        if (!currentResizer) return;
        const slot = currentResizer.closest('.time-slot');
        const item = scheduleData.find(i => i.id == slot.dataset.id);
        const dy = e.clientY - initialY;
        const rowChange = Math.round(dy / (container.clientHeight / gridRows));
        let newRowEnd = initialRowEnd + rowChange;
        const startRow = timeToRow(item.start);
        if (newRowEnd <= startRow) newRowEnd = startRow + 1;
        if (newRowEnd > gridRows + 2) newRowEnd = gridRows + 2;
        item.end = rowToTime(newRowEnd);
        renderSchedule();
    }

    function stopResize() {
        document.removeEventListener('mousemove', doResize);
        document.removeEventListener('mouseup', stopResize);
    }

    // --- THEME SWITCHER ---
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        renderSchedule();
    });

    // Apply theme on initial load
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggle.checked = true;
    }

    // --- INITIAL RENDER ---
    renderSchedule();
});
