// pegando os elementos do html que vamos usar

    const taskInput = document.querySelector('#tarefa');
    const taskList = document.querySelector('#lista');
    const button = document.querySelector('#button')
    button.addEventListener('click',adicionarTarefa)
    
    function adicionarTarefa() {
      const text = tarefa.value.trim();
      if (text === ''){
        alert('Digite uma tarefa Válida')
        return
      };

      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.onchange = () => {
        span.classList.toggle('completed', checkbox.checked);
        
      };

      const span = document.createElement('span');
      span.textContent = text;
      span.style.marginLeft = '10px';
      span.style.flex = '1';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Editar';
      editBtn.onclick = () => editTask(span, editBtn);

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remover';
      removeBtn.onclick = () => {
        li.remove();
      };

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'actions';
      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(removeBtn);




      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(actionsDiv);

      lista.appendChild(li);
      tarefa.value = ''
    }

    function editTask(span, button) {
      const currentText = span.textContent;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentText;
      input.className = 'edit-input';

      span.replaceWith(input);
      button.textContent = 'Salvar';

      button.onclick = () => {
        if (input.value.trim() === '') return;
        span.textContent = input.value.trim();
        input.replaceWith(span);
        button.textContent = 'Editar';
        button.onclick = () => editTask(span, button);
        
      };
    }