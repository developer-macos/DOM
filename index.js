const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

const container = document.querySelector('.js-color-picker');

colorPickerOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option.label;
    btn.style.backgroundColor = option.color;
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.padding = '8px 16px';
    btn.style.margin = '4px';
    btn.style.cursor = 'pointer';
    btn.style.borderRadius = '4px';
    container.appendChild(btn);
});
