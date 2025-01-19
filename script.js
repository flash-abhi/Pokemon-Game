//Implement your code here 
const p1_name = document.querySelector('#p1_name');
const p1_score = document.querySelector('#p1_score');
const p1_img = document.querySelector('#card1 > #img');
const p1_poke_name = document.querySelector('#card1 > #name');
const p1_experience = document.querySelector('#card1 > #experience');
const p1_abilities = document.querySelector('#card1 > #abilities');

const p2_name = document.querySelector('#p2_name');
const p2_score = document.querySelector('#p2_score');
const p2_img = document.querySelector('#card2 > #img');
const p2_poke_name = document.querySelector('#card2 > #name');
const p2_experience = document.querySelector('#card2 > #experience');
const p2_abilities = document.querySelector('#card2 > #abilities');

const fightBtn = document.querySelector('#fight');
let p1score =0;
let p2score =0;
fightBtn.addEventListener('click',()=>{
    
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const number1 = Math.floor(Math.random()*19) + 1
        const number2 = Math.floor(Math.random()*19) +1
        console.log(data.results[number1])
        if(number1== number2){
            number1--
            number2++
        }
        p1_name.textContent = 'John'
        p2_name.textContent = 'Alice'
        fetch(data.results[number1].url)
        .then((res2) => res2.json())
        .then((data2) => {
            console.log(data2)
            p1_abilities.textContent = ''
            for(let i =0;i<data2.abilities.length;i++){
                const li = document.createElement('li')
                li.textContent = data2.abilities[i].ability.name
                p1_abilities.appendChild(li)
            }
            p1_img.innerHTML= ''
            p1_poke_name.textContent =  data2.forms[0].name
            p1_experience.textContent = data2.base_experience;
            const img1 = document.createElement('img')
            img1.src = data2.sprites.other.dream_world.front_default
            p1_img.append(img1)
        }).catch((err) => console.error(err))
        fetch(data.results[number2].url)
        .then((res2) => res2.json())
        .then((data2) => {
            console.log(data2)
            p2_abilities.textContent = ''
            for(let i =0;i<data2.abilities.length;i++){
                const li = document.createElement('li')
                li.textContent = data2.abilities[i].ability.name
                p2_abilities.appendChild(li)
            }
            p2_img.innerHTML = ''
            p2_poke_name.textContent = data2.forms[0].name
            p2_experience.textContent = data2.base_experience;
            const img2 = document.createElement('img')
            img2.src = data2.sprites.other.dream_world.front_default
            p2_img.append(img2)

        }).catch((err) => console.error(err))
        p1_score.textContent = `score: ${p1score}`;
        p2_score.textContent = `score: ${p2score}`;
        if(parseInt(p1_experience.textContent) > parseInt(p2_experience.textContent))
        {
            p1score++;
            p1_score.textContent = `score: ${p1score}`;
        }
        else if(parseInt(p1_experience.textContent) == parseInt(p2_experience.textContent)){
            p1_score.textContent = `score: ${p1score}`;
            p2_score.textContent = `score: ${p2score}`;
        }
        else{
            p2score++;
            p2_score.textContent = `score: ${p2score}`;
        }
    }).catch((err) => console.error(err))
})




