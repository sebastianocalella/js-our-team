
// DOM references
const mainDom = document.getElementById('main');

const members = [
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        image:"wayne-barnett-founder-ceo.jpg"
    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        image:"angela-caroll-chief-editor.jpg"
    },
    {
        name:"Walter Gordon",
        role:"Office Manager",
        image:"walter-gordon-office-manager.jpg"
    },
    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        image:"angela-lopez-social-media-manager.jpg"
    },
    {
        name:"Scott Estrada",
        role:"Developer",
        image:"scott-estrada-developer.jpg"
    },
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg"
    }
    
];

//print array data in console

for(let i=0; i<members.length; i++){
    const actualMembers = members[i];
    let divCard = createDivElement();
    divCard.classList.add('card','col-3','mx-1','my-5');
    for(let key in actualMembers){
        console.log(key + ": " + actualMembers[key]);
        let divImage = createDivElement();
        let nameContent = createName();
        let roleContent = createRole();
        if(key==='image'){
            divImage.classList.add('image');
            divImage.innerHTML = `<img src="./img/${actualMembers.image}" alt="${actualMembers.name} image">`
            divCard.append(divImage);
        } else if(key==='name'){
            nameContent.classList.add('text');
            nameContent.innerText = actualMembers.name;
            divCard.append(nameContent);
        }else {
            roleContent.classList.add('text');
            roleContent.innerText = actualMembers.role;
            divCard.append(roleContent);
        }
    }
    mainDom.append(divCard);
}


function createDivElement(){
    const divElement = document.createElement('div');
    return divElement
}

function createName(){
    const nameElement = document.createElement('h2');
    return nameElement;
}

function createRole(){
    const roleElement = document.createElement('p');
    return roleElement;
}