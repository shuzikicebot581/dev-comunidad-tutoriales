fetch('/api/tutorials')
  .then(response => response.json())
  .then(data => {
    const tutorialList = document.getElementById('tutorial-list');
    data.forEach(tutorial => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${tutorial.title}</h3><p>${tutorial.content}</p>`;
      tutorialList.appendChild(div);
    });
  });