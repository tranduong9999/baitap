for (let i = 0; i < 10; i++) {
    let color = "#" + Math.random().toString(16).slice(-6);
    console.log(`%cMàu: ${color}`, `color: ${color}`);
}
