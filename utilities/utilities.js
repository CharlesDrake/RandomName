function randomname(){
    const names = ['Luna', 'Benjamin', 'Camila', 'Charles', 'Ava', 'Henry', 'Annalise', 'Alexander', 'Olivia', 'Elijah'];
    return{
        get name(){
            return names[Math.floor(Math.random() * names.length)];
        },
    }
}
