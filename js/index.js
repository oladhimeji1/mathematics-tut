const topicsx = document.getElementById('topics');
const formulax = document.getElementById('formula');

const topics = ['Surd', 'Indices', 'Factorizing', 'Completing Square', 'Quadratic Equation'];
const formulas = ['Maths Fomula Handbook', '1300 Maths Fomulas'];


$('document').ready(() => {
    $('.topic').show();
    $('.topic-toggle').css('color', '#ffff');
});

$('.topic-toggle').click(() => {
    $('li').slideDown(500);
    $('.emb').slideUp(500);
    $('.topic').show();
    $('.topic-toggle').css('color', '#ffff');
    $('.formula').hide();
    $('#dictionary-cont').hide();

    $('.dictionary-toggle').css('color', '');
    $('.formula-toggle').css('color', '');
})

$('.formula-toggle').click(() => {
    $('li').slideDown(500);
    $('.emb').slideUp(500);
    $('.formula-toggle').css('color', '#ffff');
    $('.formula').show();
    $('.topic').hide();
    $('#dictionary-cont').hide();
    
    $('.dictionary-toggle').css('color', '');
    $('.topic-toggle').css('color', '');
})

$('.dictionary-toggle').click(() => {
    $('li').slideDown(500);
    $('.emb').slideUp(500);
    $('.dictionary-toggle').css('color', '#ffff');
    $('#dictionary-cont').show();
    $('.formula').hide();
    $('.topic').hide();
    
    $('.topic-toggle').css('color', '');
    $('.formula-toggle').css('color', '');
})
topics.map((topic, index) => {
    const element = document.createElement('div');
    element.innerHTML += `<li>${topic}</li>`;

    topicsx.appendChild(element);
    element.addEventListener('click', () => logg(index, topic))
});
formulas.map((formula, index) => {
    const element = document.createElement('div');
    element.innerHTML += `<li>${formula}</li>`;

    formulax.appendChild(element);
    element.addEventListener('click', () => formulaLogg(index, formula))
});

function logg(a, b){
    $(`#${a}`).slideDown(300);
    $('li').slideUp(500);
    $('.sub-head').hide();
    document.getElementById('back-arrow').style.display = 'flex';
    $('#display-title').html(b);
}
function formulaLogg(a, b){
    $(`#${a + 5}`).slideDown(300);
    $('li').slideUp(500);
    $('.sub-head').hide();
    document.getElementById('back-arrow').style.display = 'flex';
    $('#display-title').html(b);
}
$('#fa').click(() =>{
    $('li').slideDown(500);
    $('.emb').slideUp(500);
    document.getElementById('back-arrow').style.display = 'none';
    $('.sub-head').show();
})

const dictonaryURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
$('.btn').click(async () => {
    var data = $('#user-input').val();

    const res = await fetch(dictonaryURL + data);
    const wordMeaning = await res.json();

    document.getElementById('title').innerHTML = wordMeaning[0].word;
    console.log(wordMeaning[0].meanings[0])
    wordMeaning[0].meanings[0].definitions.map(def => {
        document.getElementById('mean').innerHTML += `
        <li>${def.definition}</li>`
    })
})


// https://drive.uqu.edu.sa/_/quc_physics/files/1300%20Math%20Formulas%20by%20Golden%20Art.pdf
// https://homepage.ntu.edu.tw/~wttsai/MathModel/Mathematical%20Formula%20Handbook.pdf