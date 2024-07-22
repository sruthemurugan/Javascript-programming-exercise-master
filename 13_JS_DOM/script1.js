const firstPara = document.querySelector('p');
console.log(firstPara);

const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

const allParas = document.querySelectorAll('p');
console.log(allParas);

allParas.forEach(para => {
  console.log(para.textContent);
})
para4.textContent = 'Fourth Paragraph';
para1.id = 'para1';
para1.className = 'paragraph';
para2.setAttribute('id', 'para2');
para2.classList.add('paragraph');
para3.id = 'para3';
para3.classList.add('paragraph');
para4.id = 'para4';
para4.classList.add('paragraph');
para1.style.color = 'green';
para1.style.fontSize = '24px';
para1.style.fontFamily = 'Arial';
para2.style.color = 'red';
para2.style.background = 'yellow';
para2.style.border = '1px solid black';
para3.style.color = 'green';
para3.style.fontStyle = 'italic';
para4.style.color = 'red';
para4.style.textDecoration = 'underline';
allParas.forEach((para, index) => {
  if (index % 2 === 0) {
    para.style.color = 'green';
  } else {
    para.style.color = 'red';
  }
})
para1.textContent = 'First Paragraph';
para1.id = 'para1';
para1.className = 'paragraph';
para2.textContent = 'Second Paragraph';
para2.id = 'para2';
para2.className = 'paragraph';
para3.textContent = 'Third Paragraph';
para3.id = 'para3';
para3.className = 'paragraph';
para4.textContent = 'Fourth Paragraph';
para4.id = 'para4';
para4.className = 'paragraph';