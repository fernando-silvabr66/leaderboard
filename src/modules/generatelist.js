const getData = (data) => {
  const buildContainer = document.getElementById('leaders-list');
  buildContainer.innerHTML = '';
  if (data != null) {
    data.result.forEach((element, index) => {
      const li = document.createElement('li');
      li.className = 'elements';
      const lineScore = document.createElement('div');
      lineScore.className = 'leader-score';
      lineScore.textContent = `${element.user} - ${element.score}`;
      li.appendChild(lineScore);
      buildContainer.append(li);
      if (index % 2 !== 0) {
        li.classList.add('grey-background');
      }
    });
  }
};

export default getData;