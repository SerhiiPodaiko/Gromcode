const newArray = [
    {
        name: 'Jonny Walker',
        birthDate: '1995-12-17'
    },
    {
        name: 'Andrew',
        birthDate: '2001-10-29'
    }
];

const searchByName = (name) => {
    return newArray.filter(person => person.name.includes(name));
};

console.log(searchByName('Jonny Walker'));
console.log(searchByName('Andrew'));

