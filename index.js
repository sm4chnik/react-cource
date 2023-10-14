document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu').addEventListener('click', () => {
        const menu = getMenu();
        document.getElementById('menu-btns').childNodes;
        if (!Array.from(document.getElementById('menu-btns').childNodes).some(item => {
            return item.className == 'menu-item-toogled';
        })) {
            // add items
            menu.forEach(item => {
                document.getElementById('menu-btns').appendChild(item);
            })
        } else {
            // remove items
            
        }
    });
})

const getMenu = () => {
    const item = document.createElement('div');
    item.innerHTML = 'test';
    item.className = 'menu-item-toogled';
    item.addEventListener('click', () => {
        console.log('you press on menu-item');
    })

    return [item];
}